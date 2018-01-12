module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?&/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
        ]
    }
}
