import {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";
import {cn} from "../../utils.ts";


interface SideMenuProps {
    activeMenuItemState: [number, Dispatch<SetStateAction<number>>]
    items: { label: string, icon?: ReactNode }[]
    variant?: "primary" | "secondary" | "tertiary"
    className?: string
    style?: CSSProperties
    itemClassName?: string
}

const SideMenu = ({style, items, itemClassName, activeMenuItemState, variant, className}: SideMenuProps) => {

    if (items.length > 100) throw new Error("SideMenu component can't have more than 100 items")

    return <div className="w-full">
        <div
            style={style}
            className={cn(`side-menu bg-white rounded-xl flex flex-col`, variant === "primary" && "border-2 border-gray-100", variant === "secondary" && "bg-gray-100", className)}>
            {items.map((item, index) => {
                const active = activeMenuItemState[0] === index
                return <div key={index}
                            className={cn(`select-none font-medium flex items-center justify-center side-menu-item px-6 text-center py-4 btn-animation cursor-pointer`, active && "active", itemClassName)}
                            onClick={() => activeMenuItemState[1](index)}>
                    {item.icon}
                    <div className={`${item.icon && "ml-4"}`}>{item.label}</div>
                </div>
            })}
        </div>
    </div>
}


SideMenu.displayName = 'SideMenu';

export {SideMenu};

export type {SideMenuProps};

