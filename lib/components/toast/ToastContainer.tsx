import {FC, CSSProperties} from "react";
import {cssTransition, ToastContainer as ToastifyToastContainer} from 'react-toastify';

interface ToastContainerProps {
    style?: CSSProperties
    className?: string
}

const ToastContainer: FC<ToastContainerProps> = ({style, className}) => {

    return <ToastifyToastContainer className={className}
                                   position="top-center"
                                   autoClose={5000}
                                   transition={cssTransition({
                                       enter: "toast-in",
                                       exit: "toast-out",
                                       collapse: false,
                                   })}
                                   limit={3}
                                   hideProgressBar={true}
                                   newestOnTop={false}
                                   closeOnClick
                                   rtl={false}
                                   closeButton={false}
                                   pauseOnFocusLoss={false}
                                   draggable
                                   pauseOnHover
                                   style={{zIndex: 20000, minWidth: "140px", width: "fit-content", ...style}}/>
}

ToastContainer.displayName = 'ToastContainer'

export {ToastContainer}

export type {ToastContainerProps}