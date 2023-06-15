# Video 48: useState hook

### Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)

### Cách dùng

```jsx
import { useState } from 'react'

function Component() {
    const [state, setState] = useState(initState)

    ...
}
```

### Lưu ý
- Component được re=render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới

#### Ví dụ 1:

function App() {

  const [count, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(count + 1)
  }

  const handleDecrease = () => {
    setCounter(count - 1)
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button
        style={{ margin: 10 }}
        onClick={handleIncrease}>
        Increase
      </button>
      <button
        onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

### Ví dụ 2:

const [info, setInfo] = useState({
    name: 'Nguyen Minh Duc',
    age: 18,
    address: '8 Tran Quoc Toan'
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Love cats and dogs"
    })
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button
        style={{ margin: 10 }}
        onClick={handleUpdate}>
        Update
      </button>
    </div>
  );