/*
    Video 181: Let & Const

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

// 1. Var / Let, Const: Scope(phạm vi truy cập vào biến này), Hosting(đưa lên trên đầu)
// 2. Const / Var, Let: Assignment (gán lại biến )
// Let, const ko hõ trợ hosting

// Code block: if else, loop, {}, ...

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó thì dùng Const
// Khi cần gán lại giá trị cho biến thì dùng Let

const a = {
    name: 'ReactJS'
}

a.name = 'PHP'

console.log(a.name)