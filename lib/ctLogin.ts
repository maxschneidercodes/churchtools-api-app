import churchtoolsClient from "~/lib/ctConnect";
import showToast from "./toastWrapper";
import { Toast } from "~/types/Toast";
let isLoggedIn: boolean = false

function login(callback: () => void) {
    const config = useRuntimeConfig()
    let username = config.public.churchToolsUserName
    let password = config.public.churchtoolsPassword

    if (!isLoggedIn) {
        churchtoolsClient.post("/login", {
            username: username,
            password: password
        }).then((res => {
            //@ts-ignore
            if (res.status === 'success') {
                showToast(Toast.SUCCESS, "ChurchTools Login Erfolgreich.")
                isLoggedIn = true
                callback()
            }
        })).catch(err => {
            showToast(Toast.ERROR, "ChurchTools Login Fehlgeschlagen : " + err)
        })
    } else {
        callback()
    }
}

export default login