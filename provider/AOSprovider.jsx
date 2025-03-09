"use client"; // Hanya AOS yang berjalan di client-side

import { Fragment, useEffect } from "react";
// import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
    // const pathname = usePathname(); // Ganti useRouter dengan usePathname
    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
                once: false,
            });
        }
    }, []);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS setiap kali halaman berubah
    }, []);
    return null;
}
