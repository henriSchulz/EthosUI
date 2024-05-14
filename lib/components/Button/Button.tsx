import {motion} from 'framer-motion';
import {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "../../utils";


type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Variant = "text" | "icon" | "primary" | "secondary" | "tertiary" | "rounded"


type ButtonProps = DefaultButtonProps & {
    children: ReactNode | string;
    variant?: Variant

}


const Button = (props: ButtonProps) => {

    const {children, variant, className, ...rest} = props;


    const base = "block cursor-pointer text-center font-bold disabled:cursor-not-allowed disabled:opacity-70 flex justify-center items-center text-base py-3 px-6 leading-none h-9 md:h-10 rounded-xl leading-none"

    const variants: Record<Variant, string> = {
        primary: `text-white bg-gray-800`,
        secondary: `border-blue-500 text-blue-500 border-2`,
        tertiary: "hover:bg-gray-100 bg-gray-100 text-gray-700",
        text: "text-gray-800",
        icon: "block cursor-pointer text-center font-bold disabled:cursor-not-allowed disabled:opacity-70 flex justify-center p-0  items-center text-gray-800 text-base leading-none h-9 md:h-10 rounded-xl leading-none",
        rounded: "hover:bg-gray-100 bg-gray-100 text-gray-700 py-3 px-3"
    }


    const classNames = cn(base, variant && variants[variant], className);

    // @ts-ignore
    return <motion.button {...rest}
                          whileHover={!props.disabled ? {scale: 0.97} : {}}
                          whileTap={!props.disabled ? {scale: 0.93} : {}}
                          className={classNames}
    >
        {children}
    </motion.button>


}

Button.displayName = 'Button';

export {Button};

export type {ButtonProps, Variant};