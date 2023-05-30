/*
    Video 194: Optional chaining

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

// const obj = {
//     name: 'Duc',
//     cat: {
//         name: 'Kyo',
//         cat2: {
//             name: 'Dino',
//             cat3: {
//                 name: "Yellow cat"
//             }
//         }
//     }
// }

// if (
//     obj?.cat?.cat2?.cat3
// ) {
//     console.log(obj.cat.cat2.cat3.name)
// }

// Sử dụng khi không chắc chắn nó có tồn tại hay không?

// -------------------------------------------------------------------------

const obj = {
    getName(value) {
        console.log(value)
    }
}

obj.getName?.(119)