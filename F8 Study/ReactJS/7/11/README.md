# Video 62: useLayoutEffect hook

useEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

useLayoutEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại 

### Ví dụ 1:

  # Content.js

import { useEffect, useLayoutEffect, useState } from "react"


export default function Content() {

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])

    const handleCount = () => {
        setCount(count + 1)
    }
 
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleCount}>Count</button>
        </>
    )
}