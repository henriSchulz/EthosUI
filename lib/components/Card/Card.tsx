import {cn} from "../../utils";
import {HTMLAttributes, ReactNode} from "react";

type DefaultDivProps = HTMLAttributes<HTMLDivElement>;

type CardProps = DefaultDivProps & {
    children: ReactNode | string;
};

const Card = (props: CardProps) => {
    const {children, className, ...rest} = props;

    return <div {...rest} className={cn("border-2 bg-white border-gray-100 overflow-x-hidden break-words p-4 rounded-2xl", className)}>
        {children}
    </div>
}

Card.displayName = 'Card';

export {Card};

export type {CardProps};
