// "use client";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/post";
import Pagination from "@/components/blog/Pagination";
import CardBlog from "@/components/blog/CardBlog";

export const metadata = {
    title: {
        template: '%s | Blogs',
        default: 'Blogs',
    },
    description: "Blogs Aji Setiawan Software Engineer Indonesia",
    icon: "/favicon.ico"
};



export default async function BlogsPage({ searchParams }) {
    const param = await searchParams;

    const page = parseInt(param.page) || 1;

    const { datas, pagination } = await getAllPosts(1, page);


    return (


        <section id="Blogs" className="pt-10 -mt-10 mb-0 bg-white px-4 py-8 antialiased dark:bg-gray-900 lg:py-16 border-box overflow-hidden flex justify-center min-h-screen flex-col items-center">

            <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:items-center  max-w-screen-xl py-10">
                <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl inline-block w-full lg:text-left ">{`All  ${pagination.total} Blogs`}</h2>

                <form className="pt-4 w-full gap-2 flex items-center justify-end flex-row lg:pt-0 ">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full flex-1">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search Questions & Answers" required />
                    </div>

                    <button type="button" data-modal-target="question-modal" data-modal-toggle="question-modal" className=" rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Ask a question</button>
                </form>
            </div>
            {/* container cards */}
            <div className=" max-w-screen-xl  mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3 auto-rows-min" >

                {/* cards */}
                {
                    datas.map((item, index) => {
                        return (
                            <CardBlog key={index} item={item} />
                        )
                    })
                }

            </div>

            <Pagination href={"/blogs"} page={page} pageCount={pagination.pageCount} />
        </section >
    );
}