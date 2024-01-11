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
    subHeading: string
    section?: boolean
}

export const SectionSubheading = ({
    subHeading,
    section = false
}: SectionSubheadingProps) => {
    return (
        <div className="flex items-center md:justify-start justify-center">
            <h1 className={cn(
                "text-3xl md:text-2xl font-light uppercase text-center md:text-start mb-6",
                textFont.className,
                !section && "text-neutral-800",
                section && "text-slate-200"
            )}>
                {subHeading}
            </h1>
        </div>
    )
}