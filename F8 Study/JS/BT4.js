/*

    Array methods:
        foreach() show ra toàn bộ các mảng giá trị bên trong
        every() dạng boolen, sẽ trả ra bằng true nếu tất cả giá trị là đúng
        some() Thằng này chỉ cần 1 giá trị đúng sẽ cho ra giá trị bằng true
        find() tìm kiếm giá trị, nếu nó tìm thấy 1 giá trị đúng thì sẽ in ra luôn, ko quan tâm việc có 2 tên giống nhau
        filter() giúp lọc ra toàn bộ các giá trị có tên là "A" chẳng hạn

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

var course = myCourse.filter(function (course, index) {
    return course.name === 'HTML'
})

console.log(course)