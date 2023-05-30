/*
    Video 192: Tagged template literals

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

highlight = ([first, ...strings], ...values) => {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
        .join('')
}

var brand = 'F8'
var course = "ReactJS"

let html = highlight`Học lập trình ${course} tại ${brand}!`

console.log(html)