import {FC, ReactNode, useState} from "react";
import {cn} from "../../utils";
import {Skeleton} from "../Skeleton/Skeleton.tsx";

interface ImageCardProps {
    title: string
    onClick?: () => void
    image?: string
    width?: number // px
    height?: number // px
    className?: string
    icon?: ReactNode
    index?: number
    fill?: string // color
    fillRects?: string[] // colors
    imageLoadingSkeleton?: boolean
}

interface ImageCardSkeletonProps {
    width?: number // px
    height?: number // px
    className?: string
}

const ImageCardSkeleton: FC<ImageCardSkeletonProps> = (props) => {
    const width = props.width ?? 300
    const height = props.height ?? (10 / 16) * width
    return <div
        style={{width, height}}
        className={cn("overflow-hidden rounded-2xl [backface-visibility:hidden] relative", props.className)}
    >
        <Skeleton width={width} height={height} className="absolute aspect-video"/>
    </div>
}

const ImageCard: FC<ImageCardProps> = (props) => {

    const {image, className, imageLoadingSkeleton, title, onClick, fill} = props

    const [imageLoaded, setImageLoaded] = useState<boolean>(false)

    const width = props.width ?? 300

    const height = props.height ?? (10 / 16) * width


    return <div className="img-card-hover-animation w-fit">
        <div
            style={{width, height, animationDelay: `${(props.index ?? 0) * 0.1}s`}}
            onClick={onClick}
            className={cn("img-card-animation overflow-hidden rounded-2xl [backface-visibility:hidden] relative", className, "shadow-md")}
        >

            {image && <img alt={title}
                           draggable="false"
                           src={image}
                           className="w-full h-full aspect-video object-fill object-center"
                           style={{display: imageLoadingSkeleton ? imageLoaded ? 'block' : 'none' : "block"}}
                           onLoad={() => setImageLoaded(true)}
            />}

            {image && !imageLoaded && imageLoadingSkeleton &&
                <Skeleton width={width} height={height} className="absolute aspect-video"/>}

            {fill && <div className="absolute inset-0 bg-gray-100" style={{background: fill}}/>}

            {
                props.fillRects && <div className="absolute">
                    <svg width="100%" height="100%" viewBox={`0 0 ${width-3} ${height + 10}`}
                         xmlns="http://www.w3.org/2000/svg">
                        <g>
                            {
                                props.fillRects.map((fill, i) => {

                                    // calc the width of each rect depending on the number of rects and the width of the ImageCard
                                    const rectWidth = Math.floor(width / props.fillRects!.length)
                                    const x = i * rectWidth


                                    return <rect height={width * (10 / 16) + 10} width={rectWidth} x={x} fill={fill}
                                                 key={i}/>
                                })
                            }

                        </g>
                    </svg>
                </div>
            }


            <div onClick={onClick}
                 className="btn-animation gap-2 leading-2 absolute left-3 bottom-3 right-3 mt-2 flex w-fit max-w-[calc(100%-24px)] items-center rounded-lg bg-white px-3 py-1 font-medium text-gray-700 shadow-sm">

                {props.icon}

                <p className="truncate select-none">{title}</p>


            </div>


        </div>
    </div>
}

ImageCard.displayName = "ImageCard"

export {ImageCard}
export type {ImageCardProps}
export {ImageCardSkeleton}
export type {ImageCardSkeletonProps}