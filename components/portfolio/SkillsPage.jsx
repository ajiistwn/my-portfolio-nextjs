import Image from "next/image";
import Link from "next/link";

import skills from "@/datas/portfolio/skills.json";
import tools from "@/datas/portfolio/tools.json";




export default async function SkillsPage() {
    return (
        <section id="skills" className="bg-white dark:bg-gray-900 border-box overflow-hidden">
            <div className="py-10 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 data-aos="fade-up"
                    className="lg:mb- text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                    My Skills</h2>
                <p data-aos-delay="100" data-aos="fade-up"
                    className="text-center mx-auto mt-4 mb-6 max-w-2xl font-light text-gray-500 md:mb-8 sm:text-xl dark:text-gray-400">
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
                                        className="hover:scale-90 transition duration-200 ease-in-out will-transform"
                                        src={`/images/${skill.image.src}`} alt={skill.image.alt} />
                                </Link>
                            </span>
                            <h3 data-aos-delay="100" data-aos="fade-up"
                                className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                {skill.title}
                            </h3>
                            <p data-aos-delay="200" data-aos="fade-up"
                                className="text-lg font-normal text-gray-500 dark:text-gray-400">
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
                            class="flex justify-center items-center" target="_blank">
                            <Image className="hover:grayscale grayscale-0 transition duration-200"
                                src={`/images/tools/${tool.image.src}`} width={100} height={100} alt={tool.image.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    );
}