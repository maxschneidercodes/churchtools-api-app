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
        public: {
            apiKey: process.env.NUXT_CHURCH_TOOLS_LOGIN_TOKEN,
            churchToolsUserName: process.env.NUXT_CHURCH_TOOLS_USERNAME,
            churchtoolsPassword: process.env.NUXT_CHURCH_TOOLS_PASSWORD
        }
    }

})
