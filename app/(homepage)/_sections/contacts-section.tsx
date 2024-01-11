import { SideSectionHeader } from "../_components/section-side-header"
import { SectionImage } from "../_components/section-image"
import { SectionHeader } from "../_components/section-header"

export const ContactsSection = () => {
    return (
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
                <div className="hidden md:block mt-20 mb-0 h-4/5">
                    {/* <SectionImage src="/home-images/section2pic.png" /> */}
                </div>
                <div className="md:w-2/3 my-auto pl-32">
                </div>
            </div>
            <div className="h-full md:w-2/4 sm:w-full
                md:border-l md:shadow-2xl border-gray-500">
                <div className="h-full w-full my-auto text-center md:text-start md:justify-start py-28 px-20 lg:my-48 md:px-40">
                    <SectionHeader heading="Contacto" section />
                    <div className="text-gray-300 pt-4">Number Telephone</div>
                    <div className="text-gray-300 pt-4">Instagram</div>
                    <div className="text-gray-300 pt-4">Behance</div>
                </div>
            </div>
        </section>
    )
}