"use server";
import nodemailer from "nodemailer";
import emailValidator from 'email-validator';


export async function sendMail(formData) {
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    try {

        const { email, subject, message, captchaToken } = await formData;
        const res = await fetch(verifyUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${captchaToken}`,
        });
        const captchaResult = await res.json();

        if (!captchaResult.success) {
            return { status: 400, success: false, message: "Captcha unverified!" };
        }

        if (!email) {
            return { status: 400, success: false, message: "Please enter your email address!" };
        }
        if (emailValidator.validate(email) === false) {
            return { status: 401, success: false, message: "Invalid email address!" };
        }
        if (!subject || !message) {
            return { status: 400, success: false, message: "Please enter the subject & message you would like to convey!" };
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
    } catch (error) {
        return { status: 500, success: false, message: "Not Connection!" }
    };

}
