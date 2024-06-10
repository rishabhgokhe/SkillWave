import { createTransport } from 'nodemailer';

export async function sendEmail(to, subject, text, res) {
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
    res.status(200).json({
        message: 'Email sent successfully',
      });
  } catch (err) {
    res.status(500).json({
      message: 'Error Sending Email',
      error: err,
    });
  }
}
