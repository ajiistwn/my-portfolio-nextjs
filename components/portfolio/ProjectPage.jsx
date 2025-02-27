import projects from "@/datas/portfolio/projects";
import CardProject from "./CardPoroject";

export default function ProjectPage() {
    return (
        <section id="project" className="bg-white dark:bg-gray-900 pt-10 border-box overflow-hidden">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 data-aos="fade-up"
                        className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Project
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100"
                        className="font-light text-gray-500 sm:text-xl dark:text-gray-400">These are some examples of
                        projects I have worked on, reflecting my technical abilities and creativity.</p>
                </div>
                {/* container card */}
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 overflow-hidden rounded-lg">
                    {/* card */}
                    {projects.map((project, index) => (
                        <CardProject project={project} key={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}