import {Button} from "../Button/Button";
import {Dispatch, ReactNode, SetStateAction} from "react";
import {Headline} from "../Headline/Headline";
import {Text} from "../Text/Text";

interface SheetProps {
    title: string
    subtitle: string
    children: ReactNode | string

    showState: [boolean, Dispatch<SetStateAction<boolean>>]
}


const Sheet = ({showState, title, subtitle, children}: SheetProps) => {

    return <div
        style={{zIndex: 9999}}
        className="sheet-animation fixed inset-0 h-full w-full bg-white p-4 grid content-center">
        <Button variant="tertiary" onClick={() => showState[1](false)}
                className="absolute right-4 top-4 lg:right-10 lg:top-10 px-6 py-8 rounded-3xl">
            <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.87868 9.87868C11.0503 8.70711 12.9497 8.70711 14.1213 9.87868L38.1213 33.8787C39.2929 35.0503 39.2929 36.9497 38.1213 38.1213C36.9497 39.2929 35.0503 39.2929 33.8787 38.1213L9.87868 14.1213C8.70711 12.9497 8.70711 11.0503 9.87868 9.87868Z"
                      fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M38.1213 9.87868C36.9497 8.70711 35.0503 8.70711 33.8787 9.87868L9.87868 33.8787C8.70711 35.0503 8.70711 36.9497 9.87868 38.1213C11.0503 39.2929 12.9497 39.2929 14.1213 38.1213L38.1213 14.1213C39.2929 12.9497 39.2929 11.0503 38.1213 9.87868Z"
                      fill="currentColor"></path>
            </svg>
        </Button>


            <main className="flex flex-col items-center justify-center">
                <div className="mb-12 text-center">
                    <Headline variant="h1">
                        {title}
                    </Headline>
                    <Text className="mt-1">
                        {subtitle}
                    </Text>
                </div>
                <div className="max-w-screen-sm w-full">
                    {children}
                </div>
                <div className="h-0 md:h-6"></div>
            </main>


    </div>
}

Sheet.displayName = 'Sheet';

export {Sheet};

export type {SheetProps};