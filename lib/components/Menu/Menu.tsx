import {Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect} from 'react';
import {motion} from "framer-motion";


interface MenuProps {
    menuTrigger: ReactNode;
    children: ReactNode;
    showState: [boolean, Dispatch<SetStateAction<boolean>>];
}


const Menu = ({menuTrigger, showState, children}: MenuProps) => {

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            console.log(e.target)
            if (showState[0] && !document.getElementById("menu")?.contains(e.target as Node)) {
                showState[1](false)
            }
        }

        if (showState[0]) {
            setTimeout(() => document.addEventListener("click", handleClick), 100)
        }

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showState]);


    return <div className="relative">

        <div onClick={() => showState[1](prev => !prev)}>
            {menuTrigger}
        </div>

        {showState[0] && <motion.nav id="menu"
                                     initial={{
                                         opacity: 0,
                                         x: "10%",
                                         scale: 0.9
                                     }}

                                     animate={{
                                         opacity: 1,
                                         x: 0,
                                         scale: 1
                                     }}
                                     exit={{
                                         opacity: 0,
                                         x: "10%",
                                         scale: 0.9
                                     }}


                                     className="absolute top-12 z-10 w-48 rounded-xl border-2 border-gray-100 bg-white p-3 text-gray-700 shadow-sm">

            {children}
        </motion.nav>}
    </div>

}

Menu.displayName = 'Menu';

export {Menu};

export type {MenuProps};


interface MenuItemProps {
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode;
    className?: string;
}

const MenuItem = ({children, onClick, className}: MenuItemProps) => {
    return <div className="mb-1">
        <motion.button onClick={onClick} whileHover={{scale: 0.97}} whileTap={{scale: 0.93}}
                       className={"rounded-lg p-2 text-left w-full font-medium leading-none last:mb-0 flex items-center text-gray-700 hover:bg-gray-50 md:flex " + className + " "}>
            {children}
        </motion.button>
    </div>
}

MenuItem.displayName = 'MenuItem';

export {MenuItem};

export type {MenuItemProps};