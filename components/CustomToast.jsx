import { Toast } from "flowbite-react";

export default function CustomToast({ closeToast, message, type }) {

    return (

        <div className="relative p-4 w-full max-w-md h-full md:h-auto flex flex-col justify-center items-center " >

            {type === "error" ? (
                <div
                    className=" rounded-full bg-red-700 dark:bg-red-800 p-2 flex items-center justify-center mx-auto mb-3.5">
                    <svg className="w-6 h-6 text-white " aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                            d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="sr-only">Warning</span>
                </div>
            ) : (
                <div
                    className="rounded-full bg-green-600 dark:bg-green-800 p-2 flex items-center justify-center mx-auto mb-3.5">
                    <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                    </svg>
                    <span className="sr-only">Success</span>
                </div>
            )}
            <p className="text-center text-lg font-semibold text-white dark:text-gray-900">{message}</p>

        </div>

    );
}