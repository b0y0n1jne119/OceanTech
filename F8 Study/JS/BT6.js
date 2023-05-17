/*

map() sử dụng khi muốn chỉnh sửa, thay đổi element của 1 array

*/

var myCourse = [
    {
        id: 1,
        name: 'ReactJS',
        coin: 500,
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
        name: 'Javascipt',
        coin: 400,
    },
    {
        id: 5,
        name: 'HTML',
        coin: 1,
    },
]

function handleCourse(course, index) {
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
        index: index,
    }
}

var newCourse = myCourse.map(handleCourse)  //Khi chạy map sẽ trả về một mảng được gọi lại từ trên

console.log(newCourse)