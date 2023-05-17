// Vid 150: ClassList Property

// add, contains, remove, toggle

var boxElement = document.querySelector('.box')

boxElement.classList.add('red')

// setTimeout(() => {
//     boxElement.classList.remove('red')
// }, 3000)


setInterval(() => {
    boxElement.classList.toggle('red') // kiểm tra xem có class red hay không, nếu có thì gỡ class red, ko có thì thêm
}, 1000)

// console.log(boxElement.classList.contains('red')) // kiểm tra elêmnt này có tồn tại hay không