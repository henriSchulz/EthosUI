import {CSSProperties, Dispatch, SetStateAction} from "react";
import {cn} from "../../utils.ts";


interface TabElementProps {
    active: boolean;
    onClick: () => void;
    children: string;
    index: number;
    id: string;

}


const TabElement = ({onClick, children, index, id, active}: TabElementProps) => {


    return <div onClick={onClick} id={"tab-" + id + "-" + index}
                className={cn(`font-medium tab px-6 text-center py-3 btn-animation cursor-pointer`, active && "active")}>
        {children}
    </div>
}


interface TabsProps {
    activeTabState: [number, Dispatch<SetStateAction<number>>];
    tabs: string[];
    className?: string;
    style?: CSSProperties;
    tabWidth?: number | "full"
}

const Tabs = ({tabs, activeTabState, style, className, tabWidth}: TabsProps) => {

    const id = String(Math.floor(Math.random() * 1000))


    // @ts-ignore
    return <div style={{...style, "--tab-width": tabWidth === "full" ? Infinity : tabWidth}} id={id}
                className={cn("tabs bg-gray-100 rounded-xl", className)}>

        {tabs.map((tab, index) =>
            <TabElement index={index} id={id} children={tab} key={index} active={activeTabState[0] === index}
                        onClick={() => activeTabState[1](index)}/>
        )}

    </div>

}

Tabs.displayName = 'Tabs';

export {Tabs};

export type {TabsProps};

