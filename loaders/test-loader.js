var loaderUtils = require('loader-utils');
module.exports = function (sourceCode){
    console.log(sourceCode);
    var options = loaderUtils.getOptions(this);//获取loader的配置项
    var reg = new RegExp(options.changeVar,"g");
    return sourceCode.replace(reg,'var')
}