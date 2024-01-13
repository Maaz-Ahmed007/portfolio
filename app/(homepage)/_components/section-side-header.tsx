import { Cinzel } from "next/font/google"
import { Lavishly_Yours } from "next/font/google"
import { cn } from "@/lib/utils"

const textFont = Cinzel({
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

const numberFont = Lavishly_Yours({
    subsets: ["latin"],
    weight: ["400"],
})

interface SideSectionHeaderProp {
    sectionNumber: string
    sectionHeading: string
    color: number
}

export const SideSectionHeader = ({
    sectionNumber,
    sectionHeading,
    color
}: SideSectionHeaderProp) => {
    return (
        <div className="hidden md:flex flex-row items-center absolute top-0 bottom-0 transform -rotate-90 md:-left-28 lg:-left-16 m-4">
            <div className={cn(
                "whitespace-nowrap uppercase sm:text-xl md:text-3xl font-normal mr-4",
                textFont.className,
                color === 1 && "text-black",
                color === 2 && "text-white"
            )}>
                {sectionHeading}
            </div>
            <div className={cn(
                "transform rotate-90 text-5xl md:text-6xl",
                numberFont.className,
                color === 1 && "text-blue-700",
                color === 2 && "text-yellow-500"
            )}>
                {sectionNumber}
            </div>
        </div>
    )
}