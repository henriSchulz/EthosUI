import {cn} from "../../utils";
import {HTMLAttributes, ReactNode} from "react";

type DefaultDivProps = HTMLAttributes<HTMLDivElement>;

type CardProps = DefaultDivProps & {
    children: ReactNode | string;
    variant?: "primary" | "secondary"

    //if variant is secondary:
    innerClassName?: string
    outerClassName?: string
};

const Card = (props: CardProps) => {
    const {children, outerClassName, innerClassName, className, variant, ...rest} = props;

    if (!variant || variant === "primary") {
        return <div {...rest}
                    className={cn("border-2 bg-white border-gray-100 break-words p-4 rounded-2xl", className)}>
            {children}
        </div>
    }

    return <div {...rest} className={cn("card overflow-visible", outerClassName)}>

        <div className={cn("inner-card overflow-visible", innerClassName)}>
            {children}
        </div>

    </div>

}

Card.displayName = 'Card';

export {Card};

export type {CardProps};
