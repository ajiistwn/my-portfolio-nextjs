import { getPost } from '@/lib/post'
import Image from 'next/image'
import Link from 'next/link'


export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: "Blog Tidak Ditemukan | Blog Aji Setiawan Software Engineer Indonesia",
            description: "Halaman blog tidak ditemukan",
            icons: {
                icon: "/favicon.ico",
                apple: "/apple-touch-icon.png",
            },
        };
    }

    return {
        title: `${post.title} | Blog |`,
        description: `${post.description} | Blog Aji Setiawan`,
        keywords: post.tech.map((tec) => tec.name).join(", ") + "," + post.title + ", Blog Aji Setiawan",
        authors: [{ name: "Aji Setiawan", url: "https://ajisetiawan.dev" }],
        creator: "Aji Setiawan",
        icons: {
            icon: "/favicon.ico",
            apple: "/apple-touch-icon.png",
        },
        alternates: {
            canonical: `${process.env.BASE_DOMAIN}/blogs/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${process.env.BASE_DOMAIN}/blogs/${slug}`,
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.imageName,
                    preload: false,
                },
            ],
            locale: "id_ID",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Blogs Aji Setiawan`,
            description: `${post.description} | Blogs Aji`,
            images: [`${post.imageUrl}`],
        },
    };
}


export default async function BlogPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <div className="flex justify-between mt-0  md:mt-5  w-full  dark:bg-gray-900">
            <article className="mx-auto w-full max-w-4xl p-5 md:p-10  shadow-md rounded-xl dark:bg-gray-800 dark:text-white dark:shadow-white-800">
                <Link href={`/blogs`} prefetch={true} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg text-base font-medium text-dark mb-5 hover:bg-gray-100 dark:text-white dark:hover:bg-white/5 dark:hover:text-white " >
                    <span className='-mt-1'>
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
                    <span className=""> Back </span>
                </Link>
                <header className="mb-2 lg:mb-6 not-format">
                    <ul className=" mb-2 flex flex-wrap mt-auto items-center gap-x-4 gap-y-1 ">
                        {post.tech.map((tec, index) => {
                            return (
                                <li key={index} className="flex items-center gap-2" >
                                    <Link href={tec.url} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{tec.name}</Link>
                                </li>
                            )
                        })}
                    </ul>

                    <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">{post.title}</h1>
                    <p className="text-gray-500 dark:text-gray-400">{` ${post.author} - ${post.publishedAt} `}</p>

                </header>
                <Image src={post.imageUrl} alt={post.imageName} width={1024} height={800} priority={false} />
                <h2 className="">{post.title}</h2>
                <article dangerouslySetInnerHTML={{ __html: post.body }} className="max-w-screen-sm bg-gray-100 porse markdown-body" />
            </article>
        </div>
    );
}