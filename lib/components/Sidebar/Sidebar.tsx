import {Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {cn, getWindowWidth, useIsMount} from "../../utils.ts";
import {Z_INDEX} from "../../index.ts";
import {createPortal} from "react-dom";


// not compatible with mobile

interface SidebarProps {
    children: ReactNode;
    position?: "left" | "right";
    showState: [boolean, Dispatch<SetStateAction<boolean>>]
    variant?: "permanent" | "temporary"
    className?: string
}

const Sidebar = ({children, position,variant ,showState, className}: SidebarProps) => {

    const isMount = useIsMount();

    const hover = variant === "temporary"

    const [innerShow, setInnerShow] = useState(false);
    const [show, setShow] = showState;
    const _id = "sidebar-" + Math.floor(Math.random() * 1000);
    const pos = position ?? "right";

    useEffect(() => {
        const open = showState[0];

        if (open) {
            setInnerShow(true);
        } else {
            if (isMount) return;
            const el = document.getElementById(_id);
            if (el) {
                el.classList.add("side-bar-animation-" + pos + "-out");
            }

            setTimeout(() => setInnerShow(false), 200);
        }
    }, [show]);


    const onMouseEnter = () => {
        if (hover) {
            const ww = getWindowWidth();
            if (ww == "xs" || ww == "sm") return;
            setShow(true);
            setInnerShow(true)
        }
    }

    const onMouseLeave = () => {
        if (hover) {
            setShow(false)
        }
    }


    const positions = {
        left: "left-0",
        right: "right-0"
    }


    return createPortal(<div className="relative" style={{zIndex: Z_INDEX.SIDEBAR}}>
        <div onMouseEnter={onMouseEnter}
             className={cn(`w-64 h-[calc(100%-100px)] fixed bottom-0`, positions[pos])}/>
        {
            innerShow && <div style={{zIndex: Z_INDEX.SIDEBAR}} id={_id} onMouseLeave={onMouseLeave}
                              className={cn(`side-bar-animation-${pos} w-64 h-[calc(100%-100px)] fixed bottom-0 outer-side-bar`, positions[pos], className)}>
                <div className="inner-side-bar overflow-y-scroll">
                    {children}
                </div>
            </div>
        }
    </div>, document.body)
}

export {Sidebar}

export type {SidebarProps}