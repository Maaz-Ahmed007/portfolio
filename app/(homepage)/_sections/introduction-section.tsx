import { SideSectionHeader } from "../_components/section-side-header"
import { SectionHeader } from "../_components/section-header"
import { SectionSubheading } from "../_components/section-subheading"
import { SectionParagraph } from "../_components/section-paragraph"
import { SectionImage } from "../_components/section-image"
import { CustomButtom } from "../_components/custom-button"

export const IntroductionSection = () => {
    return (
        <section
            className="
                flex flex-col md:flex-row 
                h-full w-full
                bg-[#BDBDBD]"
            id="section1"
        >
            <div className="
                h-full md:w-1/2
                flex justify-center
                md:border-r md:shadow-2xl border-gray-400
                flex-col md:flex-row items-center
            ">
                <SideSectionHeader
                    sectionNumber="1"
                    sectionHeading="Introdução"
                    color={1}
                />
                <div className="
                    px-4 md:px-20 lg:px-40 w-full flex flex-col items-center md:items-start text-center md:text-start
                  ">
                    <SectionHeader heading="Nuno bernardes" />
                    <SectionSubheading subHeading="primeira pessoa..." />
                    <SectionParagraph
                        text1="Sou o Nuno e sou Designer natural de Braga, nascido em 2004. Sou destacado pela minha paixão pela relojoaria e do meu estilo clássico distinto."
                        text2="Como designer, consigo ter uma apreciação refinada pela estética e pelo design, tentando a pouco e pouco refletir isso nos meus projetos."
                    />
                    <CustomButtom />
                    {/* Image */}
                    {/* <div className="md:hidden flex justify-center w-full">
                            <Image
                                width={300}
                                height={300}
                                src="/home-images/img.png"
                                alt="Home Image"
                            />
                        </div> */}
                </div>
            </div>
            <div className="hidden md:block mt-20 mb-0 h-4/5 md:w-2/4">
                <SectionImage src="/home-images/section1pic.png" />
            </div>
        </section>
    )
}