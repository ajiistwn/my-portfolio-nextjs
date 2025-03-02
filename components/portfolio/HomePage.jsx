// "use client";
import HeadingType from "./HeadingType";
import ImageHome from "./ImageHome";
import Link from "next/link";
import LazyText from "./LazyText";


export default function Homepage() {

    return (
        <section id="home" className="pt-10 bg-white dark:bg-gray-900 box-border">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 box-border">

                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-white" data-aos="fade-right">
                        Hallo Everybody👋, I'm <br />
                        <p className="max-w-2xl text-5xl font-extrabold tracking-tight leading-none md:text-8xl lg:text-7xl xl:text-8xl dark:text-white">
                            Aji Setiawan
                        </p>
                    </h1>
                    <HeadingType />
                    <LazyText text={"This website is meant to introduce myself. Here, you can find information about me and my CV, my skills and expertise, my projects, and my contact details."} />

                    <Link href="#contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" data-aos-delay="300" data-aos="zoom-in">
                        <svg className="mr-1 w-6 h-6 text-base dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                        </svg>
                        Get Contact
                        <svg className="ml-1 w-6 h-6 text-base-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19V5m0 14-4-4m4 4 4-4" />
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ajiisetiawan/" className="mt-3 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" target="_blank" data-aos-delay="400" data-aos="zoom-in">
                        <svg className="mr-1 w-6 h-6 text-base dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                        Go To Linkedin
                        <svg className="w-6 h-6 text-base dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </Link>
                </div>
                <ImageHome />
            </div>
        </section>
    );
}