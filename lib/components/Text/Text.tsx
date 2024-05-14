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
                         className={cn("w-full", className, props.loading.skeletonClassName)}/>
    }

    const classNames = cn("text-base font-medium text-gray-500 lg:text-xl", className);


    return <span{...props} className={classNames}>{children}</span>;
};

Text.displayName = 'Text';

export {Text};

export type {TextProps};
