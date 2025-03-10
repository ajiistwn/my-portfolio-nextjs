import Image from "next/image";
import Link from "next/link";

import skills from "@/datas/portfolio/skills.json";
import tools from "@/datas/portfolio/tools.json";


export default async function SkillsPage() {
    return (
        <section id="skills" className="bg-white dark:bg-gray-900 border-box overflow-hidden pt-10 md:pt-0 ">
            <div className="py-10 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 data-aos="fade-up"
                    className="lg:mb- text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl" suppressHydrationWarning>
                    My Skills</h2>
                <p data-aos-delay="100" data-aos="fade-up"
                    className="text-center mx-auto mt-4 mb-6 max-w-2xl font-light text-gray-500 md:mb-8 sm:text-xl dark:text-gray-400" suppressHydrationWarning>
                    I have technological skills to support software development, here are some of the skills and
                    abilities that I have.</p>
                {/* skills */}
                <div className="grid grid-cols-1 mt-6 text-center sm:mt-8 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (

                        <div className="space-y-3 " key={index}>
                            <span
                                className="text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:text-gray-300">
                                <Link href={skill.link} target="_blank">
                                    <Image data-aos="zoom-in" width={500} height={300} style={{ width: "auto", height: "auto" }}
                                        className="transition duration-200 ease-in-out will-transform hover:scale-90"
                                        src={`/images/${skill.image.src}`} alt={skill.image.alt} suppressHydrationWarning />
                                </Link>
                            </span>
                            <h3 data-aos-delay="100" data-aos="fade-up"
                                className="text-2xl font-bold leading-tight text-gray-900 dark:text-white" suppressHydrationWarning>
                                {skill.title}
                            </h3>
                            <p data-aos-delay="200" data-aos="fade-up"
                                className="text-lg font-normal text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Tools */}
                <div
                    className="grid mt-10 px-5 mx-auto grid-cols-6 gap-8 text-gray-500 sm:gap-12 md:grid-cols-8 xl:max-w-screen-xl xl:p-0 lg:grid-cols-10 dark:text-gray-400">
                    {tools.map((tool, index) => (
                        <Link key={index} data-aos="zoom-in" data-aos-delay={tool.aos.delay}
                            href={tool.url}
                            className="flex justify-center items-center" target="_blank" suppressHydrationWarning>
                            <Image className="hover:grayscale grayscale-0 transition duration-200"
                                src={`/images/tools/${tool.image.src}`} width={100} height={100} alt={tool.image.alt} />
                        </Link>
                    ))}
                </div>
                <Link data-aos="zoom-in"
                    href="https://drive.google.com/drive/folders/1-pw7ZKrVs-QMYCLlZdNec0QwhDjHlKPY?usp=sharing"
                    className="mt-10 ml-5 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 lg:ml:12 xl:mt-20 " suppressHydrationWarning>
                    <svg className="mr-1 w-6 h-6 text-base dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                        <path fillRule="evenodd"
                            d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                            clipRule="evenodd" />
                        <path
                            d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                    </svg>

                    Go To Certificates
                    <svg className="w-6 h-6 text-base dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                            d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </Link>
            </div>
        </section>

    );
}