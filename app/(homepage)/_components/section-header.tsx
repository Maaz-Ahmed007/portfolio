import { Cinzel } from "next/font/google"
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

interface SectionHeaderProps {
    heading: string
}

export const SectionHeader = ({ heading }: SectionHeaderProps) => {
    return (
        <div className="flex items-center md:justify-start justify-center">
            <h1 className={cn(
                "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center text-neutral-800 mb-1",
                textFont.className)}>
                {heading}
            </h1>
        </div>
    )
}