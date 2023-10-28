import { useState } from 'react'
import './app.css'

function Form2() {
  const [student, setStudent] = useState({})
  const [newstr, setnewstr] = useState("")
  const handleName=(event)=>
      {
        setStudent({
            ...student,
            name:event.target.value
          })
}  
const handleEmail=(event)=>
      {
        const a=event.target.value;
        if(a.includes("@gmail.com")){
        setStudent({
            ...student,
            add:event.target.value
        })}
        else{
          setStudent({         
          ...student,
          add:"Invalid"
        })

        }
}  
const handleNo=(event)=>
      {
        const a=event.target.value;
        if(a.length<10){
          setStudent({
            ...student,
            clg:"Invalid"

        })
        
        }
       else{
        setStudent({
            ...student,
            clg:event.target.value

        })}
}  
const handleBranch=(event)=>
      {
        setStudent({
            ...student,
            name:event.target.value,
            add:event.target.value,
            clg:event.target.value

        })
} 
const handleselect=(value)=>{
  setnewstr(newstr+"  "+value)
}    
return (
    <div style={{border:"3px solid"}}>
    <h1>Form</h1>
    <p>{student.name}</p>
    <div>
      <p>name:</p>
      <input onChange={handleName}></input>
      <p style={{display:student.name==""?"flex":"none",color:"red",}}>Enter something</p>
    </div>
    <div >
      <p>email:</p>
      <input type={"email"} onChange={handleEmail}></input>
      <p style={{display:student.add=="Invalid"?"flex":"none",color:"red",}}>Enter a valid email</p>
    </div>
    <div >
      <p>Mobile number:</p>
      <input onChange={handleNo}></input>
      <p style={{display:student.clg=="Invalid"?"flex":"none",color:"red",}}>Enter a valid mobile number</p>
    </div>
    <div>
      <p>branch:</p>
      <input onChange={handleBranch}></input>
    </div>
    <div>
      <p>Techstack:{newstr}</p>
      <select onChange={(event)=>handleselect(event.target.value)}>
        <option>select</option>
        <option>Java</option>
        <option>C++</option>
        <option>python</option>
        <option>C</option>
      </select>
    </div>
      <button onClick={()=>alert(student.name)}>Submit</button>
    </div>
  )
}

export default Form2
