"use client";


import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";

export default function Demo({ icon }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Tailwind 'lg' = 1024px
        };

        handleResize(); // Setel saat pertama kali render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isMobile) return null; // Tidak render Dropdown di layar besar
    if (isMobile) {
        return (

            <Dropdown className="lg:hidden  bg-white/90" label={icon} arrowIcon={false} >
                <Dropdown.Item href="/#home" className="dark:text-white">Home</Dropdown.Item>
                <Dropdown.Item href="/#about-sm" className="dark:text-white">About</Dropdown.Item>
                <Dropdown.Item href="/#skills" className="dark:text-white">My Skills</Dropdown.Item>
                <Dropdown.Item href="/#project" className="dark:text-white">My Project</Dropdown.Item>
                <Dropdown.Item href="/#contact" className="dark:text-white">Contact Me</Dropdown.Item>
                <hr />
                <Dropdown.Item href="/blogs" className="dark:text-white">My Blogs</Dropdown.Item>
                {/* <Dropdown.Item href="/projects">Projects</Dropdown.Item> */}
            </Dropdown>
        )
    }

}