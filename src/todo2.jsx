import { useState } from "react";



const ToDo2 = () => {

    const [list, setList] = useState([]);

    const [inputValue, setInputValue] = useState("");

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

    const handleEdit = (index) =>{
        const tempArray = [...list];

        const str=tempArray.splice(index, 1);
        console.log(str)
    }

    const handleDelete = (index) => {

        const tempArray = [...list];

        tempArray.splice(index, 1);

        // setList(tempArray);

        console.log("tempArray: ", tempArray);

    };

    return (

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

                <button onClick={handleAdd}>Add</button>

            </div>

            <div style={{ width: "50%" ,border:"1px solid"}}>

                {list.map((item, index) => (

                    <div

                        key={index}

                        style={{

                            display: "flex",

                            justifyContent: "space-between",

                            alignItems: "center",

                            border: "3px Green",

                        }}

                    >

                        <div style={{ display: "flex", columnGap: "8px" }}>

                            <input type="checkbox" onChange={() => handleCheckbox(index)} />

                            <h3

                                style={{

                                    textDecoration: item.isCompleted ? "line-through" : "none",

                                }}

                            > {item.taskName} </h3>

                        </div>
                        <button onClick={() => handleEdit(index)} style={{ cursor: "pointer" }}>
                        Edit
                        <i className="fa-regular fa-pen"></i> 
                        </button>

                        <div onClick={() => handleDelete(index)} style={{ cursor: "pointer" }}>
                            
                            <i className="fa fa-trash"></i>

                        </div>
                        

                    </div>

                ))}

            </div>

        </div>

    );

};



export default ToDo2