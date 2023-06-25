# Video 68: useCallback hook
1. memo() -> Higher Order Component (HOC)
2. useCallback() giúp tránh tạo ra những hàm mới một cách không cần thiết trong func component
    - Reference types
    - React demo()

### Ví dụ 1:

  # App.js

  ...

export default function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div style={{ padding: '10px 32px' }}>
            <Content
                onIncrease={handleIncrease}
            />
            <h1>{count}</h1>

        </div>
    )
}

  # Content.js

import { memo } from "react"


function Content({ onIncrease }) {

    console.log('re-render');

    return (
        <>
            <h2>No Man's Sky</h2>
            <button onClick={onIncrease}>Start</button>
        </>
    )
}

export default memo(Content)