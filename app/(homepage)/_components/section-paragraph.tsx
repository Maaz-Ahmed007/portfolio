import { cn } from "@/lib/utils"
import { Gothic_A1 } from "next/font/google"

const paragraphText = Gothic_A1({
    subsets: ["latin"],
    weight: "400"
})

interface SectionParagraphProps {
    text1: string
    text2?: string
    section?: boolean
}

export const SectionParagraph = ({
    text1,
    text2,
    section = false
}: SectionParagraphProps) => {
    return (
        <div className={cn(
            "text-gray-500",
            paragraphText.className,
            !section && "text-gray-500",
            section && "text-gray-300"
        )}>
            {text1}
            <div className="pt-4">
                {text2}
            </div>
        </div>
    )
}