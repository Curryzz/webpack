console.log('a')
const png = require('./assets/3.png').default;
console.log(png)
if(Math.random() < 0.5){
    var img = document.createElement("img");
    img.src = png;
    document.body.appendChild(img)
}