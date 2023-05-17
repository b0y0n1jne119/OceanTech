// Video 177: JSON server

// Fetch: goi nội dung API
// API (URL) -> Application programing interface
// Cổng giao tiếp giữa các phần mềm

// Backend - > API -> Fetch -> JSON/XML

// -> JSON.parse -> JS types

// -> Render ra giao diện với HTML

// JSON sever: API server

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var courseAPI = 'http://localhost:3000/courses'

fetch(courseAPI)
    .then((response) => {
        return response.json()
    })
    .then((courses) => {
        console.log(courses)
    })