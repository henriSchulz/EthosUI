import {ReactNode} from "react";
import {Button} from "../Button/Button";
import {Z_INDEX} from "../../index.ts";

interface NavbarProps {
    title: string;
    onNavigateHome: () => void;
    icon: ReactNode
    children?: ReactNode;
    variant?: "primary" | "secondary";
}


const Navbar = ({title, icon, children, onNavigateHome, variant}: NavbarProps) => {

    if (!variant || variant === "primary") {
        return <header
            style={{zIndex: Z_INDEX.NAVBAR}}
            className="flex sticky border-b-2 border-b-gray-200 bg-white top-0 gap-4 w-full md:m-auto items-center">

            <div className="w-full max-w-screen-lg pr-4 md:mx-auto items-center flex">
                <div
                    className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Button onClick={onNavigateHome}
                            variant="text"
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <div className="h-10 w-10">
                            {icon}
                        </div>
                        <span className="font-bold text-2xl text-gray-800 tracking-wider">{title}</span>
                    </Button>
                </div>
                {children}
            </div>


        </header>
    }


    return <header
        style={{zIndex: 9999}}
        className="flex sticky outer-navbar top-0 gap-4 w-full md:m-auto items-center">
        <div className="inner-navbar w-full items-center">
            <div className="w-full max-w-screen-lg pr-4 md:mx-auto items-center flex">
                <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Button onClick={onNavigateHome}
                            variant="text"
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <div className="h-10 w-10">
                            {icon}
                        </div>
                        <span className="font-bold text-2xl text-gray-800 tracking-wider">{title}</span>
                    </Button>
                </div>
                {children}
            </div>
        </div>

    </header>
}

Navbar.displayName = 'Navbar';

export {Navbar};
export type {NavbarProps};