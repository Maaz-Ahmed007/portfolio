import Link from "next/link"

export const SectionSlider = () => {
    return (
        <div className="fixed hidden md:block right-10 top-1/3 z-50">
            {[1, 2, 3, 4, 5, 6].map((section: number) => (
                <Link key={section} href={`#section${section}`}>
                    <div className="h-12 w-1 cursor-pointer transform rotate-90 bg-blue-700" />
                </Link>
            ))}
        </div>
    )
}