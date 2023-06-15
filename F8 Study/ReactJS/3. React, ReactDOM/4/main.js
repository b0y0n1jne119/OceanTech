// Video 22: ReactDOM ver 18
console.log("VI DU")
const divReact = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement(
        'h2',
        {
            title: "Học React tại F8"
        },
        'Học ReactJS'
    ),
    React.createElement('p', {}, 'Học ReactJS từ cơ bản tới nâng cao')
)

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(divReact)