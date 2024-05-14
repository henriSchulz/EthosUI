import {HTMLAttributes} from "react";
import {cn} from "../../utils.ts";

type DefaultDivProps = HTMLAttributes<HTMLDivElement>

type SkeletonProps = DefaultDivProps & {
    children?: never
    height?: number
    width?: number
}

const Skeleton = (props: SkeletonProps) => {
    const {className, height, width, ...rest} = props;
    return <div style={{
        height: height,
        width: width,
        ...props.style
    }} {...rest} className={cn("animate-pulse bg-gray-100 rounded-lg", className)}/>
}

Skeleton.displayName = 'Skeleton';

export {Skeleton};

export type {SkeletonProps};