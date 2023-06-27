import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { addJob, setJob, delJob} from './actions'
import logger from './logger'


export default function App() {

    const [state, dispatch] = useReducer(logger(reducer), initState)
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