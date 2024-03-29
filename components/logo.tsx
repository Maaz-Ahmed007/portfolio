import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 flex">
                <Image
                    src="/logo/logo.png"
                    alt="Logo"
                    height={140}
                    width={140}
                />
            </div>
        </Link>
    )
}