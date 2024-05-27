import {HTMLAttributes, ReactNode, FC} from "react";
import {cn} from "../../utils";
import {Skeleton} from "../Skeleton/Skeleton.tsx";

type DefaultSpanProps = HTMLAttributes<HTMLSpanElement>;


type TextProps = DefaultSpanProps & {
    children: ReactNode | string;
    loading?: { isLoading?: boolean, skeletonClassName?: string, linebreaks?: number }
}

const Text: FC<TextProps> = ({children, className, ...props}) => {

    if (props.loading?.isLoading) {
        return <Skeleton height={28 * (props.loading.linebreaks ?? 1)}
                         className={cn(className, props.loading.skeletonClassName)}/>
    }

    const classNames = cn("font-medium text-gray-500 text-xl", className);


    return <p{...props} className={classNames}>{children}</p>;
};

Text.displayName = 'Text';

export {Text};

export type {TextProps};
