import catchAsyncError from '../Middlewares/catchAsyncError.js';
import User from '../Models/userModal.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import crypto from 'crypto';
import { instance } from '../server.js';
import Payment from '../Models/paymentModal.js';

export const buySubscription = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user.role === 'admin')
    return next(
      new ErrorHandler("Admin doesn't need to buy subscription", 400)
    );

  const plan_id = process.env.PLAN_ID;

  const subscription = await instance.subscriptions.create({
    plan_id,
    customer_notify: 1,
    total_count: 12,
  });

  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;

  await user.save();

  res.status(201).json({
    success: true,
    message: 'Successfully Subscribed to Plan',
    subscription,
    subscriptionId: subscription.id,
  });
});

//-------------------------------------------------------------------------------------
export const paymentVerification = catchAsyncError(async (req, res, next) => {
  const { razorpay_signature, razorpay_payment_id, razorpay_subscription_id } =
    req.body;
  const user = User.findById(req.user._id);
  const subscription_id = user.subscription.id;

  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(razorpay_payment_id + '|' + razorpay_subscription_id, 'utf-8')
    .digest('hex');

  if (!(generated_signature === razorpay_signature))
    return res.redirect(`${process.env.WEBSITE_URL}/paymentfail`);

  await Payment.create({
    razorpay_signature,
    razorpay_payment_id,
    razorpay_subscription_id,
  });

  user.subscription.status = 'active';
  await user.save();

  res.redirect(
    `${process.env.WEBSITE_URL}/paymentsuccess?payment_id=${razorpay_payment_id}`
  );
});

//-------------------------------------------------------------------------------------
export const cancelSubscription = catchAsyncError(async (req, res, next) => {
  const user = User.findById(req.user._id);
  const subscription_id = user.subscription.id;
  let refund = false;
  await instance.subscriptions.cancel(subscription_id);

  const payment = await Payment.findOne({
    razorpay_subscription_id: subscription_id,
  });

  const remaningRefundDays = Date.now() - payment.subscriptionDate;

  const refundTime = process.env.REFUND_DAYS * 24 * 60 * 60 * 1000;

  if (refundTime > remaningRefundDays) {
    refund = true;
    // await instance.payments.refund(payment.razorpay_payment_id);
  } else {
    return next(
      new ErrorHandler(
        `Subscription days excceded 7 days return policy, Subscription Cancelled.. You can access your subscription until ${add30Days(payment.subscriptionDate)}`
      )
    );
  }

  await payment.deleteOne();
  user.subscription.id = undefined;
  user.subscription.status = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    message:
      'Money refunded and will reflect in your bank account within 4-5 Days',
  });
});

function add30Days(date) {
  let subscriptionDate = date;
  let subscriptionDateObj = new Date(subscriptionDate);

  // Add 30 days to the Date object
  subscriptionDateObj.setDate(subscriptionDateObj.getDate() + 30);

  const month = subscriptionDateObj.toDateString().split(' ')[1];
  const currentDate = subscriptionDateObj.toDateString().split(' ')[2];
  console.log(subscriptionDateObj.toDateString().split(' ')); // Logs the date in a readable string format
  return `${currentDate} ${month}`;
}
