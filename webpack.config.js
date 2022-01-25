module.exports = {
    mode:"development",
    module: {
        rules: [
            {
                test: /index\.js/,
                use:[
                    {
                        loader: "./loaders/test-loader.js",
                        options: {
                           changeVar:'未知数'
                        }
                    }
                ]
            }
        ]
    }
}