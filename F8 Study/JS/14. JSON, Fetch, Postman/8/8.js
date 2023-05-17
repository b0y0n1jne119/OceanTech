// Video 176: Fetch

// Fetch: goi nội dung API
// API (URL) -> Application programing interface
// Cổng giao tiếp giữa các phần mềm

// Backend - > API -> Fetch -> JSON/XML

// -> JSON.parse -> JS types

// -> Render ra giao diện với HTML
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var postAPI = 'https://jsonplaceholder.typicode.com/posts'


// stream: luồng dữ liệu trả về
fetch(postAPI)
    .then((response) => {
        return response.json()
        // JSON.parse: JSON -> JS types
    })
    .then((posts) => {
        var htmls = posts.map((post) => {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })

        var html = htmls.join('')
        $('#post--block').innerHTML = html
    })
    .catch((error) => {
        console.log('Is something wrong about your internet')
    })