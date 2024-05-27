import {ReactNode, FC, useEffect, Dispatch, SetStateAction, useState} from "react";
import {Headline} from "../Headline/Headline";
import {Text} from "../Text/Text";
import {Button} from "../Button/Button";
import {useIsMount} from "../../utils.ts";
import {Z_INDEX} from "../../index.ts";
import {createPortal} from "react-dom";

const widths = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "8xl": "max-w-8xl",
    "9xl": "max-w-9xl",

}

interface ModalProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    showState: [boolean, Dispatch<SetStateAction<boolean>>];
    submitButton?: {
        text: string;
        onClick: () => void;
    }
    size?: keyof typeof widths;
}

const Modal: FC<ModalProps> = ({title, size, subtitle, children, showState, submitButton}) => {

    const [innerShowState, setInnerShowState] = useState(false);

    const isMount = useIsMount();

    useEffect(() => {
        if (showState[0]) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    const _bgId = "modal-bg-" + Math.floor(Math.random() * 1000)
    const _modalId = "modal-" + Math.floor(Math.random() * 1000)

    useEffect(() => {
        if (isMount) return;

        const open = showState[0];

        console.log("Open", open)

        if (open) {
            setInnerShowState(true);
        } else {
            const bg = document.getElementById(_bgId);
            const modal = document.getElementById(_modalId);
            if (bg && modal) {
                bg.classList.add("modal-bg-animation-out");
                modal.classList.add("modal-animation-out");
            }

            setTimeout(() => setInnerShowState(false), 400);
        }


    }, [showState[0]]);


    const width = widths[size ?? "lg"];

    const onClose = () => showState[1](false);

    if (!innerShowState) return <></>

    return createPortal(<div>
        <div onClick={onClose} style={{zIndex: Z_INDEX.MODAL_BG}} id={_bgId}
             className="modal-bg-animation fixed top-0 left-0 inset-0 backdrop-blur-sm bg-black/30"></div>

        <div autoFocus id={_modalId}
             className={`modal-animation fixed inset-4 m-auto h-fit max-h-[calc(100%-32px)] ${width} overflow-y-visible rounded-3xl bg-white p-4 shadow-lg md:inset-0 md:w-full`}
             style={{zIndex: Z_INDEX.MODAL}}
        >


            <div className="absolute right-4 top-4">
                <div className="h-8 w-8">
                    <Button onClick={onClose}
                            variant="tertiary"
                            className="absolute right-0 top-0 px-3.5"
                            type="button">
                        <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.87868 9.87868C11.0503 8.70711 12.9497 8.70711 14.1213 9.87868L38.1213 33.8787C39.2929 35.0503 39.2929 36.9497 38.1213 38.1213C36.9497 39.2929 35.0503 39.2929 33.8787 38.1213L9.87868 14.1213C8.70711 12.9497 8.70711 11.0503 9.87868 9.87868Z"
                                  fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M38.1213 9.87868C36.9497 8.70711 35.0503 8.70711 33.8787 9.87868L9.87868 33.8787C8.70711 35.0503 8.70711 36.9497 9.87868 38.1213C11.0503 39.2929 12.9497 39.2929 14.1213 38.1213L38.1213 14.1213C39.2929 12.9497 39.2929 11.0503 38.1213 9.87868Z"
                                  fill="currentColor"></path>
                        </svg>

                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center text-center mt-4">
                <Headline variant="h2"
                          className="mt-4 text-2xl font-bold leading-none md:mt-8 md:text-3xl">{title}</Headline>
                <Text
                    className="mt-1 text-sm leading-6 text-gray-500 md:text-base break-words overflow-x-hidden max-w-full">{subtitle}</Text>
                <div className="mt-4 w-full px-4 md:mt-8">
                    {children}


                    {submitButton && <Button onClick={submitButton.onClick}
                                             className="mt-6 w-full py-4"
                                             variant="primary">
                        {submitButton.text}</Button>}
                </div>
            </div>
        </div>
    </div>, document.body);

};

Modal.displayName = "Modal";

export {Modal};
export type {ModalProps};