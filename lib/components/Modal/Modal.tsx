import {motion} from "framer-motion";
import {ReactNode, FC} from "react";
import {Headline} from "../Headline/Headline";
import {Text} from "../Text/Text";
import {Button} from "../Button/Button";

interface ModalProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    onClose: () => void;
    submitButton?: {
        text: string;
        onClick: () => void;
    }
}

const Modal: FC<ModalProps> = ({title, subtitle, children, onClose, submitButton}) => {

    return <div>

        <motion.div onClick={onClose} initial={{opacity: 0}} transition={{
            duration: 0.25
        }} style={{zIndex: 10000}} animate={{opacity: 1}} exit={{opacity: 0}}
                    className="fixed overflow-hidden inset-0 flex items-center justify-center bg-gray-800/40"></motion.div>

        <motion.div
            className="fixed inset-4 m-auto h-fit max-h-[calc(100%-32px)] max-w-lg overflow-y-visible rounded-3xl bg-white p-4 shadow-lg md:inset-0 md:w-full"
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.1, delay: 0.25}}
            style={{zIndex: 10001}}
            exit={{scale: 0.9, opacity: 0}}>


            <div className="absolute right-4 top-4">
                <div className="h-8 w-8">
                    <Button onClick={onClose}
                            variant="rounded"
                            className="absolute right-0 top-0"
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
            <div className="flex flex-col items-center text-center">
                <Headline variant="h2"
                          className="mt-4 text-2xl font-bold leading-none md:mt-8 md:text-3xl">{title}</Headline>
                <Text className="mt-1 whitespace-pre text-sm leading-6 text-gray-500 md:text-base">{subtitle}</Text>
                <div className="mt-4 w-full px-4 md:mt-8">
                    {children}


                    {submitButton && <Button onClick={submitButton.onClick}
                                             className="mt-6 w-full py-6"
                                             variant="primary">
                        {submitButton.text}</Button>}
                </div>
            </div>
        </motion.div>
    </div>

};

Modal.displayName = "Modal";

export {Modal};
export type {ModalProps};