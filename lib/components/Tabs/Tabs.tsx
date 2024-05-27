import {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";
import {cn, isXsWindow} from "../../utils.ts";
import {SideMenu} from "../SideMenu/SideMenu.tsx";


interface TabElementProps {
    active: boolean;
    onClick: () => void;
    children: { label: string, icon?: ReactNode | string };
    index: number;
    id: string;

}


const TabElement = ({onClick, children, index, id, active}: TabElementProps) => {


    return <div onClick={onClick} id={"tab-" + id + "-" + index}
                className={cn(`font-medium tab px-6 text-center py-3 btn-animation cursor-pointer flex justify-center`, active && "active")}>
        {children.icon}

        <div className={`${children.icon && "ml-4"}`}>{children.label}</div>

    </div>
}


interface TabsProps {
    activeTabState: [number, Dispatch<SetStateAction<number>>];
    items: { label: string, icon?: string }[];
    className?: string;
    style?: CSSProperties;
    tabWidth?: number | "full"
    variant?: "primary" | "secondary" | "tertiary"
}

const Tabs = ({items, activeTabState, style, className, tabWidth, variant = "primary"}: TabsProps) => {

    const id = String(Math.floor(Math.random() * 1000))

    if (items.length > 100) throw new Error("Tabs component can't have more than 100 tabs")


    if (isXsWindow()) {
        return <SideMenu style={{width: "100%", maxWidth: "100%"}} className={className} variant={variant}
                         activeMenuItemState={activeTabState}
                         items={items}/>
    }


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return <div style={{...style, "--tab-width": tabWidth === "full" ? Infinity : tabWidth}} id={id}
                className={cn("tabs rounded-xl", variant === "secondary" && "bg-gray-100", variant === "primary" && "border-2 border-gray-200", className)}>

        {items.map((tab, index) =>
            <TabElement index={index} id={id} children={tab} key={index} active={activeTabState[0] === index}
                        onClick={() => activeTabState[1](index)}/>
        )}

    </div>

}

Tabs.displayName = 'Tabs';

export {Tabs};

export type {TabsProps};

