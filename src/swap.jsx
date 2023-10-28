import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App12() {
  const [arr1,setarr1] = useState([{name:"Prasanna0",isChecked:false},{name:"Prasanna01",isChecked:false},{name:"Prasanna02",isChecked:false},{name:"Prasanna03",isChecked:false}])
  const [arr2,setarr2] = useState([{name:"Prasanna1",isChecked:false},{name:"Prasanna12",isChecked:false},{name:"Prasanna13",isChecked:false},{name:"Prasanna14",isChecked:false}])
  useEffect(()=>{},[arr1,arr2])
  function handleswap3() {
         let i;
         const temp2=[...arr2]
         for(i=0;i<arr1.length;i++){
            if(arr1[i].isChecked==true){
              temp2.push(arr1[i])
            }
         }
       setarr2(temp2)
}
function handleswap4() {
  let i;
  const temp1=[...arr1]

  for(i=0;i<arr2.length;i++){
   if(arr2[i].isChecked==true){
     temp1.push(arr2[i])
   }
}
setarr1(temp1)
}
  return (
    <>
    <div style={{display:"flex", flexDirection:"row",}}>
      <div style={{
        display:"flex",
        flexDirection:"column",
        border:"3px solid",
        padding: "40px 40px 40px 40px",
        marginLeft:"100px",
      }}>
       {arr1.map((item,index)=>(
        <div>
        <input type={"checkbox"} name={"list1"} onClick={()=>{arr1[index].isChecked=!arr1[index].isChecked}} >
        </input><p>{arr1[index].name}</p>
        </div>
     ))}
      </div>
      <div style={{ padding: "40px 40px 40px 40px",border:"3px solid",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <button onClick={handleswap3}>swap-- &gt;</button>
      <button onClick={handleswap4}>&lt;--swap</button>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        border:"3px solid",
        padding: "40px 40px 40px 40px"
      }}>
      {arr2.map((item,index)=>(
        <div>
        <input type={"checkbox"} onClick={()=>{arr2[index].isChecked=!arr2[index].isChecked} }></input>
        <p>{arr2[index].name}</p>
        </div>
     ))}
      </div>
      </div>
    </>
  )
}

export default App12
