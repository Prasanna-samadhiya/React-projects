import { useState } from 'react'
import './App.css'

function Form() {
  const [student, setStudent] = useState({})
  const handleChange=(event)=>
      {
        setStudent({
            ...student,
            name:event.target.value,
            add:event.target.value,
            clg:event.target.value

        })
}  
return (
    <h1>Form</h1>,
    <div style={{
      display: "flex",
      alignItems:"stretch"
    }}>
    <p>{student.name} {student.add} {student.clg } </p>
      <p>name:</p>
      <input onChange={handleChange}></input>
      <p>address:</p>
      <input onChange={handleChange}></input>
      <p>college:</p>
      <input onChange={handleChange}></input>
      <button onClick={()=>alert(student.name)}>Submit</button>
    </div>
  )
}

export default Form
