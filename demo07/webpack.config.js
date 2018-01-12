const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {},
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}