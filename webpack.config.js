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
    module: {
        rules: [
            {
                test: /\.(png)|(jpg)|(gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name:"imgs/[name].[hash:5].[ext]"
                    }
                }]
            }
        ]
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
        open:true,
        proxy:{
            "/api":{
                target:"https://open.duyiedu.com",
                changeOrigin:true //更改请求头中的host和origin
            }
        }
    }
}