"use client";
import { useEffect, useRef } from "react";
export default function Loading() {
    const originalFavicon = useRef(null);
    const faviconElement = useRef(null);

    useEffect(() => {
        let favicon = document.querySelector('link[rel="icon"]');

        // Simpan favicon asli jika belum tersimpan
        if (!originalFavicon.current) {
            originalFavicon.current = favicon ? favicon.getAttribute("href") : null;
        }

        // Jika favicon tidak ada, buat elemen baru
        if (!favicon) {
            favicon = document.createElement("link");
            favicon.setAttribute("rel", "icon");
            document.head.appendChild(favicon);
        }

        // Simpan referensi favicon yang digunakan
        faviconElement.current = favicon;

        // Set favicon ke loading GIF
        favicon.setAttribute("href", "/loadingGif.gif");

        // Saat unmount, kembalikan favicon asli dengan cache buster
        return () => {
            if (faviconElement.current) {
                if (originalFavicon.current) {
                    faviconElement.current.setAttribute("href", `${originalFavicon.current}?t=${Date.now()}`);
                } else {
                    // Jika awalnya tidak ada favicon, hapus elemen yang dibuat
                    faviconElement.current.remove();
                }
            }
        };
    }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-md">
            <img width={100} height={100} src="/loadingGif.gif" alt="loading.." />
        </div>
    );
}