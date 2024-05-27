import {Dispatch, SetStateAction, InputHTMLAttributes} from "react";
import {cn} from "../../utils";

type DefaultInputProps = InputHTMLAttributes<HTMLTextAreaElement>;

type InputProps = Omit<DefaultInputProps, "type"> & {
    label: string
    valueState: [string, Dispatch<SetStateAction<string>>]
    fullWidth?: boolean
    rows?: number
    innerClassName?: string
}

const Input = (props: InputProps) => {

    const randomId = Math.floor(Math.random() * 1000000).toString();

    const {label,innerClassName, valueState, rows: _, className, fullWidth, style, ...rest} = props;

    const rows = _ ?? 1

    return <div style={style} onClick={() => document.getElementById(randomId)?.focus()}
                className={cn(`shadow-sm cursor-text text-start relative flex ${rows == 1 ? "items-center": "items-start"} overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-2`, className, fullWidth && "w-full")}>
        {valueState[0].length === 0 && <div
            className={`absolute select-none ${rows != 1 && "mt-2"} text-xl font-bold text-gray-800/20 px-4 md:text-3xl`}
        >{label}
        </div>}
        <textarea rows={rows} id={randomId} {...rest} value={valueState[0]}
                  onChange={e => valueState[1](e.target.value)}
                  className={cn("no-scrollbar resize-none z-5 w-full h-full bg-transparent text-xl font-bold focus:outline-none py-2 px-4 md:text-3xl", fullWidth && "w-full", rows === 1 && "whitespace-nowrap" , innerClassName)}
        />
    </div>

}

Input.displayName = 'Input';

export {Input};

export type {InputProps};