import Image from "next/image"

export const Footer = () => {
    return (
        <div className="w-full flex flex-col pt-16 px-16 bg-[#BDBDBD]">
            <div className="flex items-center justify-center md:justify-start w-full">
                <h1 className="text-3xl font-extrabold uppercase whitespace-nowrap text-center mb-1 text-neutral-800">
                    Navega por aqui
                </h1>
            </div>
            <div className="flex items-center justify-center w-full pt-16 pb-12 md:pb-0">
                <ul className="flex flex-col items-center gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12
                text-xl font-light md:text-start mb-6
                ">
                    <li>Introdução</li>
                    <li>Sobre mim</li>
                    <li>Meu Portfólio</li>
                    <li>Projetos</li>
                    <li>Todos os Projetos</li>
                    <li>Meus Serviços</li>
                </ul>
            </div>
            <div className="flex flex-row items-center overflow-hidden">
                <Image
                    alt="Gears"
                    width={300}
                    height={300}
                    src="/home-images/gear.png"
                    className="hidden md:block relative md:top-36"
                />
                <Image
                    alt="Gears"
                    width={250}
                    height={250}
                    src="/home-images/gear.png"
                    className="hidden md:block relative md:top-28"
                />
                <Image
                    alt="Gears"
                    width={350}
                    height={350}
                    src="/home-images/gear.png"
                    className="hidden md:block relative md:top-28"
                />
                <Image
                    alt="Gears"
                    width={350}
                    height={350}
                    src="/home-images/gear.png"
                    className="hidden md:block relative md:top-36"
                />
            </div>
        </div>
    )
}