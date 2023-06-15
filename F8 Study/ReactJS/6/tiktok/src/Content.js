import { useEffect, useState } from "react"

// Side effects
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
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

export default function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    console.log(type);
    // useEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

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
        </div>
    )
}