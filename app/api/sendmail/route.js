import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import emailValidator from 'email-validator';
// import { serialize } from "cookie";
import { cookies } from "next/headers";

export async function POST(req, res) {

    const { email, subject, message } = await req.json();

    if (emailValidator.validate(email) === false) {
        return NextResponse.json(
            { error: 'Invalid email address' },
            {
                status: 400,
                headers: {
                    "Set-Cookie": `flashMessage=${encodeURIComponent(
                        JSON.stringify({ message: "failed to send email, maybe because the email is not registered or the connection is poor", type: "error" })
                    )}; Path=/; HttpOnly; Secure; SameSite=Strict`,
                    "Content-Type": "application/json",
                },
            }
        );
    }


    console.log('Email received:', email, subject, message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Gunakan variabel lingkungan
            pass: process.env.EMAIL_PASS
        }
    });

    const ress = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // Kullanıcıdan alınan e-posta adresini güncelle
        subject: `Website Portfolio from - ${email} - ${subject}`,
        text: message,
    });

    return NextResponse.json(
        { message: 'Email sent successfully' },
        {
            status: 200,
            headers: {
                "Set-Cookie": `flashMessage=${encodeURIComponent(
                    JSON.stringify({ message: "Thank you for visiting and sending feedback, have a nice day", type: "success" })
                )}; Path=/; HttpOnly; Secure; SameSite=Strict`,
                "Content-Type": "application/json",
            },
        }
    );

}

// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = await cookies();
    const flashMessage = await cookieStore.get("flashMessage");

    if (!flashMessage) {
        return NextResponse.json({ message: null, type: null });
    }

    try {
        const parsedMessage = JSON.parse(decodeURIComponent(flashMessage.value));

        // Buat response dan hapus cookie flashMessage setelah diambil
        const response = NextResponse.json(parsedMessage);
        response.cookies.set("flashMessage", "", { maxAge: 0 });

        return response;
    } catch (error) {
        console.error("Error parsing flashMessage:", error);
        return NextResponse.json({ message: null, type: null });
    }
}

