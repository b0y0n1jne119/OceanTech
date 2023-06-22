# Video 66: React.memo HOC

1. memo() -> Higher Order Component (HOC)
2. useCallback()

### Ví dụ 1:

  # App.js

  ...

  const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ padding: '10px 32px'}}>
            <Content/>
            <h1>{count}</h1>
            <button onClick={increase}>Start</button>
        </div>
    )

    # Content.js
    
import { memo, useEffect, useState } from "react"


function Content() {

    console.log('re-render');

    return (
        <h2>No Man's Sky</h2>
    )
}

export default memo(Content)