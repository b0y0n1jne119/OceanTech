# Video 63: useRef hook

1. Lưu các giá trị qua một tham chiếu bên ngoài func component

### Ví dụ 1:

  # Content.js

import { useEffect, useLayoutEffect, useRef, useState } from "react"


export default function Content() {

    const [count, setCount] = useState(60)

    const timerId = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}


### Ví dụ 2:
import { useEffect, useLayoutEffect, useRef, useState } from "react"


export default function Content() {

    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()

    useEffect(()=> {
        prevCount.current = count
    },[count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop -> ', timerId.current);
    }

    console.log(count, prevCount.current)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}