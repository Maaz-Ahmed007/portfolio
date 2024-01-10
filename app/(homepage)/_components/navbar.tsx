import { Menu } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 w-full h-24 px-4 bg-transparent flex items-center">
                <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                    <Logo />
                    <div className="space-x-4 w-auto flex items-center">
                        <Button
                            size="lg"
                            variant="menu"
                            className="p-1 px-2 rounded-full"
                        >
                            <Menu className="w-8 h-8 text-blue-700" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}