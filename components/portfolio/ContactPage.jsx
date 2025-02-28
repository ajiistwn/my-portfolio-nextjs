import Link from "next/link"
import FormContact from "./FormContact"


export default function ContactPage() {

    return (
        <section id="contact"
            className="pt-20 bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16 border-box overflow-hidden" >
            {/* {message} */}
            <div
                className=" mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">


                    <iframe data-aos="zoom-in" title="Google Maps Aji Setiawan"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8612.079942624863!2d106.85656975060105!3d-6.358296096618728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnMzQuMyJTIDEwNsKwNTEnMjguNCJF!5e0!3m2!1sid!2sid!4v1735914501815!5m2!1sid!2sid"
                        className="w-full h-48 md:h-64 rounded-lg" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />

                    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li data-aos="fade-up">
                            <Link href="https://www.google.com/maps/place/6%C2%B021'34.3%22S+106%C2%B051'28.4%22E/@-6.358296,106.85657,15z/data=!4m4!3m3!8m2!3d-6.3595278!4d106.8578889?hl=id&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                target="_blank" rel="noreferrer">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                        d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                                        clipRule="evenodd" />
                                </svg>


                                <span className="ml-3">Depok Jawa barat, Indonesia</span>
                            </Link>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <Link href="https://wa.me/6289636131620"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                target="_blank">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                </svg>

                                <span className="ml-3">+62 89636131620</span>
                            </Link>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="150">
                            <Link href="mailto:ajiisetiawan09@gmail.com"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                target="_blank">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                        d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                                        clipRule="evenodd" />
                                    <path fillRule="evenodd"
                                        d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                                        clipRule="evenodd" />
                                </svg>

                                <span className="ml-3">ajiisetiawan09@gmail.com</span>
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h2 data-aos="fade-left"
                        className="mb-3 mt-5 lg:-mt-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Contact Me
                    </h2>
                    <p data-aos="fade-left" data-aos-delay="100"
                        className="mb-4 lg:mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Can i help you? Do
                        you want to send me feedback or need more details about me? Let me know. </p>
                    <FormContact />
                </div>
            </div>
        </section >
    )
}