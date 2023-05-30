/*
    Video 185: Classes

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

// console.log('VI DU 1')
// function Course(name, price) {
//     this.name = name
//     this.price = price
//     this.getName = function () {
//         return this.name
//     }
//     const isSuccess = false
// }

// const phpCourse = new Course('PHP', 1000)
// const jsCourse = new Course('JS', 1000)

// console.log(phpCourse)
// console.log(jsCourse)

// -----------------------------------------------------------------------------------------------------

console.log('VI DU 2')
class Course {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    getName() { return this.name }
    getPrice() { return this.price }
    run() {
        const isSuccess = false

        if (true) {
            isSuccess = true
        }
    }
}

const phpCourse = new Course('ReactJS', 1000)
const jsCourse = new Course('SASS', 1000)

console.log(phpCourse)
console.log(jsCourse)