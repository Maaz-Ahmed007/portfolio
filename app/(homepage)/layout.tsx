import { Navbar } from "./_components/navbar"
import { SectionSlider } from "./_components/section-slider"

const Portfolio = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-[#BDBDBD]">
            <Navbar />
            <SectionSlider />
            {children}
        </div>
    )
}

export default Portfolio