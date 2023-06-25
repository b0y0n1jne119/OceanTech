# Video 74: Todo App with useReducer hook


### Ví dụ 1:

  # App.js

import { useReducer, useRef } from 'react'
// import Content from './Content';

// 1. Init state
const initState = {
    job: '',
    jobs: []
}

// actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DEL_JOB = 'del_job'

const setJob = payload => { // dữ liệu mang theo đi => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const delJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DEL_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: newJobs
            }

        default:
            throw new Error('Invalid Error')
    }
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    const inputRef = useRef()

    return (
        <div style={{ padding: '10px 32px' }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo ...'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <button onClick={() => dispatch(delJob(index))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}