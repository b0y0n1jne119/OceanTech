# Video 50: Two-way binding trong React?

- Two-way Binding: rằng buộc 2 chiều

#### Ví dụ 1:

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
  '500$',
  '100$'
]

export default function App() {

  const [gift, setGift] = useState()

  const handleRandom = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={handleRandom}>Lấy thưởng</button>
    </div>
  );
}

### Ví dụ 2:

import { useState } from 'react'

// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

export default function App() {

  const [checked, setChecked] = useState([])

  const handleCheckbox = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    console.log({ ids: checked })
  }

  return (
    <div style={{ padding: 32 }}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheckbox(course.id)}
            />
            {course.name}
          </div>
        ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}