/* 
Environment flags
You can enable some codes only in development environment with environment flags.
 */
let webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugin: [devFlagPlugin]
};