import Image from 'next/image'
import Link from 'next/link'

export default function CardBlog({ item, index, delay }) {
    return (
        <div key={index} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" data-aos="fade-up" data-aos-delay={delay} suppressHydrationWarning>
            <div className="h-56 w-full">
                <Link href={`${process.env.BASE_URL}/blogs/${item.slug}`} prefetch={false} className="h-full w-full bg-gray-100 dark:bg-gray-700 block ">
                    <Image src={item.imageUrl} alt={item.imageName} width={500} height={300} className="mx-auto h-full object-cover" />
                </Link>
            </div>
            <div className="pt-6 flex flex-col flex-1">


                <Link href={`${process.env.BASE_URL}/blogs/${item.slug}`} prefetch={false} >
                    <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white pb-2">
                        {item.title}
                    </h3>
                </Link>
                <p className="pb-3">{item.description}</p>


                <ul className="mt-auto flex flex-wrap mt-auto items-center gap-x-4 gap-y-1 ">
                    {item.tech.map((tec, index) => {
                        return (
                            <li key={index} className="flex items-center gap-2" >
                                <Link href={tec.url} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{tec.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}