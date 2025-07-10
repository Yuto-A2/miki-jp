import nodemailer from "nodemailer";
import { NextRequest } from 'next/server';

export async function POST(request: Request | NextRequest) {
    const { userName, userEmail, userMsg } = await request.json();
    const mail = process.env.MAIL_ACCOUNT;
    const pass = process.env.MAIL_PASSWORD;

    console.log("MAIL:", mail);
    console.log("PASS:", pass);


    if (!mail || !pass) {
        return new Response("Mail credentials are missing", { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: mail,
            pass: pass,
        },
    });

    const mailOptions = {
        from: mail,
        to: mail,
        replyTo: userEmail,
        subject: `Contact from ${userName}`,
        text: `Sent from: ${userEmail}\n\nMessage:\n${userMsg}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response("Email sent successfully", { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Failed to send email", { status: 500 });
    }
}
