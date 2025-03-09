"use client";
import { useEffect } from "react";
export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-md">
            <img width={100} height={100} src="/loadingGif.gif" alt="loading.." />
        </div>
    );
}