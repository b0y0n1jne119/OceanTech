# Video 70: useMemo hook
1. memo() -> Higher Order Component (HOC) tránh component re-render không cần thiết
2. useMemo -> tránh thực hiện lại một logic nào đó không cần thiết

### Ví dụ 1:

  # App.js

import { useMemo, useRef, useState } from 'react'

export default function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)

        return result
    }, [products])

    return (
        <div style={{ padding: '10px 32px' }}>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name ...'
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder='Enter price ...'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button type='button' onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}