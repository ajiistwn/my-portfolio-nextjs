"use client";

import { useEffect } from "react";
import { useState } from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { sendMail } from '@/lib/sendMail';
import Loading from "@/app/loading";
import ReCAPTCHA from "react-google-recaptcha";

import "react-toastify/dist/ReactToastify.css";

import CustomToast from '@/components/CustomToast';

export default function FormContact() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [render, setRender] = useState(0);

    useEffect(() => {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(darkModeQuery.matches);

        const handleChange = (e) => {
            setIsDarkMode(e.matches);
            setRender((prev) => prev + 1);
        };
        darkModeQuery.addEventListener("change", handleChange);

        return () => darkModeQuery.removeEventListener("change", handleChange);
    }, []);


    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await sendMail({ ...formData, captchaToken });
            if (result.status === 200) {
                setFormData({
                    email: "",
                    subject: "",
                    message: "",
                });

                toast(<CustomToast type="success" message={result.message} />);
            } else {
                toast(<CustomToast type="error" message={result.message} />);

            }
        } catch (error) {
            toast(<CustomToast type="error" message={error.message} />);
        } finally {
            setLoading(false);
        }


    };
    const siteKeys = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (loading) return <Loading />;

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                hideProgressBar={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={isDarkMode ? "light" : "dark"}
                transition={Slide}

            />
            <form className="space-y-8">
                <div data-aos="zoom-in" suppressHydrationWarning>
                    <label htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email</label>
                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com" required />
                </div>
                <div data-aos="zoom-in" suppressHydrationWarning>
                    <label htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Subject</label>
                    <input type="text" id="subject" name='subject' value={formData.subject} onChange={handleChange}
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let me know how i can help you?" required />
                </div>
                <div data-aos="zoom-in" data-aos-delay="100" className="sm:col-span-2" suppressHydrationWarning>
                    <label htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                        message</label>
                    <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <div data-aos="zoom-in" data-aos-delay="100" className="sm:col-span-2" suppressHydrationWarning>
                    <ReCAPTCHA
                        key={render}
                        sitekey={siteKeys}
                        onChange={(token) => setCaptchaToken(token)}
                        theme={isDarkMode ? "dark" : "light"}
                    />
                </div>
                <button data-aos="zoom-in" type="button" onClick={handleSubmit} data-modal-target="successModal"
                    data-modal-toggle="successModal"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" suppressHydrationWarning>Send
                    message</button>
            </form>
        </>
    )
}