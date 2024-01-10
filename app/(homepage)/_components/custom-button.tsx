import Link from "next/link"

export const CustomButtom = () => {
    return (
        <button
            className="w-full mt-8 px-2 py-5 flex justify-center items-center md:justify-start bg-gray-500 hover:bg-gray-600 text-gray-300 font-normal text-base"
        >
            <Link href="/about">
                Descobre mais sobre mim...
            </Link>
        </button>
    )
}