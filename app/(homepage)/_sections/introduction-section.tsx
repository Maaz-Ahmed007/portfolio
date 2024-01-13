import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";

import { Gothic_A1 } from "next/font/google"
import { Cinzel } from "next/font/google"
import { Lavishly_Yours } from "next/font/google"

const cinzelFont = Cinzel({
    subsets: ["latin"],
    weight: [
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

const lavishly_yoursFont = Lavishly_Yours({
    subsets: ["latin"],
    weight: ["400"],
})

const gothicFont = Gothic_A1({
    subsets: ["latin"],
    weight: "400"
})

export const IntroductionSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-full w-full bg-[#BDBDBD]" id="section1">
            {/* For medium and large devices */}
            {/* Left section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center md:border-r md:shadow-2xl border-gray-400 relative">
                {/* Section side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className={cn(
                        "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4 text-black",
                        cinzelFont.className
                    )}>Introdução</div>
                    <div className={cn(
                        "transform rotate-90 text-5xl md:text-6xl text-blue-700",
                        lavishly_yoursFont.className
                    )}>1</div>
                </div>
                {/* Left section content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start w-full px-12 md:px-20 lg:px-32">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800",
                            cinzelFont.className
                        )}>Nuno bernardes</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            primeira pessoa...
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Sou o Nuno e sou Designer natural de Braga, nascido em 2004. Sou destacado pela minha paixão pela relojoaria e do meu estilo clássico distinto.
                        <div className="pt-4">
                            Como designer, consigo ter uma apreciação refinada pela estética e pelo design, tentando a pouco e pouco refletir isso nos meus projetos.
                        </div>
                    </div>
                    {/* Content button */}
                    <button className={cn(
                        "w-full mt-8 px-2 py-4 flex justify-center md:justify-start bg-gray-500 hover:bg-gray-600 text-gray-300 font-normal text-xl md:text-base",
                        gothicFont.className
                    )}>
                        <Link href="/about">
                            Descobre mais sobre mim...
                        </Link>
                    </button>
                </div>
            </div>
            {/* Right section */}
            <div className="mt-20 md:w-2/4 relative overflow-hidden">
                {/* Right section image */}
                <div className="md:absolute inset-0">
                    <div className="absolute md:-bottom-8 w-full h-full">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="/home-images/section1pic.png"
                            alt="Home Image"
                        />
                    </div>
                </div>
            </div>
            {/* for small devices */}
            <div className="md:hidden">
                {/* Content section */}
                <div className="px-12 md:px-20 lg:px-32 w-full flex flex-col items-center md:items-start text-center md:text-start pt-20">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800",
                            cinzelFont.className
                        )}>Nuno bernardes</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            primeira pessoa...
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Sou o Nuno e sou Designer natural de Braga, nascido em 2004. Sou destacado pela minha paixão pela relojoaria e do meu estilo clássico distinto.
                        <div className="pt-4">
                            Como designer, consigo ter uma apreciação refinada pela estética e pelo design, tentando a pouco e pouco refletir isso nos meus projetos.
                        </div>
                    </div>
                    {/* Content button */}
                    <button className={cn(
                        "w-full mt-8 px-2 py-4 flex justify-center md:justify-start bg-gray-500 hover:bg-gray-600 text-gray-300 font-normal text-xl md:text-base",
                        gothicFont.className
                    )}>
                        <Link href="/about">
                            Descobre mais sobre mim...
                        </Link>
                    </button>
                </div>
                {/* Image section */}
                <div className="relative overflow-hidden mt-8">
                    <Image
                        layout="responsive"
                        width={800}
                        height={600}
                        src="/home-images/section1pic.png"
                        alt="Home Image"
                    />
                </div>
            </div>
        </section>
    )
}