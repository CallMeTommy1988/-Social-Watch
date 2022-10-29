const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    ///inline/api/users/current
    app.use(
        createProxyMiddleware("/out/api", {
            target: "http://192.168.2.13:3001",
            changeOrigin: true,
            pathRewrite: { "^/out/api": "/out/api", },
        }),
        createProxyMiddleware("/inline/api", {
            target: "http://192.168.2.13:3001",
            changeOrigin: true,
            pathRewrite: { "^/inline/api": "/api" },
        })
    )
};

// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         proxy("**/api/**", {
//             target: 'http://192.168.2.13:3001',
//             changeOrigin: true
//         }),
//         // proxy("/out/api/**", {
//         //     target: 'http://192.168.2.13:3001',
//         //     changeOrigin: true,
//         //     pathRewrite: { '^/out/api': '/out/api/' }
//         // })
//     )
// }