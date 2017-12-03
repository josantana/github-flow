
module.exports = {
    head: {
        title: 'github-flow',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/images/favicon-homeday.png' },
        ],
    },
    loading: { color: '#5EC4E3' },
    modules: [
        ['@nuxtjs/axios', {
            baseURL: 'https://api.github.com',
            credentials: false,
        }],
    ],
    build: {
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
            // Overwrite default SVG rule
            const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            urlLoader.test = /\.(png|jpe?g|gif)$/;
            // Add SVG rule
            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
        },
    },
};
