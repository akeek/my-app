import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message }: EmailData = await req.json();

    console.log("Environment Variables Loaded:", process.env.EMAIL_USER, process.env.EMAIL_PASS);
    
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "meldingsservice@gmail.com",
      subject: `New Message: ${subject} from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}