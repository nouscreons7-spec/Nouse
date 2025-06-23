
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, number, location, area, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // or use SMTP
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_RECEIVER,
      subject: "New Quote Request",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${number}
        Location: ${location}
        Area: ${area}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "Quote sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send quote", error: err.message });
  }
}
