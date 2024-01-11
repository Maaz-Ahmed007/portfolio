import { SideSectionHeader } from "../_components/section-side-header"
import { SectionHeader } from "../_components/section-header"
import { SectionSubheading } from "../_components/section-subheading"
import { SectionParagraph } from "../_components/section-paragraph"

export const ProjectSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#BDBDBD]"
            id="section3"
        >
            <div className="h-full md:w-2/4
                md:border-r md:shadow-2xl border-gray-400">
                <SideSectionHeader
                    sectionNumber="3"
                    sectionHeading="Projetos"
                    color={1}
                />

                <div className="h-full w-full my-auto text-center md:text-start md:justify-start py-28 px-20 lg:my-48 md:px-40">
                    <SectionHeader heading="PROJETOS" />
                    <SectionSubheading subHeading="CRIAR A SOLUÇÃO" />
                    <SectionParagraph
                        text1="Mergulhar na criação de experiencias visuais que transcendem expectativas em cada pixel, em cada traço, reside sempre um pouco da minha essência."
                        text2="Cada projeto é mais do que uma tarefa, é uma oportunidade de transformar visões em realidades."
                    />
                </div>
            </div>
            <div className="h-full md:w-2/4 sm:w-full">
                Section 2
            </div>
        </section>
    )
}