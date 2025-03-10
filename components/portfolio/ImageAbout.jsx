"use client";
import { useState, useEffect } from "react";
import HeroImage from "./HeroImage";

export default function ImageAbout() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Tailwind 'lg' = 1024px
        };

        handleResize(); // Setel saat pertama kali render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) return null; // Tidak render Dropdown di layar besar
    if (!isMobile) {
        return (
            <div data-aos="fade-up-right" className="lg:py-[50px] lg:px-[80px] lg:col-span-5 lg:mt-0 hidden lg:block" suppressHydrationWarning>
                <a className="" href="#">
                    <HeroImage url="/images/AboutImage.png" alt="Aji Setiawan" prioritas={false} />
                </a>
            </div>
        )
    }
}
