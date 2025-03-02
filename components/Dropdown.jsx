"use client";


import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";

export default function Demo({ icon }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Tailwind 'lg' = 1024px
        };

        handleResize(); // Setel saat pertama kali render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isMobile) return null; // Tidak render Dropdown di layar besar
    if (isMobile) {
        return (

            <Dropdown className="lg:hidden" label={icon} arrowIcon={false} >
                <Dropdown.Item href="/#home">Home</Dropdown.Item>
                <Dropdown.Item href="/#about-sm">About</Dropdown.Item>
                <Dropdown.Item href="/#skills">My Skills</Dropdown.Item>
                <Dropdown.Item href="/#project">My Project</Dropdown.Item>
                <Dropdown.Item href="/#contact">Contact Me</Dropdown.Item>
                <hr />
                <Dropdown.Item href="/blogs">My Blogs</Dropdown.Item>
                {/* <Dropdown.Item href="/projects">Projects</Dropdown.Item> */}
            </Dropdown>
        )
    }

}