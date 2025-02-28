import HeroImage from "./HeroImage";
export default function ImageHome() {
    return (
        <div id="about-sm" className="relative mb-0 lg:mt-0 lg:col-span-5 lg:flex box-border overflow-hidden ">
            {/* <span className="z-[10]" data-aos="fade-up"> */}
            <HeroImage url="/images/ImageHome.png" alt="Aji Setiawan" />
            {/* </span> */}
            <span className="-ms-[400px] md:-ml-[300px] box-border ">
                <svg className="bg-pimary-700 -ml-[50px] w-[120%] z-0 absolute -bottom-10 md:w-[120%] md:-ml-[100px] md:-bottom-24 lg:-ml-[150px] lg:-bottom-16 xl:-ml-[300px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" data-aos="fade-left">
                    <path fill="#1d4ed8" d="M47.1,-68.2C58.3,-56.7,62.7,-39.3,67,-22.6C71.3,-5.9,75.7,10.1,71.1,22.8C66.5,35.5,53,45,39.7,53.3C26.4,61.6,13.2,68.8,2.3,65.6C-8.6,62.5,-17.1,48.9,-23.9,38.4C-30.6,28,-35.5,20.5,-43.9,10.5C-52.4,0.5,-64.4,-12.2,-63.9,-22.9C-63.3,-33.6,-50.2,-42.4,-37.5,-53.3C-24.8,-64.3,-12.4,-77.4,2.8,-81.3C18,-85.1,36,-79.7,47.1,-68.2Z" transform="translate(100 100)" />
                </svg>
            </span>
        </div>
    );
}