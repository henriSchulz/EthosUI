import {FC, ReactNode, useState} from "react";

interface TooltipProps {
    content: ReactNode | string
    children: ReactNode | string
}


const Tooltip: FC<TooltipProps> = ({content, children}) => {

    const [show, setShow] = useState(false)

    return <div className="tooltip-parent relative place-items-center grid cursor-pointer" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        {show && <div style={{zIndex: 200001}} className="tooltip tool-tip-animation no-scrollbar px-4 scroll-auto py-2 text-gray-700 border-2 rounded-2xl bg-white border-gray-100 ">{
            content
        }</div>}
        <div>
            {children}
        </div>
    </div>
}


export {Tooltip};

export type {TooltipProps};