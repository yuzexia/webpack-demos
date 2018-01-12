module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            /* Different loaders are linked by exclamation mark(!). */
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};