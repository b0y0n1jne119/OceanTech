// forEach, find, filter, some, every, reduce

// some2: true / false tối thiểu 1 phần tử thỏa mãn thì sẽ trả ra bằng true

var courses = [
    {
        name: 'Javascript',
        coin: 600,
        isFinish: true, // biểu thị khóa học này user đã học xong thì sẽ trả ra true
    },
    {
        name: 'HTML',
        coin: 0,
        isFinish: true,
    },
    {
        name: 'CSS',
        coin: 0,
        isFinish: true,
    },
    {
        name: 'ReactJS',
        coin: 800,
        isFinish: true,
    },
]

// console.log('Bai tap 1')
// var result = courses.some(function (course, index, array) {
//     return course.isFinish === true
// })

// console.log(result)


// -----------------------------------------------------------------------------------------------------------------------------------


// console.log('Bai tap 2')

// Array.prototype.some2 = function (cb) {

//     var output = false

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (cb(this[index], index, this)) {
//                 return true
//             }
//         }
//     }

//     return false
// }

// var result = courses.some2(function (course, index, array) {
//     return courses.isFinish
// })

// console.log(result)


// -----------------------------------------------------------------------------------------------------------------------------------


console.log('Bai tap 3')

Array.prototype.mySome = function (cb) {
    var output = false

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (typeof cb === 'function') {
                var result = cb(this[index], index, this)
                if (result) {
                    return output = true
                }
            }
        }
    }

    return output
}



// Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); // Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); // Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true
