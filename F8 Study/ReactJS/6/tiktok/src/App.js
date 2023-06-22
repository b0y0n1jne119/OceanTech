import { useState } from 'react'
import Content from './Content';

export default function App() {

  // const [show, setShow] = useState(true)

  // return (
  //   <div style={{ padding: 32 }}>
  //     <button onClick={() => setShow(!show)}>Toggle</button>
  //     {show && <Content />}
  //   </div>
  // );
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
}