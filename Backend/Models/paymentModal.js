import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  razorpay_signature: {
    type: String,
    required: true
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_subscription_id: {
    type: String,
    required: true,
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
