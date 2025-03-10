"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HeadingType() {

    const el = useRef(null); // Simpan referensi ke elemen target
    const typed = useRef(null);


    useEffect(() => {
        if (typeof window !== "undefined" && el.current) {
            typed.current = new Typed(el.current, {
                strings: ["Web Developer🚀", "Database Engineer🚀", "Software Engineer🚀"],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2500,
                loop: true,
            });

        }
        return () => {
            typed.current?.destroy();
        };
    }, []);

    return (
        <h2 className="max-w-2xl mb-4 text-xl md:text-4xl lg:text-3xl xl:text-5xl dark:text-white" data-aos="fade-right" data-aos-delay="200" suppressHydrationWarning >
            I'm a <span ref={el} className="thisText" suppressHydrationWarning></span>
        </h2>
    );
}