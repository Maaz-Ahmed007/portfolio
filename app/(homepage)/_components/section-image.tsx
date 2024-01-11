import Image from "next/image"

interface SectionImageProps {
    src: string
}

export const SectionImage = ({ src }: SectionImageProps) => {
    return (
        <div className="md:relative h-full w-full">
            <Image
                fill
                src={src}
                alt="Home Image"
            />
        </div>
    )
}