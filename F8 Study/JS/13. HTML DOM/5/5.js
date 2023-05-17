/**
    Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong 
    DOM được học ở bài trước để lấy ra các element sau:
 */

var productsListElement = document.querySelector('.products-list')

console.log(productsListElement)

var firstProductElement = document.querySelector('.product:first-child')
console.log(firstProductElement)


var buttonElements = document.querySelectorAll('button')

console.log(buttonElements)