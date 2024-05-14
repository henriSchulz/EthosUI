import {FC, ReactNode} from "react";
import {motion} from "framer-motion";
import {cn} from "../../utils";
import {Skeleton} from "../Skeleton/Skeleton.tsx";

interface ImageCardProps {
    title: string
    onClick?: () => void
    image?: string
    width?: number // px
    className?: string
    icon?: ReactNode

    fill?: string // color
    fillRects?: string[] // colors
}

interface ImageCardSkeletonProps {
    width?: number // px
    className?: string
}

const ImageCardSkeleton: FC<ImageCardSkeletonProps> = (props) => {
    const width = props.width ?? 300
    const height = (10 / 16) * width
    return <motion.div
        whileHover={{scale: 0.97}}
        whileTap={{scale: 0.93}}
        transition={{duration: 0.2}}
        style={{width, height}}
        // initial={{opacity: 0.5, scale: 0.90, x: "3%", y: "-3%"}}
        // animate={{opacity: 1, scale: 1, x: 0, y: 0}}
        // exit={{opacity: 0.5, scale: 0.9}}
        className={cn("overflow-hidden rounded-2xl [backface-visibility:hidden] relative", props.className)}
    >

        <Skeleton width={width} height={Math.floor(width * (10 / 16))} className="absolute aspect-video"/>


    </motion.div>
}

const ImageCard: FC<ImageCardProps> = (props) => {

    const {image, className, title, onClick, fill} = props

    // const [imageLoaded, setImageLoaded] = useState<boolean>(false)

    const width = props.width ?? 300

    const height = (10 / 16) * width


    return <motion.div
        whileHover={{scale: 0.97}}
        whileTap={{scale: 0.93}}
        transition={{duration: 0.2}}
        style={{width, height}}
        onClick={onClick}
        initial={{opacity: 0.5, scale: 0.90, x: "3%", y: "-3%"}}
        animate={{opacity: 1, scale: 1, x: 0, y: 0}}
        exit={{opacity: 0.5, scale: 0.9}}
        className={cn("overflow-hidden rounded-2xl [backface-visibility:hidden] relative", className, "shadow-md ")}
    >

        {image && <img alt={title}
                       draggable="false"
                       className="w-full h-full aspect-video object-fill object-center"
                       src={image}
                       // style={{display: imageLoaded ? 'block' : 'none'}}
                       // onLoad={() => setImageLoaded(true)}
        />}

        {/*{image && !imageLoaded &&*/}
        {/*    <Skeleton width={width} height={Math.floor(width * (10 / 16))} className="absolute aspect-video"/>}*/}

        {fill && <div className="absolute inset-0 bg-gray-100" style={{background: fill}}/>}

        {
            props.fillRects && <div className="absolute">
                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${Math.floor(width * (10 / 16)) + 10}`}
                     xmlns="http://www.w3.org/2000/svg">
                    <g>
                        {
                            props.fillRects.map((fill, i) => {

                                // calc the width of each rect depending on the number of rects and the width of the ImageCard
                                const rectWidth = Math.floor(width / props.fillRects!.length)
                                const x = i * rectWidth


                                return <rect height={width * (10 / 16) + 10} width={rectWidth} x={x} fill={fill} key={i}/>
                            })
                        }

                    </g>
                </svg>
            </div>
        }


        <motion.div whileHover={{scale: 0.97}}
                    className="leading-2 absolute left-3 bottom-3 right-3 mt-2 flex w-fit max-w-[calc(100%-24px)] items-center rounded-lg bg-white px-3 py-1 font-medium text-gray-700 shadow-sm">
            <div onClick={onClick}

                 className="inline-block h-[1em] w-[1em] leading-none mr-1">
                <p className="inline-block h-[1em] w-[1em] leading-none [&amp;_svg]:h-[1em] [&amp;_svg]:w-[1em]">
                    {props.icon}
                </p>
            </div>

            <p className="truncate select-none">{title}</p>


        </motion.div>


    </motion.div>
}

ImageCard.displayName = "ImageCard"

export {ImageCard}
export type {ImageCardProps}
export {ImageCardSkeleton}
export type {ImageCardSkeletonProps}