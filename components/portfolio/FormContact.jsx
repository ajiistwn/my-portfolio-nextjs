"use client";

import { useEffect } from "react";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { sendMail } from '@/lib/sendMail';
import "react-toastify/dist/ReactToastify.css";


export default function FormContact() {

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
        const result = await sendMail(formData)

        if (result.status == 200) {
            setFormData({
                email: "",
                subject: "",
                message: "",
            })
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }


    };

    return (
        <>
            <ToastContainer />
            <form className="space-y-8">
                <div data-aos="zoom-in">
                    <label htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email</label>
                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com" required />
                </div>
                <div data-aos="zoom-in">
                    <label htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" name='subject' value={formData.subject} onChange={handleChange}
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let me know how i can help you?" required />
                </div>
                <div data-aos="zoom-in" data-aos-delay="100" className="sm:col-span-2">
                    <label htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                        message</label>
                    <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button data-aos="zoom-in" type="button" onClick={handleSubmit} data-modal-target="successModal"
                    data-modal-toggle="successModal"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                    message</button>
            </form>
        </>
    )
}