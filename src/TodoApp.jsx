import React, { useState } from "react";

function TodoApp(){
    const[val,setVal] = useState({})
    const[arr,setArr] = useState([])
    const handleOnChange = (e) => {
        setVal({
            ...val,
            tStatus:"Pendingssss",
            [e.target.name]:e.target.value
        })
    }
    const handleOnClick = () => {
        console.log(arr)
        setArr([
            ...arr,
            val
        ])
        setVal({})
    }
    const handleRemove = (name) => {
        setArr((prevArr)=>{
            const findVal = prevArr.findIndex((val)=>val.tName===name)
            if(findVal === -1) return prevArr
            const newArr = [...prevArr]
            newArr.splice(findVal,1)
            return newArr
        })
    }
    const handleOnCheck = (name) => {
        console.log(arr)
        setArr((prevArr)=>
            prevArr.map((val)=>{
                if(val.tName === name){
                   return {
                        ...val,
                        tStatus : val.tStatus == "Pending" ? "Completed" : "Pending"
                   }
                }
                return val
            })
        )
    }
    return(
        <div>
            <h3>Task Name : </h3>
            <input type="text" name="tName" value={val.tName?val.tName:''} onChange={((e)=>{
                handleOnChange(e)
            })}/>
            <br/>
            <h3>Task Duration : </h3>
            <input type="number" name="tDuration" value={val.tDuration?val.tDuration:''} onChange={((e)=>{
                handleOnChange(e)
            })}/>
            <br/>
            <hr/>
            <button onClick={(()=>{
                handleOnClick()
            })}>Add Task</button>
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Task Duration</th>
                    <th>Actions</th>
                    <th>Status</th>
                </tr>
                {
                    arr.map((val,idx)=>(
                        <tr key={idx}>
                            <td>{val.tName}</td>
                            <td>{val.tDuration}</td>
                            <td><button onClick={(()=>{
                                handleRemove(val.tName)
                            })}>Remove</button></td>
                            <td><button onClick={(()=>{
                                handleOnCheck(val.tName)
                            })}>{val.tStatus}</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default TodoApp