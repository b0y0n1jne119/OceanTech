/*
    Video 190: Spread

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
// logger = (a, b, ...params) => {
//     console.log(params)
// }

// logger(1, 2, 3, 4)

// -------------------------------------------------------------------------

// console.log("VI DU 2")
// logger = ({ name, price, ...rest }) => {
//     console.log(name)
//     console.log(price)
//     console.log(rest)
// }

// logger({
//     name: "JS",
//     price: 1000,
//     description: "ABCXYZ"
// })

// -------------------------------------------------------------------------

// console.log("VI DU 3")
// logger = ([a, b]) => {
//     console.log(a)
//     console.log(b)
// }

// logger([2, 6])

// -------------------------------------------------------------------------

// console.log("VI DU 4")
// var arr1 = ['JS', 'HTML', 'CSS']

// var arr2 = ['ReactJS', 'Django']

// var arr3 = [...arr1, ...arr2]

// console.log(arr3)

// -------------------------------------------------------------------------

// console.log("VI DU 5")
// var obj1 = { name: "JS" }

// var obj2 = { price: 1000 }

// var obj3 = { ...obj1, ...obj2 }

// console.log(obj3)

// -------------------------------------------------------------------------

// console.log("VI DU 6")

// let arr = ['JS', 'ReactJS', 'Django']

// logger = (a, b, c) => {
//     console.log(a, b, c)
// }

// logger(...arr)

// -------------------------------------------------------------------------

console.log("VI DU 7")

let arr = ['JS', 'ReactJS', 'Django']

logger = (...rest) => {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}

logger(...arr)