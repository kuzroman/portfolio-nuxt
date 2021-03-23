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
    },
    head: {
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '~/static/favicon.ico'}
        ]
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
    modules: [
        // '@nuxtjs/style-resources',

        //     ['@nuxt/http', {
        //         baseURL: 'https://api.nuxtjs.dev/'
        //     }]
    ],
}