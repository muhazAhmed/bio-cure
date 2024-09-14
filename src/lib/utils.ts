import toast from "react-hot-toast"

export const Toast = (message: string, type: "error" | "success", duration?: number) => {
    toast[type](message, {
        duration: duration ? duration : 3000,
    });
}