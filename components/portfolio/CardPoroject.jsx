import Link from "next/link"
import Image from "next/image"

export default function CardProject({ project }) {
    return (
        <div data-aos="fade-up"
            className=" items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 sm:h-56">
            <Link href={project.link}
                className="block overflow-hidden sm:w-1/3 sm:h-full sm:shrink-0 sm:top-0 rounded-lg"
                target="_blank">
                <Image className="hover:scale-125 transition duration-300 ease-in-out w-full rounded-lg sm:rounded-none sm:rounded-l-lg sm:h-full sm:object-cover"
                    src={`/images/project/${project.image.url}`} alt={project.image.alt} width={500} height={300} />
            </Link>

            <div className="box-border p-10 sm:pt-5 sm:px-5 sm:flex-grow sm:max-h-56 sm:overflow-y-auto ">
                <h3 className="text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href={project.link} target="_blank">{project.name}</Link>
                </h3>
                <p className="text-left mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 sm:break-words">
                    {project.description}
                </p>
                {/* tech */}
                <ul className="flex flex-wrap gap-3 sm:mt-0">
                    {project.tech.map((tech, index) => (
                        <li key={index} >
                            <Link href={tech.url}
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank">
                                {tech.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}