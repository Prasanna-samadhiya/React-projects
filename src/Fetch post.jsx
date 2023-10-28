import React, { useState,useEffect } from 'react'


function Fetchpost() {
  const [list, setList] = useState({})

  useEffect(()=>{
    setData()
  },[list])

  const setData= ()=>(
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setList(json)))
    
  
   return (
    <>
    <h1>{list.title}</h1>
    <h1>{list.body}</h1>
    </>
  )
}

export default Fetchpost;
