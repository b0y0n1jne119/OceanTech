// Video 178: Sử dụng Postman làm việc với REST API

/*

    4. Fetch
        - JSON server: API server (FAKE) / Mock
        - CRUD
            - Create: Tạo mới -> POST
            - Read: Lấy dữ liệu -> GET
            - Update: Chỉnh sửa -> PUT / PATCH
            - Delete: Xóa -> DELETE
        -Postman

*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var courseAPI = 'http://localhost:3000/courses'

start = () => {
    getCourses(render)
}

start()

// Function

function getCourses(cb) {
    fetch(courseAPI)
        .then((response) => {
            return response.json()
        })
        .then(cb)
}

function render(courses) {
    let listCoursesBlock = $('#list-courses')
    let htmls = courses.map((course) => {
        return `
        <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}