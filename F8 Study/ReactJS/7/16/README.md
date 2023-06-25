# Video 72: useReducer hook

1. useState
    - Init state: 0
    - Actions: Up(state + 1) / Down (state - 1)
2. useReducer: không khác useState nhưng chỉ dùng khi cần dùng những bài phức tạp hơn. Cung cấp cho người dùng có thêm 1 sự lựa chọn để sử dụng state cho func component
    - Init state: 0
    - Actions: Up(state + 1) / Down (state - 1)
    - Reducer
    - Dispatch

### Ví dụ 1:

  # App.js

import { useReducer } from 'react'


// Init State
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
    console.log('running ...');
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

export default function App() {

    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div style={{ padding: '10px 32px' }}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >Up
            </button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >Down
            </button>
        </div>
    )
}