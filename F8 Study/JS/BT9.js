// console.log('Bai tap 1')
// var numbers = [100, 200, 220, 400, 200]

// var totalCoin = numbers.reduce(function (total, currentValue) {
//     return total + currentValue
// })


// console.log(totalCoin)


// ---------------------------------------------------------------------------------------------------------------------------------


// console.log('Bai tap 2')
// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// var flatArray = depthArray.reduce(function (flatOutPut, depthItem) {
//     return flatOutPut.concat(depthItem)
// }, [])

// console.log(flatArray)


// ---------------------------------------------------------------------------------------------------------------------------------


// console.log('Bai tap 3')
// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-End",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-End",
        courses: [
            {
                id: 1,
                title: "Python"
            },
            {
                id: 2,
                title: "ReactJS"
            }
        ]
    }
]

var newCourses = topics.reduce(function (course, topic) {
    return course.concat(topic.courses)
}, [])


var render = newCourses.map(function (course) {
    return `
    <div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id}</p>
    </div>
    `
})

console.log(render.join(''))