// forEach, find, filter, some, every, reduce

// every2: k tra tất cả elêmnt, phải thỏa mãn tất cả điều kiện thì mới in ra thì mới ra true

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
// var result = courses.every(function (course, index, Array) {
//     return course.isFinish
// })

// console.log(result)


// -----------------------------------------------------------------------------------------------------------------------------------


console.log('Bai tap 2')

Array.prototype.every2 = function (cb) {
    var output = true

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (!result) {
                output = false
                break;
            }
        }
    }

    return output
}

var result = courses.every2(function (course, index, array) {
    return course.isFinish
})

console.log(result)