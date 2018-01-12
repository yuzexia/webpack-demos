let webpack = require('webpack');
// let CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
    ]
}