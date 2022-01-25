var loaderUtils = require('loader-utils');
module.exports = function (sourceCode){
    console.log(sourceCode);

    return `var dom = document.getElementsByTagName('head')[0];
    var styleDom = document.createElement('style');
    styleDom.innerHTML = \`${sourceCode}\`;
    dom.appendChild(styleDom)`
}