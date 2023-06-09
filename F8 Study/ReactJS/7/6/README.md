# Video 56: useEffect with dependencies

// Mounted lắp vào và Unmounted là tháo ra


### Ví dụ 1:

import { useEffect, useState } from "react"

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