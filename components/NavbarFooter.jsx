"use client";
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function NavbarFooter() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Tailwind 'lg' = 1024px
        };

        handleResize(); // Setel saat pertama kali render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="md:flex md:justify-between flex-wrap">
            <div className="mb-6 md:mr-24">
                <Link data-aos="fade-left" href="" className="flex items-center">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Navigations</span>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 data-aos="fade-up"
                        className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="#home" className="hover:underline">Home</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href={isMobile ? "#about-sm" : "#about"} className="hover:underline">About Me</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="#skills" className="hover:underline">My Skills</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="#project" className="hover:underline">My Project</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="#contact" className="hover:underline">Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 data-aos="fade-up"
                        className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="https://github.com/ajiistwn" className="hover:underline" target="_blank">Github</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="https://www.linkedin.com/in/ajiisetiawan/" className="hover:underline"
                                target="_blank">LinkedIn</Link>
                        </li>
                        <li data-aos="fade-up">
                            <Link href="https://www.instagram.com/ajiportofolio?igsh=dXdzejk2dzhmbmUx"
                                className="hover:underline" target="_blank">Instagram</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 data-aos="fade-up"
                        className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact me</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="https://wa.me/6289636131620" className="hover:underline" target="_blank">+62
                                89636131620</Link>
                        </li>
                        <li data-aos="fade-up" className="mb-4">
                            <Link href="mailto:ajiisetiawan09@gmail.com" className="hover:underline"
                                target="_blank">ajiisetiawan09@gmail.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}