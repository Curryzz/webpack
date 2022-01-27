var path = require('path')
module.exports = {
    mode:"development",
    entry: {
        index:'./index.js'
    },
    context: path.resolve(__dirname,'src'),
    output: {
        library: 'abc',
    }
}