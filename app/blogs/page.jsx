// "use client";
import Link from "next/link";
import { getAllPosts } from "@/lib/post";
import Pagination from "@/components/blog/Pagination";
import CardBlog from "@/components/blog/CardBlog";
import SearchForm from "@/components/blog/SearchForm";


export const metadata = {
    title: {
        template: '%s | Blogs',
        default: 'Blogs',
    },
    icon: "/favicon.ico",
    description: "Blogs Aji Setiawan Software Engineer Indonesia",
    keywords: "blog aji setiawan, blog, blog aji setiawan software engineer indonesia, blog aji setiawan software engineer,",
    authors: [{ name: "Aji Setiawan", url: process.env.BASE_URL }],
    alternates: {
        canonical: process.env.BASE_URL,
    },
    openGraph: {
        title: "Blogs Aji Setiawan Software Engineer Indonesia",
        description: "Blogs Aji Setiawan Software Engineer Indonesia",
        url: process.env.BASE_URL,
        siteName: "Aji Setiawan's Portfolio",
        images: [
            {
                url: `${process.env.BASE_URL}/images/ImageHome.png`,
                width: 1200,
                height: 630,
                alt: "Aji Setiawan",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blogs Aji Setiawan Software Engineer Indonesia",
        description: "Blogs Aji Setiawan Software Engineer Indonesia",
        images: [`${process.env.BASE_URL}/images/ImageHome.png`],
    },
};


export default async function BlogsPage({ searchParams }) {
    const param = await searchParams;

    const page = parseInt(param.page) || 1;
    const search = param.search || "";


    const { datas, pagination } = await getAllPosts(9, page, search);


    return (
        <>

            <section id="Blogs" className=" -mt-10 mb-0 bg-white px-4 py-8 antialiased dark:bg-gray-900 lg:py-16 border-box overflow-hidden flex  min-h-screen flex-col items-center">

                <div className=" sticky top-0  w-full flex flex-col items-center justify-center lg:flex-row lg:items-center  max-w-screen-xl py-10">
                    <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl inline-block w-full lg:text-left ">{`${search ? search : "All"}  ${pagination.total} Blog's`}</h2>
                    <SearchForm />

                </div>
                {/* container cards */}
                <div className={`max-w-screen-xl  mb-4  ${datas.length > 0 && "grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3"} auto-rows-min`} >

                    {/* cards */}

                    {datas.length > 0 ? (
                        datas.map((item, index) => {
                            return (
                                <CardBlog key={index} item={item} delay={index * 100} />
                            )
                        })
                    ) : (
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center">
                                <h1 className="mb-4 text-7xl  font-bold font- lg:text-9xl text-primary-600 dark:text-primary-500">Ups...</h1>
                                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Blog's does not exist !</p>
                                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we couldn't find that article. Maybe you can look for another article. </p>
                                <Link href={`/blogs`} className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">All Blog's</Link>
                            </div>
                        </div>
                    )}

                </div>

                <Pagination href={"/blogs"} page={page} pageCount={pagination.pageCount} />
            </section >
        </>
    );
}