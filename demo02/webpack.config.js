module.exports = {
    // 多文件主入口
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name].js'
    }
}