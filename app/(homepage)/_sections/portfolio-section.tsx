import { SideSectionHeader } from "../_components/section-side-header"
import { SectionImage } from "../_components/section-image"
import { SectionHeader } from "../_components/section-header"
import { SectionSubheading } from "../_components/section-subheading"
import { SectionParagraph } from "../_components/section-paragraph"

export const PortfolioSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#898989]"
            id="section2"
        >
            <div className="h-full md:w-2/4">
                <SideSectionHeader
                    sectionNumber="2"
                    sectionHeading="Meu Portfolio"
                    color={2}
                />
                <div className="hidden md:block mt-20 mb-0 h-4/5">
                    <SectionImage src="/home-images/section2pic.png" />
                </div>
                <div className="md:w-2/3 my-auto pl-32">
                </div>
            </div>
            <div className="h-full md:w-2/4 sm:w-full
                md:border-l md:shadow-2xl border-gray-500">
                <div className="h-full w-full my-auto text-center md:text-start md:justify-start py-28 px-20 lg:my-48 md:px-40">
                    <SectionHeader heading="PORTFÓLIO" section />
                    <SectionSubheading subHeading="A VONTADE DE QUERER FAZER BEM E MELHOR" section />
                    <SectionParagraph
                        text1="Este é o meu Mundo este é o meu Design."
                        text2="O meu trabalho reflete uma fusão única entre a elegância clássica e a inovação moderna. Ao navegar no meu portfolio digital, podemos descobrir como transformo ideias em experiências visuais impactantes. Se procura criatividade com um toque de sofisticação, está no lugar certo."
                        section
                    />
                </div>
            </div>
        </section>
    )
}