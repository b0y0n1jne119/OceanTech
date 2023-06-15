// Video 35: Children props? Render props?

/*
    Làm việc với JSX

    - Xử lý DOM events
    - Component do chúng ta định nghĩa phải viết in hoa kí tự đầu
        - Chọn component trong 1 object
    - Booleans, Null & Underfined không được render
    - Kết hợp toán tử logic để render theo điều kiện

    ------------------------------------------------

    - Props trong JSX
        - <YourComponent
            propName1 = "String literals"
            propName2 = {expression} 
          />
        - Props default to "true"
        - Spread/Rest props
        - Children prop
*/

// console.log("Exam 1")
// function Input({ label, ...inputProps }) {
//     return (
//         <div>
//             <label>{label}</label>
//             <input {...inputProps} />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div id="wrapper">
//             <Input
//                 label="Full Name "
//                 placeholder="Enter name ..."
//                 type="text"
//                 title="This is input"
//                 onFocus={() => { console.log(Math.random()) }}
//             />
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// ---------------------------------------

console.log("EXAM 2")
function List({ data, children }) {
    return (
        <ul>
            {data.map((...props) => children(...props))}
        </ul>
    )
}

function App() {

    const cars = ['BWW', 'Honda', 'S;G']

    return (
        <div id="wrapper">
            <List data={cars}>
                {(item, index) => <li key={index}>{item}</li>}
            </List>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))