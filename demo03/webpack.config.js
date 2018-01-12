module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            /* {
                test: /\.js[x]?&/,
                exclude: /node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react'
            } */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};