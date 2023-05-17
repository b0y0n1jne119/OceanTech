/*

map() sử dụng khi muốn chỉnh sửa, thay đổi element của 1 array
reduce() khi muốn nhận về một giá trị duy nhất sau khi tính toán các phần tử trong array

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

// console.log('Cách 1 khi không dùng reduce()')
// var totalCoin = 0

// for (var course of myCourse) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin)

// ---------------------------------------------------------------------------------------------------------------------------------

// console.log("Cach 2")
// handleCoin = (accumulator, currentValue, currentIndex) => {
//     return accumulator + currentValue.coin
// }

// var totalCoin = myCourse.reduce(handleCoin, 0)

// console.log(totalCoin)


// ---------------------------------------------------------------------------------------------------------------------------------

console.log("Cach 3")

var totalCoin = myCourse.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin
}, 0)

console.log(totalCoin)