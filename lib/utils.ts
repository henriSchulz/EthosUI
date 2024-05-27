import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {useRef, useEffect, useState} from 'react';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}



export function getWindowWidth(): "xs" | "sm" | "md" | "lg" | "xl" {
    const width = window.innerWidth
    if (width < 640) {
        return "xs"
    } else if (width < 768) {
        return "sm"
    } else if (width < 1024) {
        return "md"
    } else if (width < 1280) {
        return "lg"
    } else {
        return "xl"
    }
}

export function isXsWindow() {
    return getWindowWidth() === "xs"
}


// react hook to check if component is mounted if its the first render useIsMount returns true, otherwise false

export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};