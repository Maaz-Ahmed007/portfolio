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

export const ServicesSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-full overflow-hidden w-full bg-[#898989]" id="section4">
            {/* For medium and large devices */}
            {/* Left section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center relative">
                {/* Section side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className={cn(
                        "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4 text-white",
                        cinzelFont.className
                    )}>MEUS SERVIÇOS</div>
                    <div className={cn(
                        "transform rotate-90 text-5xl md:text-6xl text-yellow-500",
                        lavishly_yoursFont.className
                    )}>4</div>
                </div>
                {/* Left section services */}
                <div className="mt-8">
                    <div className="h-full w-full flex items-center justify-center flex-col space-y-8">
                        {/* Project container 1 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/one.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/two.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                        {/* Project container 2 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/three.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/four.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                        {/* Project container 3 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/three.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/four.png"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                    </div>
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
                        )}>MEUS SERVIÇOS</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-white",
                            cinzelFont.className
                        )}>
                            EXPANDIR O MEU TRABALHO AO MUNDO
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-300",
                        gothicFont.className
                    )}>
                        Uma das coisas que acredito no meu trabalho enquanto Designer a prestar um serviço é a Educação perante um cliente ou empresa e grande senso de humor. Acredito que estas sejam as palavras chaves para um bom sucesso.
                        <div className="pt-4">
                            E revelo aqui em 4 anos a estudar e a trabalhar como Designer algumas das marcas/empresas onde tive a oportunidade de mostrar o meu trabalho.
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
                            cinzelFont.className)}>MEUS SERVIÇOS</h1>
                    </div>
                    {/* Content sub heading */}
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className={cn(
                            "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-white",
                            cinzelFont.className)}>
                            EXPANDIR O MEU TRABALHO AO MUNDO
                        </h1>
                    </div>
                    {/* Content paragraph */}
                    <div className={cn(
                        "text-gray-300",
                        gothicFont.className
                    )}>
                        Uma das coisas que acredito no meu trabalho enquanto Designer a prestar um serviço é a Educação perante um cliente ou empresa e grande senso de humor. Acredito que estas sejam as palavras chaves para um bom sucesso.
                        <div className="pt-4">
                            E revelo aqui em 4 anos a estudar e a trabalhar como Designer algumas das marcas/empresas onde tive a oportunidade de mostrar o meu trabalho.
                        </div>
                    </div>
                </div>
                <div className="mt-8 pb-12">
                    <div className="h-full w-full flex items-center justify-center flex-col space-y-8">
                        {/* Project container 1 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/one.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/two.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                        {/* Project container 2 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/three.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section4/four.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                        {/* Project container 3 */}
                        <div className="flex items-center justify-center flex-row gap-16 pt-8">
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/three.png"
                                    alt="Project Image"
                                />
                            </div>
                            <div className="h-28 w-36 flex justify-center items-center">
                                <Image
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    src="/section3/four.png"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}