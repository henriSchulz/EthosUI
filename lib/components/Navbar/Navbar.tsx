import {ReactNode} from "react";
import {Button} from "../Button/Button";

interface NavbarProps {
    title: string;
    onNavigateHome: () => void;
    icon: ReactNode
    actionButton?: {
        text: string;
        onClick: () => void;
    }
    leftContent?: ReactNode;
    rightContent?: ReactNode;
}


const Navbar = ({title, icon, actionButton, onNavigateHome, leftContent, rightContent}: NavbarProps) => {
    return <header
        className="sticky bg-white z-8 top-0 flex h-16 items-center gap-4 border-b border-b-gray-100 py-3 px-4 md:px-6 w-full m-auto">
        <div className="w-full max-w-screen-lg mx-auto items-center flex">
            <nav
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

                {leftContent}
            </nav>


            <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 md:ml-auto">
                {actionButton && <Button variant="tertiary"
                                         onClick={actionButton.onClick}
                                         className="hidden md:flex ml-auto">
                    {actionButton.text}
                </Button>}

                {rightContent}


            </div>

        </div>

    </header>
}

Navbar.displayName = 'Navbar';

export {Navbar};
export type {NavbarProps};