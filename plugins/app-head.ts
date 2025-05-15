export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = useRuntimeConfig().app.baseURL || '/'
    useHead({
        link: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: `${baseURL}favicon.svg`,
            },
        ],
    })
})
