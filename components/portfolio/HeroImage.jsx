import Image from 'next/image';

export default function HeroImage({ url, alt }) {
    return (
        <Image className="box-border relative z-[100] brightness-125 contrast-115" width={500} height={300} src={url} alt={alt} style={{ width: "auto", height: "auto" }} priority={true} data-aos="fade-up" />

    );
}