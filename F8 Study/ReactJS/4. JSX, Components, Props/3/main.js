// Video 27: React element types

/*
    * Hooks

    1. React element types: string, function/class
        - Wrapper
            - Header -> Header component
            - Content -> Content component
            - Footer -> Footer component
    2. Biểu diễn đơn giản với JSX

*/

// function Header() {
//     return (
//         <div className="header">Header</div>
//     )
// }

// class Content extends React.Component {
//     render() {
//         return (
//             <div className="content">Content</div>
//         )
//     }
// }

// const app = [
//     <div className="wrapper">
//         <Header />
//         <Content />
//         <div className="footer">Footer</div>
//     </div>
// ]

// ReactDOM.render(app, document.getElementById('app'))

// ----------------------------------------------------
console.log("BTVN")
function PostItem() {
    return (
        <div className="post-item">
            <img src="https://upload.wikimedia.org/wikipedia/vi/0/07/Steins%3BGate_0_anime.png" />
            <h2 className="post-title">C#(.NET) - tương tác với file excel</h2>
            <p className="post-desc">Bạn có kiến thức ngôn ngữ C#</p>
            <p className="post-published">Một ngày trước - 5 phút đọc</p>
        </div>
    )
}

const app = [
    <div className="main">
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
]

ReactDOM.render(app, document.getElementById('app'))