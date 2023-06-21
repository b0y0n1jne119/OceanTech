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

    return (
        <div>
            <ul>
                {lessons.map(lesson => {
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                })}
            </ul>
        </div>
    )
}