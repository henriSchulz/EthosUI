import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {cn} from "../../utils.ts";


interface SelectProps {
    options: { label: string, value: string }[]
    valueState: [string | undefined, Dispatch<SetStateAction<string | undefined>>]
    label?: string
    className?: string
}


const Select = ({options, className, valueState, label}: SelectProps) => {
    const [selectOpen, setSelectOpen] = useState(false);


    useEffect(() => {
        const value = valueState[0]
        if (!options.find(v => v.value === value)) {
            valueState[1](undefined)
        }
    }, [valueState]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            console.log(e.target)
            if (selectOpen && !document.getElementById("select")?.contains(e.target as Node)) {
                setSelectOpen(false)
            }
        }

        const handleKeys = (e: KeyboardEvent) => {
            if (selectOpen) {
                if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                    e.preventDefault()
                    const currentIndex = options.findIndex(v => v.value === valueState[0])

                    const nextIndex = e.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1
                    console.log({currentIndex, nextIndex, l: options.length})
                    if (options[nextIndex]) {
                        valueState[1](options[nextIndex].value)
                        //scroll to active Element if it is not in view
                        const activeElement = document.getElementById("option-" + nextIndex)
                        if (activeElement) {
                            activeElement.scrollIntoView({block: "center", inline: "nearest"})
                            activeElement.focus()
                        }
                    }
                }

                // if(e.key == "Escape" || e.key == "Enter" || e.key === "Space"){
                //     if(selectOpen) {
                //         setSelectOpen(false)
                //     }
                // }

            }
        }

        if (selectOpen) {
            setTimeout(() => document.addEventListener("click", handleClick), 100)
            document.addEventListener("keydown", handleKeys)
        }

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeys)
        }
    }, [options, selectOpen, valueState]);

    useEffect(() => {
        //scroll to active Element if it is not in view

        const activeElement = document.getElementById("option-" + options.findIndex(v => v.value === valueState[0]))
        if (activeElement) {
            activeElement.scrollIntoView({block: "center", inline: "nearest"})
        }
    }, [selectOpen]);

    const selectValue = (value: string) => {
        valueState[1](value)
        setSelectOpen(false)
    }

    return (
        <div style={{zIndex: 1000}} id="select" className="relative min-w-48">
            <div
                onKeyDown={e => e.key === "Enter" && setSelectOpen(prev => !prev)}

                onClick={() => setSelectOpen(prev => !prev)}
                className={cn("select-btn-animation relative flex items-center overflow-hidden rounded-2xl shadow-sm border border-gray-200 bg-gray-100 p-2 py-3", className)}>
                <div
                    className="absolute select-none px-2 text-xl font-bold text-gray-700 md:px-4 md:text-2xl flex items-center gap-2 justify-between w-full"
                >
                    <span className="overflow-hidden text-nowrap text-ellipsis w-full">
                        {valueState[0] ? options.find(v => valueState[0] === v.value)?.label ?? "" : label}
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="mr-5">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>

                </div>
                <div
                    className={"z-10 bg-transparent py-3 px-6 text-xl font-bold focus:outline-none md:text-3xl"}
                />
            </div>

            {selectOpen && <div
                style={{zIndex: 100}}
                className="shadow-md select-animation max-h-72 overflow-scroll w-full absolute mt-2 top-12 z-10 rounded-xl border-2 border-gray-100 bg-white p-2 text-gray-700">

                {options.map((option, index) => {
                    const isActive = valueState[0] === option.value
                    return <div key={index} id={"option-" + index}>
                        <button

                            onClick={() => selectValue(option.value)}


                            className={cn(
                                "rounded-xl select-btn-animation my-1 px-2 py-3 text-left w-full font-medium leading-none last:mb-0 flex items-center text-gray-700 hover:bg-gray-50 md:flex",
                                isActive && "bg-gray-100")
                            }
                        >
                            <span className="ml-3 flex items-center gap-2">
                                {isActive &&
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-check">
                                        <path d="M20 6 9 17l-5-5"/>
                                    </svg>}

                                <span className={cn(!isActive && "ml-9")}>
                                    {option.label}
                              </span>
                            </span>
                        </button>

                        {/*{*/}
                        {/*    index !== options?.length - 1 && <div className="border-b border-b-gray-100"/>*/}
                        {/*}*/}
                    </div>
                })}

            </div>}
        </div>
    )
}

export {Select};


export type {SelectProps};