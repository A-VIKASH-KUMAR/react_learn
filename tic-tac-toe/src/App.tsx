import { useState } from 'react'
import './App.css'
import Square from './components/ticTackToe'

function resetCounter(setCount: React.Dispatch<React.SetStateAction<number>>) {
  return setCount(0)
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <section id="center">
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="reset-counter"
          onClick={() => resetCounter(setCount)}
        >
          Reset counter
        </button> */}
        <Square ></Square>
      </section>
    </>
  )
}

export default App
