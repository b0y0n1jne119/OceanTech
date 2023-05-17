// Video 148: DOM CSS

var boxElement = document.querySelector('.box')

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'red',
}) // nhận được 2 đối số, cách này là set css inline

console.log(boxElement.style.backgroundColor) // get màu của element


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log("BTTH")

/*

Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00 và màu chữ của thẻ p thành màu #f05123.

*/
var changColor = document.querySelector('.red')

var changeColor = document.querySelector('p')


changColor.style.backgroundColor = '#f00'

changeColor.style.color = '#f05123'