// forEach, find, filter, some, every, reduce

// filter2

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 600,
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0,
    },
    {
        id: 3,
        name: 'CSS',
        coin: 0,
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 800,
    },
]

// console.log('Bai tap 1')
// var filterCourses = courses.filter(function (course, index, array) {
//     return course.coin >= 600
// })

// console.log(filterCourses)


// -----------------------------------------------------------------------------------------------------------------------------------


// console.log('Bai tap 2')

// Array.prototype.filter2 = function (cb) {

//     var output = []

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }

//     return output
// }

// var filterCourses = courses.filter2(function (course, index, array) {
//     // console.log(course, index, array)
//     return course.coin >= 600
// })

// console.log(filterCourses)


// -----------------------------------------------------------------------------------------------------------------------------------


console.log('BTVN')

Array.prototype.myFilter = function (cb) {
    var output = []

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }

    return output
}



// Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); // Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); // Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: [1, 2, 3, 4]