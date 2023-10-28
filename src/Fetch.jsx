import React, { useState,useEffect } from 'react'


function Fetch() {
  const [list, setList] = useState([])

  useEffect(()=>{
    setData()
  },[])

  const setData= ()=>(
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
  )
   return (
    <>
    {
      list.length && list.map((item,index,arr)=>(
        <React.Fragment key={index}>
          <h1>{item.title}</h1>
          <hr/>
          {index<arr.length -1 && <hr/>}
        </React.Fragment>
      ))

      }
    
    </>
  )
}

export default Fetch
