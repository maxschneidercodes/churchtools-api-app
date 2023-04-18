import churchtoolsClient from "~/lib/ctConnect";

function login(callback: () => void) {
    const config = useRuntimeConfig()
    let username = config.public.churchToolsUserName
    let password = config.public.churchtoolsPassword

    churchtoolsClient.post("/login", {
        username: username,
        password: password
    }).then((res => {
        //@ts-ignore
        if (res.status === 'success') {
            console.log('Login successful!');
            callback()
        }
    })).catch(err => console.error(err))
}

export default login