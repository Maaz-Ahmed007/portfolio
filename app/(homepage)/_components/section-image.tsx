import Image from "next/image"

export const SectionImage = () => {
    return (
        <div className="md:relative h-full w-full">
            <Image
                fill
                src="/home-images/img.png"
                alt="Home Image"
            />
        </div>
    )
}