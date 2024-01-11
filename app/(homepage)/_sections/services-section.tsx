import { SideSectionHeader } from "../_components/section-side-header"
import { SectionHeader } from "../_components/section-header"
import { SectionSubheading } from "../_components/section-subheading"
import { SectionParagraph } from "../_components/section-paragraph"

export const ServicesSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#898989]"
            id="section2"
        >
            <div className="h-full md:w-2/4">
                <SideSectionHeader
                    sectionNumber="4"
                    sectionHeading="Meus Serviços"
                    color={2}
                />
                <div className="hidden md:block mt-20 mb-0 h-4/5">
                    {/* <SectionImage src="/home-images/section2pic.png" /> */}
                </div>
                <div className="md:w-2/3 my-auto pl-32">
                </div>
            </div>
            <div className="h-full md:w-2/4 sm:w-full
                md:border-l md:shadow-2xl border-gray-500">
                <div className="h-full w-full my-auto text-center md:text-start md:justify-start py-28 px-20 lg:my-48 md:px-40">
                    <SectionHeader heading="Meus Serviços" section />
                    <SectionSubheading subHeading="EXPANDIR O MEU TRABALHO AO MUNDO" section />
                    <SectionParagraph
                        text1="Uma das coisas que acredito no meu trabalho enquanto Designer a prestar um serviço é a Educação perante um cliente ou empresa e grande senso de humor. Acredito que estas sejam as palavras chaves para um bom sucesso."
                        text2="E revelo aqui em 4 anos a estudar e a trabalhar como Designer algumas das marcas/empresas onde tive a oportunidade de mostrar o meu trabalho."
                        section
                    />
                </div>
            </div>
        </section>
    )
}