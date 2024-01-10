import Image from "next/image"

export const SectionImage = () => {
    return (
        <div
            className="relative bottom-0 left-0 h-full w-full bg-no-repeat bg-cover bg-center"
        >
            <Image
                fill
                src="/home-images/img.png"
                alt="Home Image"
                // width={500}
                // height={500}
                className="relative bottom-0 left-0 h-full w-full bg-no-repeat bg-cover bg-center"
                sizes="(max-width: 768px) 90vw, 33vw"
            />
        </div>
    )
}