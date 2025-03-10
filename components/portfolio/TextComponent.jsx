"use client";

export default function TextComponent({ text }) {
    return (
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" data-aos="fade-up" data-aos-delay="200" suppressHydrationWarning>
            {text}
        </p>
    );
}
