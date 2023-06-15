// Video 20: ReactDOM là gì? Tại sao phải sử dụng?
// console.log("VI DU")
// const divReact = React.createElement(
//     'div',
//     {
//         className: 'post-item'
//     },
//     React.createElement(
//         'h2',
//         {
//             title: "Học React tại F8"
//         },
//         'Học ReactJS'
//     ),
//     React.createElement('p', {}, 'Học ReactJS từ cơ bản tới nâng cao')
// )

// // Get root element
// const root = document.getElementById('root')

// // React-DOM -> render UI
// ReactDOM.render(divReact, root)

// ----------------------------------------------------

// console.log('BTVN 1')
// const h1React = React.createElement(
//     'h1',
//     {
//         title: "Hello",
//         className: "heading"
//     },
//     'Hello guys'
// )

// const root = document.getElementById('root')
// ReactDOM.render(h1React, root)

// ----------------------------------------------------

console.log('BTVN 2')
const ulReact = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Javascript'),
    React.createElement('li', null, 'ReactJS')
)

const root = document.getElementById('root')
ReactDOM.render(ulReact, root)