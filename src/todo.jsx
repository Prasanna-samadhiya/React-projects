import { useEffect, useState } from "react";
import './App.css';
const ToDo = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editedValue,seteditedValue] = useState("");
  const [isEditable,setisEditable] = useState(false);
  let show=false;
  useEffect(() => {
          console.log("ho")
  }, [editedValue,isEditable]);
  const handleChange = (event) => {
     setInputValue(event.target.value);

  };

  const handleAdd = () => {
     const tempArray = [...list];
      const obj = {
         taskName: inputValue,
          isCompleted: false,
         };

    tempArray.push(obj);

    setList(tempArray);

    setInputValue("");

  };

  const handleCheckbox = (index) => {

    const tempArray = [...list];

    const obj = tempArray[index];

    obj.isCompleted = !obj.isCompleted;

    tempArray.splice(index, 1, obj);

    setList(tempArray);

  };
  
  const handleEdit = (index) => {
    const tempArray = [...list];
    tempArray.pop()
    
    const obj = {
      taskName: inputValue,
       isCompleted: false,
      };
 tempArray.push(obj);
    // setList(tempArray);
    setisEditable(true)
    setList( tempArray);

  };

  const handleDelete = (index) => {
    const tempArray = [...list];
    tempArray.splice(index, 1);
    // setList(tempArray);
    setList( tempArray);

  };

  return (
    <div className="bg-dark.bg-gradient"
>
    <div

      style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         columnGap: "24px",

      }}

    >

      <div

        style={{

          display: "flex",

          flexDirection: "column",

          alignItems: "flex-end",

          rowGap: "16px",

        }}

      >

        <textarea
         width={600}
          height={200}
          rows={4}
          cols={50}
          value={inputValue}
          onChange={handleChange}
          />
        <button class="btn btn-success" onClick={handleAdd}>Add</button>
        </div>
       <div style={{ width: "100%" }}>
         {list.map((item, index) => (
           <div
           key={index}
            style={{
               display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border:"3px solid",
              borderRadius:"15px",
              }}
            >
          <div style={{ display: "flex", columnGap: "8px" }}>
            <input type="checkbox" onChange={() => handleCheckbox(index)} />
               <h3
              style={{
                   textDecoration: item.isCompleted ? "line-through" : "none",
                  }}
                >
              {item.taskName}
                 </h3>
                
              </div>
              
              <div onClick={() => handleEdit(index)}
              style={{ display:"flex",cursor: "pointer",float:"inline-end" }}>
                <i className="fa fa-pencil">edit<div onChange={(e)=>{seteditedValue(e.target.value)}} 
                style={{
                  display: isEditable ? "flex" : "none"
                }}>
                <input onChange={(e)=>{item.taskName=e.target.value}}></input>
                </div>
                </i>
              </div>
              <div  style={{
                  display: isEditable ? "flex" : "none",
                }}>
              <button onClick={()=>{setisEditable(false)}}><i className="bi bi-check"></i>ok</button>
                <button onClick={()=>{setisEditable(false)}}><i className="bi bi-x"></i>cancel</button>
                </div>
            <div
              onClick={() => handleDelete(index)}
              style={{ cursor: "pointer" }}
            >
            <i className="fa fa-trash">Delete</i>
           </div>
         </div>
        ))}
      </div>
   </div>
   </div>
  );
};

export default ToDo;