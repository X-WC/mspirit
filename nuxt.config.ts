const path = require('path')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/mspirit/',
        head: {
            title: 'mspirit - 镜灵',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            meta: [
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
                // SEO 相关配置
                {name: 'description', content: 'mspirit - 您的AI智能助手，提供智能对话、知识问答等服务'},
                {name: 'keywords', content: 'AI助手,智能对话,知识问答,人工智能,mspirit,镜灵'},
                {name: 'author', content: 'mspirit'},
                {name: 'robots', content: 'index, follow'},
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss',],
    css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'mspirit')
        },
        minify: true,
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'vendor': ['vue', 'vue-router'],
                    }
                }
            }
        },
        optimizeDeps: {
            include: ['vue', 'vue-router']
        }
    },
    ssr: false,
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    typescript: {
        strict: true,
        typeCheck: true
    }
})
