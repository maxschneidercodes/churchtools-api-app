import { Toast } from "../types/Toast"

function showToast(toastType: Toast, msg: string) {
    const { $toast } = useNuxtApp();
    if (toastType === Toast.ERROR) {
        //@ts-ignore
        $toast.error(msg);
    } else if (toastType === Toast.SUCCESS) {
        //@ts-ignore
        $toast.success(msg);
    }
}

export default showToast