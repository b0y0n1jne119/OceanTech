// DOM
// console.log("Example 1")
// const h1DOM = document.createElement('h1')

// h1DOM.title = 'S;G'
// h1DOM.className = 'heading'
// h1DOM.innerText = 'Hello guys!'

// document.body.appendChild(h1DOM)

// // React -> React-DOM
// // React.createElement(type, props, children, n)
// const h1React = React.createElement('h1', {
//     title: 'S;G',
//     className: 'heading'
// }, 'Đó là sự lựa chọn của S;G')

// document.body.appendChild(h1React)

// -----------------------------------------------------

// console.log("Example 2")
// // DOM
// const ulDOM = document.createElement('ul')
// ulDOM.id = 'ul-id'
// ulDOM.style = 'color: blue; font-size: 30px;'

// const liDOM1 = document.createElement('li')
// liDOM1.innerText = 'ReactJS'

// const liDOM2 = document.createElement('li')
// liDOM2.innerText = 'Javascript'

// ulDOM.appendChild(liDOM1)
// ulDOM.appendChild(liDOM2)

// document.body.appendChild(ulDOM)

// // React
// const ulReact = React.createElement(
//     'ul',
//     {
//         id: 'ul-id2',
//         style: 'color: red; font-size: 30px;'
//     },
//     React.createElement('li', { id: 'li-items' }, 'Javascript'),
//     React.createElement('li', null, 'ReactJS'),
// )
// console.log(ulReact)

// -----------------------------------------------------

console.log("BTVN")
// DOM
const divDOM = document.createElement('div')
divDOM.className = 'post-item'

const h2DOM = document.createElement('h2')
h2DOM.title = "Học React tại F8"
h2DOM.innerText = "Học ReactJS"

const pDOM = document.createElement('p')
pDOM.innerText = "Học ReactJS từ cơ bản tới nâng cao"

divDOM.appendChild(h2DOM)
divDOM.appendChild(pDOM)

document.body.appendChild(divDOM)

// React
const divReact = React.createElement('div',
    {
        className: 'post-item'
    },
    React.createElement('h2', { title: 'Học React tại F8' }, 'Học ReactJS'),
    React.createElement('p', null, 'Học ReactJS từ cơ bản tới nâng cao')
)
console.log(divReact)