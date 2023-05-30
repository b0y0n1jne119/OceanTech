/*
    Video 189: Destructuring, Rest

    1. Let, const
    2. Template Literals
    3. Multi-line String
    4. Arrow function
    5. Classes
    6. Default parameter values
    7. Destructuring: phân rã
    8. Rest parameters
    9. Spread
    10. Enhanced object literals
    11. Tagged template literal
    12. Modules

*/

// console.log("VI DU 1")
// var arr = ['JS', 'ReactJS', 'CSS']

// var [a, ...rest] = arr

// console.log(a)
// console.log(rest)

// ------------------------------------------------------------------------------------------------------------------------------

// console.log("VI DU 2")

// let course = {
//     name: "ReactJS",
//     price: 100,
//     imgURL: 'img-address'
// }

// let { name, ...rest } = course

// console.log(name)
// console.log(rest)

// ------------------------------------------------------------------------------------------------------------------------------

console.log("VI DU 3")
function logger(...params) {
    console.log(params)
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9))