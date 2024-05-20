import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
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