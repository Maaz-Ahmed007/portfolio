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

export const ProjectSection2 = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-full w-full bg-[#BDBDBD]" id="section5">
            {/* For medium and large devices */}
            {/* Left section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center md:border-r md:shadow-2xl border-gray-400 relative">
                {/* Section side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className={cn(
                        "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4 text-black",
                        cinzelFont.className
                    )}>Projectos</div>
                    <div className={cn(
                        "transform rotate-90 text-5xl md:text-6xl text-blue-700",
                        lavishly_yoursFont.className
                    )}>5</div>
                </div>
                {/* Left section content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start w-full px-12 md:px-20 lg:px-32">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800",
                            cinzelFont.className
                        )}>PROJETOS PARA AS MARCAS</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            CRIAR ALGO UNICO E INOVADOR
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Além de projetos desenvolvidos ao longo do meu percurso académico e outros autodidatas, também tenho o gosto de apresentar os projetos desenvolvidos para as marcas referidas anteriormente.
                    </div>
                </div>
            </div>
            {/* Right section */}
            <div className="hidden md:flex md:w-2/4">
                <div className="h-full w-full flex items-center justify-center flex-col space-y-8">
                    {/* Project container 1 */}
                    <div className="flex items-center justify-center flex-row gap-16">
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section5/one.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">Cervejaria f beer house</p>
                        </div>
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section5/two.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">GlobalMidia</p>
                        </div>
                    </div>
                    {/* Project container 2 */}
                    <div className="flex items-center justify-center flex-row gap-16">
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section5/three.jpg"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">bracara</p>
                        </div>
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section5/four.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">Ruela</p>
                        </div>
                    </div>
                    {/* Link container */}
                    <div className="pt-10">
                        <Link href="/" className="text-blue-700 font-normal capitalize underline">Ver Mais</Link>
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
                        )}>PROJETOS PARA AS MARCAS</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            CRIAR ALGO UNICO E INOVADOR
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Além de projetos desenvolvidos ao longo do meu percurso académico e outros autodidatas, também tenho o gosto de apresentar os projetos desenvolvidos para as marcas referidas anteriormente.

                    </div>
                </div>
                {/* Projects */}
                <div className="mt-12">
                    <div className="h-full w-full flex items-center justify-center flex-col space-y-8">
                        {/* Project container 1 */}
                        <div className="flex items-center justify-center flex-row gap-16">
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section5/one.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">Cervejaria f beer house</p>
                            </div>
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section5/two.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">GlobalMidia</p>
                            </div>
                        </div>
                        {/* Project container 2 */}
                        <div className="flex items-center justify-center flex-row gap-16">
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section5/three.jpg"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">bracara</p>
                            </div>
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section5/four.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">Ruela</p>
                            </div>
                        </div>
                        {/* Link container */}
                        <div className="pb-10">
                            <Link href="/" className="text-blue-700 font-normal capitalize underline">Ver Mais</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}