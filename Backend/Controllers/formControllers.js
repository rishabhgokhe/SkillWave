import catchAsyncError from '../Middlewares/catchAsyncError.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import { sendEmail } from '../Utils/sendEmail.js';

export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new ErrorHandler('All Fields required', 400));
  }

  const to = process.env.MY_EMAIL;
  const subject = `${name} contacted from SkillWave`;
  const messageBody = `Hello, My name is ${name} with email = ${email} \n Message = ${message}`;

  try {
    await sendEmail(to, subject, messageBody);
    res.status(200).json({
      success: true,
      message: 'Contact Email sent',
    });
  } catch (err) {
    return next(err);
  }
});

export const requestCourseOrFeature = catchAsyncError(async (req, res, next) => {
  const { name, email, course, courseDetail, featureDetail } = req.body;

  let to, subject, messageBody;

  if (course) {
    if (!name || !email || !course || !courseDetail) {
      return next(new ErrorHandler('All Fields required', 400));
    }

    to = process.env.MY_EMAIL;
    subject = `${name} requested ${course} course from SkillWave`;
    messageBody = `Hello, I am ${name} \n Email= ${email} \n Course Name= ${course} \n Course Detail= ${courseDetail}`;

  } else if (featureDetail) {
    if (!name || !email || !featureDetail) {
      return next(new ErrorHandler('All Fields required', 400));
    }

    to = process.env.MY_EMAIL;
    subject = `${name} requested a feature from SkillWave`;
    messageBody = `Hello, I am ${name} \n Email= ${email} \n Feature Details: ${featureDetail}`;

  } else {
    return next(new ErrorHandler('Invalid request', 400));
  }

  try {
    await sendEmail(to, subject, messageBody);
    res.status(200).json({
      success: true,
      message: course
        ? 'Course Request Email sent'
        : 'Feature Request Email sent',
    });
  } catch (err) {
    return next(new ErrorHandler('Failed to send email', 500));
  }
});
