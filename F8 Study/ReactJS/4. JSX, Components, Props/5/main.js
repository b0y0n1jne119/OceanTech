// Video 31: DOM events?

/*
    Làm việc với JSX

    - Xử lý DOM events
    - Component do chúng ta định nghĩa phải viết in hoa kí tự đầu
        - Chọn component trong 1 object
    - Booleans, Null & Underfined không được render
    - Kết hợp toán tử logic để render theo điều kiện

    ------------------------------------------------

    - Props trong JSX
        - <YourComponent
            propName1 = "String literals"
            propName2 = {expression}
          />
        - Props default to "true"
        - Spread/Rest props
        - Children prop
*/

// API
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

function CourseItem({ data }) {
    return (
        <div className="item-list">
            <img src={data.image_url} />
            <p
                onClick={() => alert(data.title)}
                className="list-title">{data.title}
            </p>
            <p className="list-des">{data.description}</p>
            <p className="list-time">Ngày đăng bài: {data.published_at}</p>
            <p className="list-studentsCount">Số học sinh đăng ký: {data.students_count}</p>
        </div>
    )
}

function App() {
    return (
        <div id="wrapper">
            {
                courses.map(course => (
                    <CourseItem
                        key={course.id}
                        data={course}
                    />
                ))
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

// ---------------------------------------------------

// DOM events

// function App() {
//     return (
//         <div id="wrapper">
//             <button
//                 onClick={(e) =>
//                     console.log(e.target)}>
//                 Click me
//             </button>
//         </div>
//     )
// }

// // Render
// ReactDOM.render(<App />, document.getElementById('root'))