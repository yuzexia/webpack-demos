module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // 多种类型的loader的写法
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
}