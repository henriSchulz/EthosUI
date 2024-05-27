import {CSSProperties, useState} from "react";
import {cn} from "../../utils";
import {toast} from "../toast/toast.ts";

interface CodeboxProps {
    code: string;
    className?: string;
    style?: CSSProperties;
}

const Codebox = ({code, className, style}: CodeboxProps) => {

    //replace the first space at the beginning of a line with &nbsp;

    const numOfSpacesAtBeginning = (line: string) => {
        let count = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] === " ") {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        if(copied) return
        if(navigator.clipboard) {
            await navigator.clipboard.writeText(code)
        }
        toast.success("Copied!", {autoClose: 3000})
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3500)
    }

    return <div className={cn("border-2 border-gray-100 p-3 rounded-lg bg-gray-50 relative", className)} style={style}>
        <div onClick={copyToClipboard} className="absolute top-2 right-4 btn-animation p-2">
            {!copied && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-copy">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>}

            {copied && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5"/>
            </svg>}
        </div>
        <code>
            {code.split("\n").map((line, index) => (<div key={index}>
                <div>
                    {Array.from({length: numOfSpacesAtBeginning(line)}, (_, i) => {
                        return <span key={i}>&nbsp;</span>
                    })}


                    {line.length === 0 ? <br/> : line}
                </div>
                </div>))}
        </code>
    </div>
}

Codebox.displayName = "Codebox";

export {Codebox}

export type {CodeboxProps}
