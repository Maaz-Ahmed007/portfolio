import Image from "next/image"

export const SectionComponentMobile = () => {
    return (
        <section className="md:hidden flex flex-col h-[150vh] w-full bg-[#898989] overflow-y-auto" id="section1">
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