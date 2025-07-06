import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, number, countryCode, location, area, message } = body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MY_EMAIL,       // Your Gmail
      pass: process.env.MY_EMAIL_PASS,  // App password (NOT Gmail password)
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL, // Send to yourself
    subject: `🧾 New Quote Request - ${name}`,
    html: `
      <h2>New Quote Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${countryCode} ${number}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Area:</strong> ${area}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
