/*
    Video 183: Arrow function

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

const sum = (a, b) => a + b

console.log(sum(2, 4))

const course = {
    name: 'Javascript',
    getName: function () {
        return this // context
    }
}

console.log(course.getName())