import React, { useEffect } from 'react'

function Counter({limit, setLimit,count, setCount}) {

   useEffect(() => {
    if (count === 10) {
      setLimit("Stop");
    }
    console.log("Use Effect");
  }, [count]);


  return (
    <div>
      {count !== 10 ? <h1>{count}</h1> : <h1>{limit}</h1>}
      <div
        style={{
          display: "flex",
          columnGap: "16px",
        }}
      >
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter