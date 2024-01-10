import Image from "next/image"

import { SideSectionHeader } from "./_components/section-side-header"
import { SectionHeader } from "./_components/section-header"
import { SectionSubheading } from "./_components/section-subheading"
import { SectionParagraph } from "./_components/section-paragraph"
import { CustomButtom } from "./_components/custom-button"

import { SectionImage } from "./_components/section-image"

const Page = () => {
    return (
        <>
            <section
                className="flex flex-col md:flex-row h-full items-center w-full justify-between bg-[#BDBDBD]"
                id="section1"
            >
                <div className="h-full md:w-2/4
                    md:border-r md:shadow-2xl border-gray-400">
                    <SideSectionHeader
                        sectionNumber="1"
                        sectionHeading="Introdução"
                        color={1}
                    />
                    <div className="h-screen w-full my-auto text-center md:justify-start py-28 px-20 md:py-48 md:px-36">

                        <SectionHeader heading="Nuno bernardes" />
                        <SectionSubheading subHeading="primeira pessoa..." />
                        <SectionParagraph />
                        <CustomButtom />
                        <div className="md:hidden flex justify-center w-full">
                            <Image
                                width={300}
                                height={300}
                                src="/home-images/img.png"
                                alt="Home Image"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-4/5 md:w-2/4">
                    <SectionImage />
                </div>
            </section>
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
                    <div className="md:w-2/3 my-auto pl-32">
                        Section 1
                    </div>
                </div>
                <div className="h-full md:w-2/4 sm:w-full
                md:border-l md:shadow-2xl border-gray-500">
                    Section 2
                </div>
            </section>
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
                    <div className="md:w-2/3 my-auto pl-32">
                        Section 1
                    </div>
                </div>
                <div className="h-full md:w-2/4 sm:w-full">
                    Section 2
                </div>
            </section>
            <section
                className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#898989]"
                id="section4"
            >
                <div className="h-full md:w-2/4">
                    <SideSectionHeader
                        sectionNumber="4"
                        sectionHeading="Meus Serviços"
                        color={2}
                    />
                    <div className="md:w-2/3 my-auto pl-32">
                        Section 1
                    </div>
                </div>
                <div className="h-full md:w-2/4 sm:w-full
                md:border-l md:shadow-2xl border-gray-500">
                    Section 2
                </div>
            </section>
            <section
                className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#BDBDBD]"
                id="section5"
            >
                <div className="h-full md:w-2/4
                md:border-l md:shadow-2xl border-gray-400">
                    <SideSectionHeader
                        sectionNumber="5"
                        sectionHeading="Projetos"
                        color={1}
                    />
                    <div className="md:w-2/3 my-auto pl-32">
                        Section 1
                    </div>
                </div>
                <div className="h-full md:w-2/4 sm:w-full">
                    Section 2
                </div>
            </section>
            <section
                className="flex flex-col md:flex-row h-full mx-auto items-center w-full justify-between bg-[#898989]"
                id="section6"
            >
                <div className="h-full md:w-2/4">
                    <SideSectionHeader
                        sectionNumber="6"
                        sectionHeading="Contactos"
                        color={2}
                    />
                    <div className="md:w-2/3 my-auto pl-32">
                        Section 1
                    </div>
                </div>
                <div className="h-full md:w-2/4 sm:w-full 
                md:border-l md:shadow-2xl border-gray-500">
                    Section 2
                </div>
            </section>
        </>
    )
}

export default Page