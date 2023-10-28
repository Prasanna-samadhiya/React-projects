import { useState } from 'react'
import './App.css'

function App2() {
  const [count, setCount] = useState(10)
  function handleClick(event){
      setCount((prev)=>prev+5);
      setCount((prev)=>prev-2);
      setCount((prev)=>prev-3);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>button</button>
    </>
  )
}

export default App2
