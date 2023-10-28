import React, { useState,useEffect } from 'react'


function FetchButton() {
  const [list, setList] = useState([])
  const [CurrentValue,setCurrentValue] = useState(0)

  useEffect(()=>{
    setData()
  },[CurrentValue])

  const setData= ()=>(
  fetch(`https://jsonplaceholder.typicode.com/posts${CurrentValue === 0?"":"/"+CurrentValue}`)
    .then(response => response.json())
    .then(json => setList(json))
  )
   return (
    <div>
    <div>
     {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
        <button onClick={()=> setCurrentValue(item)}>
          {item===0?"All":item}
        </button>
     ))}
    <div/>
    <div>
      {Array.isArray(list)?(list.map((item,index,arr)=>(
        <React.Fragment key={index}>
          <h1>{item.title}</h1>
          <hr/>
          {index<arr.length -1 && <hr/>}
        </React.Fragment>
      ))
      ):(
        <div>
        <h1>{list.title}</h1>
        <h2>{list.body}</h2>
        </div>
      )}
    </div>
    </div>
    </div>
    )

}

export default FetchButton
