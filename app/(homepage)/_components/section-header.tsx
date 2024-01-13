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
    section?: boolean
}

export const SectionHeader = ({
    heading,
    section = false
}: SectionHeaderProps) => {
    return (
        <div className="flex items-center justify-center md:justify-start">
            <h1 className={cn(
                "text-3xl md:text-2xl font-extrabold uppercase whitespace-nowrap text-center mb-1",
                textFont.className,
                !section && "text-neutral-800",
                section && "text-white"
            )}>
                {heading}
            </h1>
        </div>
    )
}