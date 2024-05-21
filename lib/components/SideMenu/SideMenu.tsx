import {Dispatch, ReactNode, SetStateAction} from "react";
import {cn} from "../../utils.ts";


interface SideMenuProps {
    activeMenuItemState: [number, Dispatch<SetStateAction<number>>]
    items: { label: string, icon?: ReactNode }[]
    variant?: "bg" | "border"
    className?: string
}

const SideMenu = ({items, activeMenuItemState, variant, className}: SideMenuProps) => {

    if (items.length > 10) throw new Error("SideMenu component can't have more than 10 items")

    return <div
        className={cn(`side-menu ${variant === "bg" ? "bg-gray-100" : "border-2 border-gray-100"} rounded-xl flex flex-col justify-center`, className)}>
        {items.map((item, index) => {
            const active = activeMenuItemState[0] === index
            return <div key={index}
                        className={cn(`font-medium flex items-center justify-center side-menu-item px-6 text-center py-4 btn-animation cursor-pointer`, active && "active")}
                        onClick={() => activeMenuItemState[1](index)}>
                {item.icon}
                <div className={`${item.icon && "ml-4"}`}>{item.label}</div>
            </div>
        })}
    </div>
}


SideMenu.displayName = 'SideMenu';

export {SideMenu};

export type {SideMenuProps};

