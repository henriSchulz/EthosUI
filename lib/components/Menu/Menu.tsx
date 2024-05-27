import {Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect, useState} from 'react';
import {Z_INDEX} from "../../index.ts";
import { useIsMount } from '../../utils.ts';


interface MenuProps {
    menuTrigger: ReactNode;
    children: ReactNode;
    showState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Menu = ({menuTrigger, showState, children}: MenuProps) => {

    const isMount = useIsMount();

    const [innerShowState, setInnerShowState] = useState(false)

    const _id = "menu-" + Math.floor(Math.random() * 1000);

    useEffect(() => {

        if (isMount) return;

        const open = showState[0];

        console.log("Open", open)

        if (open) {
            setInnerShowState(true);
        } else {
            const el = document.getElementById(_id);

            if (el) {
               el.classList.add("menu-animation-out");
            }

            setTimeout(() => setInnerShowState(false), 240);
        }



        const handleClick = (e: MouseEvent) => {
            if (showState[0] && !document.getElementById("menu")?.contains(e.target as Node)) {
                showState[1](false)
            }
        }
        setTimeout(() => document.addEventListener("click", handleClick), 100)

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showState[0]]);


    return <div className="relative">

        <div onClick={() => showState[1](prev => !prev)}>
            {menuTrigger}
        </div>

        {innerShowState && <nav id={_id} style={{zIndex: Z_INDEX.MENU}}
                              className="menu-animation inset-0 h-fit absolute right-0 top-12 w-48 rounded-xl border-2 border-gray-100 bg-white py-3 px-1 text-gray-700 shadow-md">

            {children}
        </nav>}
    </div>

}

Menu.displayName = 'Menu';

export {Menu};

export type {MenuProps};


interface MenuItemProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode;
    className?: string;
}

const MenuItem = ({children, onClick, className}: MenuItemProps) => {
    return <div className="mb-1">
        <button onClick={onClick}
                className={"btn-animation rounded-lg text-md px-2 py-3 text-left w-full font-bold leading-none last:mb-0 flex items-center text-gray-700 hover:bg-gray-100 md:flex " + className + " "}>
            {children}
        </button>
    </div>
}

MenuItem.displayName = 'MenuItem';

export {MenuItem};

export type {MenuItemProps};