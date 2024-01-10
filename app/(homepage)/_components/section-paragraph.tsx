import { cn } from "@/lib/utils"
import { Gothic_A1 } from "next/font/google"

const paragraphText = Gothic_A1({
    subsets: ["latin"],
    weight: "400"
})

export const SectionParagraph = () => {
    return (
        <div className={cn(
            "text-gray-500",
            paragraphText.className
        )}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit numquam soluta, quisquam deleniti at laudantium, nisi, a corrupti officiis tempore eligendi repellat aliquid odit.
            <div className="pt-4">
                Fugiat similique vitae saepe maiores repudiandae quos magni pariatur accusamus voluptatum, cupiditate optio sunt quis.
            </div>
        </div>
    )
}