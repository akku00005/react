import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SessionManager from './helper';
// import './Task.css'


function Task() {
   let data =  SessionManager.session.getUserData()
    const navigate= useNavigate();
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[status,setStatus] = useState("")
    const [userid,setUserid] = useState(data._id)
    
    async function addTask(e){
   
     await axios.post(`http://localhost:5000/task/add`,{
        title,description,status,userid
     })
     .then((response)=>{
        if(response.status===201)
        {
            navigate('/dashboard')
            
            setTitle ("")
            setDescription("")
            setStatus("")
            alert("Task add")
        }
        else{
            console.log("Failed to add");
        }
     })
     .catch((err)=>{
        console.log(err);
     })
    }
  return (
   
    
    <div className='addTodo'>
      <br />
      <h1>Add Task</h1>
        <div>
            <input type="text" placeholder='Enter Task Title' onChange={(e)=>{setTitle(e.target.value)}}
            value={title}/>
            <br />
            <br />
            <input type="text" placeholder='Enter Task Description' onChange={(e)=>{setDescription(e.target.value)}}
            value={description}/>
             <br />
             <br />
            <input type="text" placeholder='Enter Status' onChange={(e)=>{setStatus(e.target.value)}}
            value={status}/>
        </div>
               <br />
               <br />
            <div className='submit-btn'>
              <button className='btn btn-primary' onClick={addTask}>Submit</button>
              <br />
              <br />
               <a href="/showTask">Show task</a>
            </div>
    </div>
    
  )
}

export default Task

