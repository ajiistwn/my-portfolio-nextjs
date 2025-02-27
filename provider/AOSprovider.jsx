"use client"; // Hanya AOS yang berjalan di client-side

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
    const pathname = usePathname(); // Ganti useRouter dengan usePathname
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS setiap kali halaman berubah
    }, [pathname]);
    return null; // Komponen ini hanya untuk inisialisasi, tidak perlu render UI
}
