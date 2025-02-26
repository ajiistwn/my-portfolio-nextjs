"use client"; // Hanya AOS yang berjalan di client-side

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
    useEffect(() => {
        AOS.init({
            once: false,
            disableMutationObserver: true,
        });
    }, []);

    return null; // Komponen ini hanya untuk inisialisasi, tidak perlu render UI
}
