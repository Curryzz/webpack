var path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: {
        home:'./src/index.js',
        a:'./src/a.js'
    },
    output: {
        filename: "[name].[chunkhash:5].js"
    },
    plugins: [
        new HtmlWebpakPlugin({
            template: "./pubilc/index.html",
            chunks:["home"]

        })

    ]
}