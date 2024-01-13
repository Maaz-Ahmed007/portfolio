import { cn } from "@/lib/utils"
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

export const PortfolioSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-full overflow-hidden w-full bg-[#898989]" id="section2">
            {/* For medium and large devices */}
            {/* Left section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center relative">
                {/* Section side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className={cn(
                        "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4 text-white",
                        cinzelFont.className
                    )}>Meu Portfolio</div>
                    <div className={cn(
                        "transform rotate-90 text-5xl md:text-6xl text-yellow-500",
                        lavishly_yoursFont.className
                    )}>2</div>
                </div>
                {/* Left section image */}
                <div className="relative overflow-hidden mt-8">
                    <Image
                        layout="responsove"
                        width={800}
                        height={900}
                        src="/section2pic.png"
                        alt="Portfolio Image"
                    />
                </div>
            </div>
            {/* Right section */}
            <div className="hidden md:flex justify-center items-center md:w-2/4 md:border-l md:shadow-2xl border-gray-500">
                {/* Right section content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start w-full px-12 md:px-20 lg:px-32 pt-20">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-white",
                            cinzelFont.className
                        )}>PORTFÓLIO</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-white",
                            cinzelFont.className
                        )}>
                            A VONTADE DE QUERER FAZER BEM E MELHOR
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-300",
                        gothicFont.className
                    )}>
                        Este é o meu Mundo este é o meu Design.
                        <div className="pt-4">
                            O meu trabalho reflete uma fusão única entre a elegância clássica e a inovação moderna. Ao navegar no meu portfolio digital, podemos descobrir como transformo ideias em experiências visuais impactantes. Se procura criatividade com um toque de sofisticação, está no lugar certo.
                        </div>
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
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-white",
                            cinzelFont.className)}>PORTFÓLIO</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-white",
                            cinzelFont.className)}>
                            A VONTADE DE QUERER FAZER BEM E MELHOR
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-300",
                        gothicFont.className
                    )}>
                        Este é o meu Mundo este é o meu Design.
                        <div className="pt-4">
                            O meu trabalho reflete uma fusão única entre a elegância clássica e a inovação moderna. Ao navegar no meu portfolio digital, podemos descobrir como transformo ideias em experiências visuais impactantes. Se procura criatividade com um toque de sofisticação, está no lugar certo.
                        </div>
                    </div>
                </div>
                {/* Image section */}
                <div className="relative overflow-hidden mt-8">
                    <Image
                        layout="responsive"
                        width={800}
                        height={900}
                        src="/section2pic.png"
                        alt="Right Image"
                    />
                </div>
            </div>
        </section>
    )
}