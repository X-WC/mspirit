const path = require('path')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        baseURL: '/mspirit/',
        head: {
            title: 'mspirit - 镜灵',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            meta: [
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}
            ],
        },
        buildAssetsDir: 'nuxt_assets',
    },
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs')
        }
    },
    experimental: {
        payloadExtraction: false
    },
})
