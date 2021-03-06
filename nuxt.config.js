export default {
    css: ['@/assets/styles/index.scss'],
    build: {
        watch: ['api'],
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        },
        extractCSS: {
            ignoreOrder: false
        }
    },
    head: {
        link: [
            {rel: 'icon', type: 'image/png', href: '/static/favicon16.png', sizes: '16x16'},
            {rel: 'icon', type: 'image/png', href: '/static/favicon32.png', sizes: '32x32'},
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial scale=1' },
            // { hid: 'description', name: 'description', content: 'Meta description' }
        ],
    },
    serverMiddleware: [
        {path: "/api", handler: require("body-parser").json()},
        {
            path: "/api",
            handler: (req, res, next) => {
                const url = require("url");
                req.query = url.parse(req.url, true).query;
                req.params = {...req.query, ...req.body};
                next();
            }
        },
        {path: "/api", handler: "~/server-middleware/api-server.js"}
    ],
    buildModules: [
        '@nuxtjs/router-extras',
        '@nuxtjs/vuetify',
    ]
}