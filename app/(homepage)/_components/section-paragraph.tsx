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
            Sou o Nuno e sou Designer natural de Braga, nascido em 2004. Sou destacado pela minha paixão pela relojoaria e do meu estilo clássico distinto.
            <div className="pt-4">
                Como designer, consigo ter uma apreciação refinada pela estética e pelo design, tentando a pouco e pouco refletir isso nos meus projetos.
            </div>
        </div>
    )
}