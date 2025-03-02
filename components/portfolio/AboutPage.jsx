import Link from 'next/link'
import ImageAbout from './ImageAbout'
import LazyText from './LazyText'

export default function AboutPage() {
    return (
        <section id="about" className="pt-0 -mt-10 mb-0 bg-white px-4 py-8 antialiased dark:bg-gray-900 lg:py-16 border-box overflow-hidden">
            {/* <AlertMessage /> */}
            <div
                className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <ImageAbout />

                <div className="me-auto place-self-center lg:col-span-7 lg:mt-0">
                    <h1 data-aos="fade-left"
                        className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        About Me
                    </h1>
                    <LazyText text={"Hello! I’m Aji Setiawan, a Information Technology and student at Bina Sarana Informatika University. I have a strong passion for software development, particularly in web development, database management, and programming with Python, Java, and JavaScript. With a commitment to continuous learning and improvement. I strive to deliver effective and innovative technology solutions in every project i undertake."} />
                    <Link data-aos-delay="200" data-aos="zoom-in"
                        href="https://drive.google.com/file/d/1O1KwAGGFwXUwBKH2QuaWQnPLPCcen6zt/view?usp=sharing"
                        className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        target="_blank">
                        <svg className="mr-1 w-6 h-6 text-base dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                                clipRule="evenodd" />
                        </svg>

                        Get Curriculum Vitae
                        <svg className="ml-1 w-6 h-6 text-base dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}