// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    runtimeConfig: {
        apiKey: process.env.CHURCH_TOOLS_LOGIN_TOKEN,
    }
})
