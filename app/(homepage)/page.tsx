import { SideSectionHeader } from "./_components/section-side-header"
import { ContactsSection } from "./_sections/contacts-section"

import { IntroductionSection } from "./_sections/introduction-section"
import { PortfolioSection } from "./_sections/portfolio-section"
import { ProjectSection } from "./_sections/project-section"
import { ProjectSection2 } from "./_sections/project-section2"
import { ServicesSection } from "./_sections/services-section"

const Page = () => {
    return (
        <>
            <IntroductionSection />
            <PortfolioSection />
            <ProjectSection />
            <ServicesSection />
            <ProjectSection2 />
            <ContactsSection />
        </>
    )
}

export default Page