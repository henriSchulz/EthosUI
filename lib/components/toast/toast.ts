import {Id, toast as toastify, ToastOptions, UpdateOptions} from "react-toastify";

interface ToastProperties {
    success: (content: string) => Id
    error: (content: string) => Id
    promise: <T>(promise: Promise<T>, contents: {
        pending: string,
        success: string | ((result: T) => string),
        error: string | ((e: unknown) => string)
    }) => Promise<T>
}


const toast = {


    success: (content: string, options?: ToastOptions): Id => {
        return toastify.success(content, options)
    },

    error: (content: string, options?: ToastOptions): Id => {
        return toastify.error(content, {theme: "colored", ...options})
    },

    info(content: string, options?: ToastOptions): Id {
        return toastify.info(content, options)
    },

    warning(content: string, options?: ToastOptions): Id {
        return toastify.warning(content, options)
    },
    update(id: Id, options: UpdateOptions): void {
        toastify.update(id, options)
    },

    async promise<T>(promise: Promise<T>, contents: {
        pending: string,
        error: string | ((e: unknown) => string),
        success: string | ((result: T) => string)
    }, options?: ToastOptions): Promise<T | null> {
        const id = toastify.loading(contents.pending, options)

        try {
            const result: T = await promise
            toastify.update(id, {
                closeOnClick: true,
                render: typeof contents.success === "string" ? contents.success : contents.success(result),
                type: 'success',
                delay: undefined,
                autoClose: 3000,
                isLoading: false,
            })

            if (typeof result === "object") {
                if (result) {
                    if ("ok" in result && "status" in result && "statusText" in result) {
                        if (!result.ok) throw new Error("Request failed with code " + result.status + ": " + result.statusText)
                    }
                }
            }

            return result
        } catch (e: unknown) {
            toastify.update(id, {
                render: typeof contents.error === "string" ? contents.error : contents.error(e),
                autoClose: 3000,
                type: 'error',
                isLoading: false,
                theme: "colored",
            })
            return null
        }
    }

}

export {toast};

export type {ToastProperties}