// Video 29: Props là gì? Dùng props khi nào?

/*
    Props

    - React elements
        - Sử dụng props giống như với attribute của thẻ HTML
        - 2 props class, for => className, htmlFor
        - Phải tuân theo quy ước có sẵn
    - React components
        - Sử dụng props giống như đối số cho Function
        - Tự do đặt tên props
        - Có thể bao gồm dấu gạch ngang
    - Chú ý:
        - Prop 'key' là prop đặc biệt
        - Props cơ bản là đối số của Component
            => Props có thể là bất cứ kiểu dữ liệu gì
        - Sử dụng destructuring

*/

// PostItem.js
// function PostItem(props) {
//     console.log(props)
//     return (
//         <div className="post-item">
//             <img
//                 src={props.image}
//                 alt={props.title}
//             />
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-desc">{props.description}</p>
//             <p className="post-published">{props.published}</p>
//         </div>
//     )
// }


// // App.js
// function App() {
//     return (
//         <div id="wrapper">
//             <PostItem
//                 title="1 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="1 Bạn có kiến thức ngôn ngữ C#"
//                 published="1 Một ngày trước - 5 phút đọc"
//             />
//             <PostItem
//                 title="2 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="2 Bạn có kiến thức ngôn ngữ C#"
//                 published="2 Một ngày trước - 5 phút đọc"
//             />
//             <PostItem
//                 title="3 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="3 Bạn có kiến thức ngôn ngữ C#"
//                 published="3 Một ngày trước - 5 phút đọc"
//             />
//         </div>
//     )
// }

// //index.js
// ReactDOM.render(<App />, document.getElementById('root'))

// ----------------------------------------------------

// console.log("EXAM 2")

// function PostItem({
//     image,
//     title,
//     description,
//     published,
// }) {

//     return (
//         <div className="post-item">
//             <img
//                 src={image}
//                 alt={title}
//             />
//             <h2 className="post-title">{title}</h2>
//             <p className="post-desc">{description}</p>
//             <p className="post-published">{published}</p>
//         </div>
//     )
// }


// // App.js
// function App() {
//     return (
//         <div id="wrapper">
//             <PostItem
//                 title="1 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="1 Bạn có kiến thức ngôn ngữ C#"
//                 published="1 Một ngày trước - 5 phút đọc"
//             />
//             <PostItem
//                 title="2 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="2 Bạn có kiến thức ngôn ngữ C#"
//                 published="2 Một ngày trước - 5 phút đọc"
//             />
//             <PostItem
//                 title="3 C#(.NET) - tương tác với file excel"
//                 image="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png"
//                 description="3 Bạn có kiến thức ngôn ngữ C#"
//                 published="3 Một ngày trước - 5 phút đọc"
//             />
//         </div>
//     )
// }

// //index.js
// ReactDOM.render(<App />, document.getElementById('root'))

// ----------------------------------------------------

console.log("BTVN")

const courses = [
    {
        "id": 15,
        "title": "HTML CSS Pro",
        "slug": "htmlcss",
        "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        "image": "courses/15/62f13d2424a47.png",
        "icon": "courses/15/62385d6c63dfa.png",
        "video_type": "upload",
        "video": null,
        "old_price": 2499000,
        "price": 1299000,
        "pre_order_price": 699000,
        "students_count": 2208,
        "is_pro": true,
        "is_coming_soon": false,
        "is_selling": true,
        "published_at": "2022-08-18T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        "video_url": "",
        "landing_page_url": "/landing/htmlcss",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 19,
        "title": "JavaScript Pro",
        "slug": "javascript-pro",
        "description": "Khóa học JavaScript Pro",
        "image": "courses/19/62f13cb607b4b.png",
        "icon": "courses/19/62f13cb685c81.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-07-31T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
        "video_url": "",
        "landing_page_url": "/landing/javascript-pro",
        "is_pre_order": false,
        "is_published": false
    },
    {
        "id": 20,
        "title": "NextJS Pro",
        "slug": "reactjs-pro",
        "description": "Khóa học NextJS Pro",
        "image": "courses/20/648020fc16597.png",
        "icon": "courses/20/648020fcc8000.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-11-30T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fcc8000.png",
        "video_url": "",
        "landing_page_url": "/landing/reactjs-pro",
        "is_pre_order": false,
        "is_published": false
    },
    {
        "id": 24,
        "title": "NodeJS Pro",
        "slug": "nodejs-pro",
        "description": "NodeJS Pro",
        "image": "courses/24/648021c0652c6.png",
        "icon": "courses/24/648021c0cd73f.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2024-04-06T06:20:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0652c6.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0cd73f.png",
        "video_url": "",
        "landing_page_url": "/landing/nodejs-pro",
        "is_pre_order": false,
        "is_published": false
    }
]

function CourseItem(props) {
    return (
        <div className="item-list">
            <img src={props.imgURL} />
            <p className="list-title">{props.title}</p>
            <p className="list-des">{props.des}</p>
            <p className="list-time">Ngày đăng bài: {props.published_at}</p>
            <p className="list-studentsCount">Số học sinh đăng ký: {props.students_count}</p>
        </div>
    )
}

function App() {
    return courses.map((course) => {
        return (
            <CourseItem
                title={course.title}
                imgURL={course.image_url}
                des={course.description}
                published_at={course.published_at}
                students_count={course.students_count}
            />
        )
    })

}

ReactDOM.render(<App />, document.getElementById('root'))