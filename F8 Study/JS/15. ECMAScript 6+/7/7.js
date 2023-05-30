/*
    Video 188: Enhanced object literals

    1. Let, const
    2. Template Literals
    3. Multi-line String
    4. Arrow function
    5. Classes
    6. Default parameter values
    7. Destructuring
    8. Rest parameters
    9. Spread
    10. Enhanced object literals
    11. Tagged template literal
    12. Modules

*/

// 1. Định nghĩa key value cho object ngắn gọn hơn
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// console.log('VI DU 1')
// var name = 'ReactJS'
// var price = 1000

// var course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// }

// console.log(course.getName())

// ------------------------------------------------------------------------------------------------------------------------------

console.log('VI DU 2')
var fieldName = 'name'
var fieldPrice = 'price'

const course = {
    [fieldName]: 'JS',
    [fieldPrice]: 1000
}

console.log(course)