import { IntroductionSection } from "./_sections/introduction-section"
import { PortfolioSection } from "./_sections/portfolio-section"
import { ProjectSection } from "./_sections/project-section"
import { ServicesSection } from "./_sections/services-section"
import { ProjectSection2 } from "./_sections/project-section2"
import { ContactsSection } from "./_sections/contacts-section"

import { SectionComponent } from "./_sections/section-component"

const Page = () => {
    return (
        <>
            <SectionComponent />
            <SectionComponent />
            <SectionComponent />
            <SectionComponent />
            {/* <IntroductionSection />
            <PortfolioSection />
            <ProjectSection />
            <ServicesSection />
            <ProjectSection2 />
            <ContactsSection /> */}
        </>
    )
}

export default Page