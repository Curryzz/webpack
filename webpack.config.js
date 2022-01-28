var path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: {
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output: {
        filename: "[name].[chunkhash:5].js"
    },
    plugins: [
        new HtmlWebpakPlugin({
            template: "./pubilc/index.html",
            filename: "index.html",
            chunks:["index"]

        }),
        new HtmlWebpakPlugin({
            template: "./pubilc/a.html",
            filename: "a.html",
            chunks:["a"]

        })

    ],
    devServer: {
        port:8888,
        open:true
    }
}