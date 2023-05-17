// Callback - phần 2
/*
    1. Là hàm
    2. Truyền qua đối số
    3. Được gọi lại ( trong hàm nhận đối số)
*/

var courses = [
    'HTML',
    'CSS',
    'ReactJS',
]

// console.log('Bai tap 1 khi dung map')

// var render = courses.map(function (course) {
//     return `
//         <h1>${course}</h1>
//     `
// })

// console.log(render.join(''))


// -----------------------------------------------------------------------------------------------------------------------------------


// console.log('Bai tap 2 khi tự định nghĩa map')

// Array.prototype.map2 = function (callback) {
//     var output = [], arrayLength = this.length
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i)
//         output.push(result)
//     }
//     return output
// }

// var render = courses.map2(function (course) {
//     return `
//         <h1>${course}</h1>
//     `
// })

// console.log(render.join(''))


// -----------------------------------------------------------------------------------------------------------------------------------


console.log('Bai tap 3')
Array.prototype.myMap = function (cb) {
    var output = [], arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        var result = cb(this[i], i)
        output.push(result)
    }
    return output
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]