import { createTransport } from 'nodemailer';

export async function sendEmail(to, subject, text) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      to,
      subject,
      text,
    });
    return { success: true, message: 'Email sent successfully' };
  } catch (err) {
    throw new ErrorHandler('Error Sending Email', 500);
  }
}