// Video 25: JSX render Arrays | JSX FQA

const courses = [
    {
        name: "HTML, CSS"
    },
    {
        name: "ReactJS"
    },
    {
        name: "Javascript"
    }
]

// const jsx = 
//     <ul>
//         {
//             courses.map((course, index) =>
//                 <li key={index}>{course.name}</li>
//             )}
//     </ul>

// const jsx = (
//     <React.Fragment>
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//     </React.Fragment>
// )

const jsx = React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Heading 1')
)

ReactDOM.render(jsx, document.getElementById('root'))