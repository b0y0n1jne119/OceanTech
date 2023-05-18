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
    getCourses(renderCourses)
    handleCreateForm()
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

function createCourse(data, cb) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then((response) => {
            response.json()
        })
        .then(cb)
}


function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    }
    fetch(courseAPI + '/' + id, options)
        .then((response) => {
            response.json()
        })
        .then(() => {
            // getCourses(renderCourses)
            var courseItem = $('.course-item-' + id)
            if (courseItem) {
                course.Item.remove()
            }
        })
}

function renderCourses(courses) {
    let listCoursesBlock = $('#list-courses')
    let htmls = courses.map((course) => {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = $('#create')

    createBtn.onclick = function () {
        var name = $('input[name="name"]').value
        var description = $('input[name="description"]').value

        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function () {
            getCourses(renderCourses)
        })
    }
}