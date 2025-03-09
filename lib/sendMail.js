"use server";
import nodemailer from "nodemailer";
import emailValidator from 'email-validator';

export async function sendMail(formData) {
    const { email, subject, message } = await formData;

    if (!email) {
        return { status: 400, success: false, message: "Please enter your email address" };
    }
    if (emailValidator.validate(email) === false) {
        return { status: 401, success: false, message: "Invalid email address" };
    }
    if (!subject || !message) {
        return { status: 400, success: false, message: "Please enter the subject & message you would like to convey" };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    const info = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message,
    });

    return { status: 200, success: true, message: "Email sent successfully!" };
}
