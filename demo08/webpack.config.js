/* Now you don't need to write index.html by hand and don't have to open browser by yourself. Webpack did all these things for you. */
let HtmlwebpackPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'webpack-demos',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url:'http://localhost:8080'
        })
    ]
};