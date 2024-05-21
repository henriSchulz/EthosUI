import {ButtonHTMLAttributes, ReactNode, useEffect, MouseEvent} from "react";
import {cn} from "../../utils";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ClickSound from "../../sounds/click.mp3";


type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Variant = "text" | "icon" | "primary" | "secondary" | "tertiary"

type Color = "slate" | "gray" | "zink" | "neutral" | "stone" | "red" | "orange" | "amber" |
    "yellow" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" |
    "fuchsia" | "pink" | "rose"

type ButtonProps = DefaultButtonProps & {
    children: ReactNode | string;
    variant?: Variant
    keyboardKey?: {
        element: ReactNode //svg of a keyboard key,
        key: string
    }
    mainColor?: Color

}


type ColorMap = Record<Color, Record<Exclude<Variant, "icon">, string>>

const Button = (props: ButtonProps) => {

    const {children, mainColor, keyboardKey, id, variant, className, ...rest} = props;


    const base = "btn-animation block cursor-pointer text-center font-medium text-xl disabled:cursor-not-allowed disabled:opacity-70 flex justify-center items-center text-base py-5 px-6 leading-none h-10 md:h-11 rounded-xl leading-none"


    const colors: ColorMap = {
        yellow: {
            primary: "bg-yellow-800",
            secondary: "border-yellow-500 text-yellow-500",
            tertiary: "hover:bg-yellow-100 bg-yellow-100 text-yellow-700",
            text: "text-yellow-800",
        },
        purple: {
            primary: "bg-purple-800",
            secondary: "border-purple-500 text-purple-500",
            tertiary: "hover:bg-purple-100 bg-purple-100 text-purple-700",
            text: "text-purple-800",
        },
        amber: {
            primary: "bg-amber-800",
            secondary: "border-amber-500 text-amber-500",
            tertiary: "hover:bg-amber-100 bg-amber-100 text-amber-700",
            text: "text-amber-800",
        },
        fuchsia: {
            primary: "bg-fuchsia-800",
            secondary: "border-fuchsia-500 text-fuchsia-500",
            tertiary: "hover:bg-fuchsia-100 bg-fuchsia-100 text-fuchsia-700",
            text: "text-fuchsia-800",
        },
        emerald: {
            primary: "bg-emerald-800",
            secondary: "border-emerald-500 text-emerald-500",
            tertiary: "hover:bg-emerald-100 bg-emerald-100 text-emerald-700",
            text: "text-emerald-800",
        },
        cyan: {
            primary: "bg-cyan-800",
            secondary: "border-cyan-500 text-cyan-500",
            tertiary: "hover:bg-cyan-100 bg-cyan-100 text-cyan-700",
            text: "text-cyan-800",
        },
        gray: {
            primary: "bg-gray-800",
            secondary: "border-gray-500 text-gray-500",
            tertiary: "hover:bg-gray-100 bg-gray-100 text-gray-700",
            text: "text-gray-800",
        },

        green: {
            primary: "bg-green-800",
            secondary: "border-green-500 text-green-500",
            tertiary: "hover:bg-green-100 bg-green-100 text-green-700",
            text: "text-green-800",
        },
        neutral: {
            primary: "bg-neutral-800",
            secondary: "border-neutral-500 text-neutral-500",
            tertiary: "hover:bg-neutral-100 bg-neutral-100 text-neutral-700",
            text: "text-neutral-800",
        },
        orange: {
            primary: "bg-orange-800",
            secondary: "border-orange-500 text-orange-500",
            tertiary: "hover:bg-orange-100 bg-orange-100 text-orange-700",
            text: "text-orange-800",
        },
        slate: {
            primary: "bg-slate-800",
            secondary: "border-slate-500 text-slate-500",
            tertiary: "hover:bg-slate-100 bg-slate-100 text-slate-700",
            text: "text-slate-800",
        },
        teal: {
            primary: "bg-teal-800",
            secondary: "border-teal-500 text-teal-500",
            tertiary: "hover:bg-teal-100 bg-teal-100 text-teal-700",
            text: "text-teal-800",
        },
        zink: {
            primary: "bg-zink-800",
            secondary: "border-zink-500 text-zink-500",
            tertiary: "hover:bg-zink-100 bg-zink-100 text-zink-700",
            text: "text-zink-800",
        },
        blue: {
            primary: "bg-blue-800",
            secondary: "border-blue-500 text-blue-500",
            tertiary: "hover:bg-blue-100 bg-blue-100 text-blue-700",
            text: "text-blue-800",
        },
        red: {
            primary: "bg-red-800",
            secondary: "border-red-500 text-red-500",
            tertiary: "hover:bg-red-100 bg-red-100 text-red-700",
            text: "text-red-800",
        },
        pink: {
            primary: "bg-pink-800",
            secondary: "border-pink-500 text-pink-500",
            tertiary: "hover:bg-pink-100 bg-pink-100 text-pink-700",
            text: "text-pink-800",
        },
        sky: {
            primary: "bg-sky-800",
            secondary: "border-sky-500 text-sky-500",
            tertiary: "hover:bg-sky-100 bg-sky-100 text-sky-700",
            text: "text-sky-800",
        },
        stone: {
            primary: "bg-stone-800",
            secondary: "border-stone-500 text-stone-500",
            tertiary: "hover:bg-stone-100 bg-stone-100 text-stone-700",
            text: "text-stone-800",
        },
        rose: {
            primary: "bg-rose-800",
            secondary: "border-rose-500 text-rose-500",
            tertiary: "hover:bg-rose-100 bg-rose-100 text-rose-700",
            text: "text-rose-800",
        },
        indigo: {
            primary: "bg-indigo-800",
            secondary: "border-indigo-500 text-indigo-500",
            tertiary: "hover:bg-indigo-100 bg-indigo-100 text-indigo-700",
            text: "text-indigo-800",
        },
        violet: {
            primary: "bg-violet-800",
            secondary: "border-violet-500 text-violet-500",
            tertiary: "hover:bg-violet-100 bg-violet-100 text-violet-700",
            text: "text-violet-800",
        },


    }

    const isColorGiven = props.mainColor && colors[props.mainColor] !== undefined;

    const variants: Record<Variant, string> = {
        primary: `text-white `,
        secondary: `border-2 `,
        tertiary: "",
        text: "",
        icon: "block cursor-pointer text-center font-bold disabled:cursor-not-allowed disabled:opacity-70 flex justify-center p-0  items-center text-gray-800 text-base leading-none h-9 md:h-10 rounded-xl leading-none",
    }

    const colorsByVariant: Record<Variant, string> = {
        primary: isColorGiven ? colors[mainColor!].primary : colors.gray.primary,
        secondary: isColorGiven ? colors[mainColor!].secondary : colors.blue.secondary,
        tertiary: isColorGiven ? colors[mainColor!].tertiary : colors.gray.tertiary,
        text: isColorGiven ? colors[mainColor!].text : colors.gray.text,
        icon: ""
    }


    const classNames = cn(base, variants[variant ?? "primary"], colorsByVariant[variant ?? "primary"], className);

    const _id = id || "button-" + Math.random().toString(36).substring(7);

    useEffect(() => {
        if (keyboardKey) {
            const keydown = (e: KeyboardEvent) => {
                if (e.key === keyboardKey?.key) {
                    if (rest.onClick) rest.onClick(e as unknown as MouseEvent<HTMLButtonElement>);
                }
            }
            document.addEventListener('keydown', keydown);
            return () => document.removeEventListener('keydown', keydown);
        }
    }, []);


    return <button id={_id}  {...rest}
                   className={cn("flex items-center content-center justify-between", classNames)}
    >
        {children} {keyboardKey &&
        <span
            className={cn(`ml-4 keyboard-key px-2 border-2 border-gray-400 rounded-md py-1 grid items-center place-items-center`, variant === "secondary" && colorsByVariant["secondary"])}>
            {keyboardKey.element}
        </span>}
    </button>


}

Button.displayName = 'Button';

export {Button};

export type {ButtonProps, Variant};