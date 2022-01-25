module.exports = {
    mode:"development",
    module: {
        rules: [
            {
                test: /index\.css/,
                use:[
                    {
                        loader: "./loaders/test-loader.js",
                        options: {

                        }
                    }
                ]
            }
        ]
    }
}