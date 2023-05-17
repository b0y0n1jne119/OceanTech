//Ví dụ nếu không dùng method reduce()
Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const numbers = [1, 2, 3, 4, 5]

var totalNumber = numbers.reduce2(function (number, currentValue) {
    return number + currentValue
})

console.log(totalNumber)


// function arrToObj(array) {
//     return array.reduce(function(newObject, itemArr) {
//         newObject[itemArr[0]] = itemArr[1];
//         return newObject
//     }, {})
// }