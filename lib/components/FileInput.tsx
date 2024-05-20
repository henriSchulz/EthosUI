import {InputHTMLAttributes, ReactNode, useState} from "react";
import {Button} from "./Button/Button";
import {cn} from "../utils";


type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

type FileInputProps = Omit<DefaultInputProps, "multiple"> & {
    label: string
    fullWidth?: boolean
    onFileSelected: (file: File) => void
    icon?: ReactNode
}

const FileInput = (props: FileInputProps) => {

    const {label, onFileSelected, id, icon, className, fullWidth, style, ...rest} = props;

    const [file, setFile] = useState<File | null>(null)


    const randomId = Math.floor(Math.random() * 1000000).toString()
    const isFileImage = file?.type.startsWith("image")

    return <div
        className={cn("relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-2", fullWidth && "w-full", className)}>
        <Button onClick={() => document.getElementById(id ?? randomId)?.click()}
                variant="tertiary" style={style} type="button" name={"file-input-trigger-" + (id ?? randomId)}
                className={"z-10 w-full bg-transparent py-1 px-2 text-xl font-bold focus:outline-none md:py-5 md:px-4 md:text-3xl"}
        >


            <div className="flex items-center justify-center">

                {!isFileImage && <span className="mt-2">{icon}</span>}
                  {isFileImage &&
                      <img src={URL.createObjectURL(file!)} alt="file" className="w-8 h-8 object-cover mr-4"/>}


                {!file && <span className="text-lg md:text-2xl">
                   {label}
               </span>}
                {file &&
                    <span className="overflow-hidden whitespace-nowrap w-[90%] text-lg md:text-2xl"

                    >{file.name}</span>}
            </div>
        </Button>

        <input id={id ?? randomId} type="file" {...rest} onChange={e => {
            const file = e.target.files?.[0]
            if (file) {
                setFile(file)
                onFileSelected(file)
            }
        }} className="hidden"/>
    </div>

}

FileInput.displayName = 'FileInput';

export {FileInput};

export type {FileInputProps};

