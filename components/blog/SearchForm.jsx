"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");




    function handleSearch(e) {
        e.preventDefault();
        setSearchQuery(searchParams.get("search") || "");

        const params = new URLSearchParams();
        if (searchQuery) params.set("search", searchQuery);
        params.set("page", "1"); // Reset pagination ke halaman 1 saat mencari

        router.push(`/blogs?${params.toString()}`); // Perbarui URL tanpa refresh halaman
        setSearchQuery("");
    };

    return (
        <form onSubmit={handleSearch} className=" pt-4 w-full gap-2 flex items-center justify-end flex-row lg:pt-0 ">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative w-full flex-1">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id="search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search Blogs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <button type="submit" className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Search
            </button>
        </form>
    );
}
