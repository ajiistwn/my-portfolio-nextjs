import Image from 'next/image';

export default function HeroImage({ url, alt, prioritas }) {
    const priority = prioritas ? true : false;

    return (
        <Image className="box-border relative z-[200] brightness-125 contrast-115" width={500} height={300} src={url} alt={alt} style={{ width: "auto", height: "auto" }} priority={false} data-aos="fade-up" data-aos-delay="200" suppressHydrationWarning />

    );
}