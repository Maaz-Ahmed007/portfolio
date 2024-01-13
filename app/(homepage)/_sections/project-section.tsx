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

export const ProjectSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-full w-full bg-[#BDBDBD]" id="section3">
            {/* For medium and large devices */}
            {/* Left section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center md:border-r md:shadow-2xl border-gray-400 relative">
                {/* Section side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className={cn(
                        "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4 text-black",
                        cinzelFont.className
                    )}>Projetos</div>
                    <div className={cn(
                        "transform rotate-90 text-5xl md:text-6xl text-blue-700",
                        lavishly_yoursFont.className
                    )}>3</div>
                </div>
                {/* Left section content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start w-full px-12 md:px-20 lg:px-32">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800",
                            cinzelFont.className
                        )}>PROJETOS</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            CRIAR A SOLUÇÃO
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Mergulhar na criação de experiencias visuais que transcendem expectativas em cada pixel, em cada traço, reside sempre um pouco da minha essência.
                        <div className="pt-4">
                            Cada projeto é mais do que uma tarefa, é uma oportunidade de transformar visões em realidades.
                        </div>
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
                                    src="/section3/one.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">CROWLEY WATCHES</p>
                        </div>
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/two.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">COMBOIO DO TEMPO O LIVRO</p>
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
                                    src="/section3/three.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">BERNARDES PENS</p>
                        </div>
                        <div>
                            <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/four.png"
                                    alt="Project Image"
                                />
                            </div>
                            <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">LAMBDA WATCHES</p>
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
                        )}>Projetos</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800",
                            cinzelFont.className
                        )}>
                            CRIAR A SOLUÇÃO
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-500",
                        gothicFont.className
                    )}>
                        Mergulhar na criação de experiencias visuais que transcendem expectativas em cada pixel, em cada traço, reside sempre um pouco da minha essência.
                        <div className="pt-4">
                            Cada projeto é mais do que uma tarefa, é uma oportunidade de transformar visões em realidades.
                        </div>
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
                                        src="/section3/one.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">CROWLEY WATCHES</p>
                            </div>
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section3/two.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">COMBOIO DO TEMPO O LIVRO</p>
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
                                        src="/section3/three.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">BERNARDES PENS</p>
                            </div>
                            <div>
                                <div className="h-28 w-36 bg-[#b3b3b3] border border-gray-400 shadow-inner shadow-gray-600 flex justify-center items-center">
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        src="/section3/four.png"
                                        alt="Project Image"
                                    />
                                </div>
                                <p className="w-36 text-gray-500 uppercase mt-2 flex flex-wrap">LAMBDA WATCHES</p>
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