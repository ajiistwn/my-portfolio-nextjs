"use client";
import { useEffect, useRef } from "react";
export default function Loading() {
    const originalFavicon = useRef(null);
    useEffect(() => {
        const favicon = document.querySelector('link[rel="icon"]');

        // Simpan favicon asli jika belum tersimpan
        if (favicon && !originalFavicon.current) {
            originalFavicon.current = favicon.getAttribute("href");
        }

        // Ganti favicon dengan loadingGif
        if (favicon) {
            favicon.setAttribute("href", "/loadingGif.gif");
        }

        // Saat komponen unmount atau loading selesai, kembalikan favicon asli
        return () => {
            if (favicon && originalFavicon.current) {
                favicon.setAttribute("href", originalFavicon.current);
            }
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-md">
            <img width={100} height={100} src="/loadingGif.gif" alt="loading.." />
        </div>
    );
}