# Video 61: useEffect with fake Chat App

1. Callback luôn được gọi sau khi component mounted
2. Cleanup func luôn được gọi trước khi component unmounted
3. Cleanup func luôn đc gọi trước khi callback được gọi ( trừ mounted )

### Ví dụ 1:

1. index.js

...

// Fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

...


2. Content.js

import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: "ReactJS la gì, tại sao nên học ReactJS"
    },
    {
        id: 2,
        name: "Đó là sự lựa chọn của Steins;Gate"
    },
    {
        id: 3,
        name: "Steins;Gate 0"
    },
]

export default function Content() {

    const [lessonId, setLessonId] = useState(1)    

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}