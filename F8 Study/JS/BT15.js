// forEach, find, filter, some, every, reduce

/* 
    1. Object prototype
    2. For in
    3. hasownProperty
*/
var courses = [
    'javascript',
    'Python',
]

// console.log('BT 1 khi su dung map()')
// courses.forEach(function (course, index, array) {
//     console.log(course, index, array)
// })


// -----------------------------------------------------------------------------------------------------------------------------------


console.log("BT 2")
Array.prototype.forEach2 = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            cb(this[index], index, this)
        }
    }
}

courses.forEach2(function (course, index, array) {
    console.log(course, index, array)
})