import Image from "next/image"

export const SectionComponent = () => {
    return (
        <section className="flex flex-col md:flex-row h-[150vh] md:h-full w-full overflow-y-auto bg-[#BDBDBD]" id="section1">
            {/* left Section */}
            <div className="h-full md:w-1/2 hidden md:flex flex-col md:flex-row justify-center items-center md:border-r md:shadow-2xl border-gray-400 relative">
                {/* Side heading */}
                <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
                    <div className="whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4">
                        Introduction
                    </div>
                    <div className="transform rotate-90 text-5xl md:text-6xl text-blue-700">
                        1
                    </div>
                </div>
                {/* Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start w-full px-12 md:px-20 lg:px-32">
                    {/* Content heading */}
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className="text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800">Heading</h1>
                    </div>
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className="text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800">Sub Heading</h1>
                    </div>
                    <div className="text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus consequuntur dolorem est adipisci alias aliquam repellat sapiente aspernatur.
                        <div className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga suscipit expedita temporibus? Minima voluptatum animi voluptatem.</div>
                    </div>
                    <button className="w-full mt-8 px-2 py-4 flex justify-center md:justify-start bg-gray-500 hover:bg-gray-600 text-gray-300 font-normal text-xl md:text-base">Button</button>
                </div>
            </div>
            {/* Right Section */}
            <div className="mt-20 md:w-2/4 relative overflow-hidden">
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
            {/* Single Column for Smaller Devices */}
            <div className="md:hidden">
                {/* Content */}
                <div className="px-12 md:px-20 lg:px-32 w-full flex flex-col items-center md:items-start text-center md:text-start pt-20">
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className="text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800">Heading</h1>
                    </div>
                    <div className="flex items-center md:justify-start justify-center">
                        <h1 className="text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6 text-neutral-800">Sub Heading</h1>
                    </div>
                    <div className="text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus consequuntur dolorem est adipisci alias aliquam repellat sapiente aspernatur.
                        <div className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga suscipit expedita temporibus? Minima voluptatum animi voluptatem.</div>
                    </div>
                    <button className="w-full mt-8 px-2 py-4 flex justify-center md:justify-start bg-gray-500 hover:bg-gray-600 text-gray-300 font-normal text-xl md:text-base">Button</button>
                </div>
                {/* Image */}
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