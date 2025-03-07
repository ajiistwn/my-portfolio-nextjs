import { getPost } from '@/lib/post'
import Image from 'next/image'
import Link from 'next/link'

export default async function BlogPage({ params }) {
    const { slug } = await params
    const post = await getPost(slug) // await for the asynchronous call to 
    if (!post) {
        console.log("Post not found")
    }
    return (
        <div className="flex justify-between px-5 mx-auto w-full ">

            <article className="mx-auto w-full max-w-4xl p-10 shadow-md rounded-xl dark:bg-dark dark:text-white">
                <Link href={`${process.env.BASE_URL}/blogs`} prefetch={true} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg text-base font-medium text-dark mb-5 hover:bg-gray-100 dark:text-white dark:hover:bg-white/5 dark:hover:text-white " >
                    <span>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.325 14.825C11.175 14.825 11.025 14.775 10.925 14.65L5.27495 8.90002C5.04995 8.67502 5.04995 8.32503 5.27495 8.10002L10.925 2.35002C11.15 2.12502 11.5 2.12502 11.725 2.35002C11.95 2.57502 11.95 2.92502 11.725 3.15002L6.47495 8.50003L11.75 13.85C11.975 14.075 11.975 14.425 11.75 14.65C11.6 14.75 11.475 14.825 11.325 14.825Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="max-sm:hidden"> Back </span>
                </Link>
                <header className="mb-4 lg:mb-6 not-format">
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
                </header>
                <Image src={post.imageUrl} alt={post.imageName} width={1024} height={800} />
                <h2 className="">{post.title}</h2>
                <article dangerouslySetInnerHTML={{ __html: post.body }} className="max-w-screen-sm bg-gray-100 porse markdown-body" />
            </article>
        </div>
    );
}