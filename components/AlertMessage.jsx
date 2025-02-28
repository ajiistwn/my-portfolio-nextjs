"use client";
import { useState, useEffect } from 'react';

export default function AlertMessage() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState({
        message: "",
        type: "",
    });
    const handleClick = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        async function fetchFlashMessage() {
            const res = await fetch("/api/sendmail", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            if (data.message) {
                setMessage(data);
                setIsOpen(true);
                console.log(data);
                // Auto close setelah 5 detik

            }
        }
        fetchFlashMessage();

        // Polling setiap 5 detik untuk cek perubahan flash message
        const interval = setInterval(fetchFlashMessage, 1000);

        // Cleanup interval saat komponen di-unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`${isOpen ? "" : "hidden"} fixed flex z-[500] justify-center w-full h-full bg-gray-900 bg-opacity-50`}>
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button type="button" onClick={handleClick}
                        className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    {message.type === "error" ? (
                        <div
                            className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                    d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="sr-only">Warning</span>
                        </div>
                    ) : (
                        <div
                            className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            <span className="sr-only">Success</span>
                        </div>
                    )}
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{message.message}</p>
                </div>
            </div>
        </div>
    );
}