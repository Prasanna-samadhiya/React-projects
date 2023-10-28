import React, { useState,useEffect } from 'react'


function Galley() {
  const [list, setList] = useState([])
  const [like, setlike] = useState("like")

  useEffect(()=>{
    setData()
  },[])

  const setData= ()=>(
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => setList(json))
  )
   return (
    <>
    <div style={{border:"3px solid",padding:"10px 10px 10px 10px"}}>
    <div>
    
    </div>
    <div style={{border:"3px solid",width:"100%",display:"flex",flexDirection:"row",flexFlow:"wrap"}}>
    {
       list.map((item,index,arr)=>(
        <div style={{padding:"5px 5px 5px 5px",display:"flex",flexDirection:"column"}}>
        <img src={item.url} width="100" height="100" />
        <button>Whishlist</button>
        <button onClick={()=>{setlike("liked")}} onDoubleClick={()=>{setlike("like")}}>{like}</button>
        <button>Others</button>

          <hr/>
          </div>
      ))

      }
      </div>
      </div>
    </>
  )
}

export default Galley
