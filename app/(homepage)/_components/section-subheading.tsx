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

interface SectionSubheadingProps {
    first: string
    second: string
}

export const SectionSubheading = ({ first, second }: SectionSubheadingProps) => {
    return (
        <div className="flex items-center md:justify-start justify-center">
            <h1 className={cn(
                "text-3xl md:text-2xl font-light uppercase whitespace-nowrap text-center text-neutral-800 mb-6",
                textFont.className)}>
                <div className="block md:hidden">
                    {first}
                </div>
                <div className="hidden md:block">
                    {second}
                </div>
            </h1>
        </div>
    )
}