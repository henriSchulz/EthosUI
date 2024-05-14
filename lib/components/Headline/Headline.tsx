import {HTMLAttributes, ReactNode} from "react";
import {cn} from "../../utils";
import {Skeleton} from "../Skeleton/Skeleton.tsx";

type DefaultHeadlineProps = HTMLAttributes<HTMLHeadingElement>;


type HeadlineProps = DefaultHeadlineProps & {
    children: ReactNode | string;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    loading?: { isLoading?: boolean, skeletonClassName?: string, linebreaks?: number }
}

const Headline = (props: HeadlineProps) => {
    const {children, loading, variant, className, ...rest} = props;

    if (loading?.isLoading) {

        const heights = {h1: 36, h2: 36, h3: 32, h4: 28, h5: 28, h6: 24}
        return <Skeleton height={heights[variant] * (loading.linebreaks ?? 1)} className={cn("w-full", className, loading.skeletonClassName)}/>
    }

    const variants: Record<HeadlineProps["variant"], string> = {
        h1: "text-4xl font-bold leading-none text-gray-700",
        h2: "text-3xl font-bold text-gray-700",
        h3: "text-2xl font-bold text-gray-700",
        h4: "text-xl font-bold text-gray-700",
        h5: "text-lg font-bold text-gray-700",
        h6: "text-base font-bold text-gray-700"
    }

    const classNames = cn(variants[variant ?? "h1"], className);

    const Comp = variant ?? "h1";

    return <Comp {...rest} className={classNames}>
        {children}
    </Comp>
}

Headline.displayName = 'Headline';

export {Headline};

export type {HeadlineProps};

