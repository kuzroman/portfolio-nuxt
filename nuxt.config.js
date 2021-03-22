export default {
    css: ['@/assets/styles/index.scss'],
    // styleResources: {
    //     scss: [
    //         '~/assets/styles/props.scss',
    //     ]
    // },
    modules: [
        // '@nuxtjs/style-resources',

    //     ['@nuxt/http', {
    //         baseURL: 'https://api.nuxtjs.dev/'
    //     }]
    ],
    build: {
        // loaders: {
        //     vue: {
        //         transformAssetUrls: {
        //             audio: 'src'
        //         }
        //     }
        // },
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        }
    },
    // router: {
        // mode: 'hash'
        // extendRoutes(routes, resolve) {
        //     routes.push({
        //         name: 'custom',
        //         path: '*',
        //         component: resolve(__dirname, 'layouts/error.vue')
        //     })
        // }
    // }
}