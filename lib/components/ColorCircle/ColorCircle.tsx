import {CSSProperties, FC} from "react";
import {cn} from "../../utils";


interface ColorCircleProps {
    radius: number;
    color: string;
    className?: string;
    style?: CSSProperties;
    button?: boolean;
    onClick?: () => void;
}

const ColorCircle: FC<ColorCircleProps> = ({radius, onClick, button, color, style, className}) => {


    return <div onClick={onClick}
                className={cn("rounded-full border-4 border-white/30 bg-gray-100", button && "btn-animation", className)}
                style={{background: color, height: radius * 2, width: radius * 2, ...style}}></div>
}

ColorCircle.displayName = 'ColorCircle';

export {ColorCircle};

export type {ColorCircleProps};