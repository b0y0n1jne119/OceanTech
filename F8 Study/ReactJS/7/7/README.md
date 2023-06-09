# Video 57: useEffect with DOM events

/*

    1. Update DOM
        - F8 blog title
    2. Call API
    3. Listen DOM events
        - Scroll
        - Resize
    4. Cleanup
        - Remove lisener / Unsubscribe
        - Clear timer

    ----------------------
    1. useEffect(callback)
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM
    2. useEffect(callback, [])
        - Chỉ gọi callback 1 làn sau khi component mounted
    3. useEffect(callbakc, [deps])
        - Callback sẽ được gọi lại mỗi khi deps thay đổi
    ----------------------
    1. Callback luôn được gọi sau khi component mounted
*/

### Ví dụ 1:

import { useEffect, useState } from "react"


const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

export default function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setshowGoToTop] = useState(false)

    // useEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                // Show
                setshowGoToTop(true)
            } else {
                // Hide
                setshowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>

            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: 'blue'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}</button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >Go to Top</button>
            )}
        </div>
    )
}

### Ví dụ 2:

import { useEffect, useState } from "react"


export default function Content() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Clear func
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}