// Video 23: JSX là gì? Tại sao cần JSX?

/*
    JSX -> Javascript XML
*/

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

const ul =
    <ul>
        {
            courses.map(course => <li>{course.name}</li>)
        }
    </ul>

ReactDOM.render(ul, document.getElementById('root'))