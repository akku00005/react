import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function DoEdit() {
 const query = new URLSearchParams(useLocation().search);
 const id = query.get("id")
 const navigate= useNavigate();
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[status,setStatus] = useState("")
   

    const handleSubmit = (e)=>{
      e.preventDefault()
      axios.patch(`http://localhost:5000/task/${id}`,{title:title,description:description,status:status})
        .then(async(res)=> {
       navigate('/dashboard')
        } 
        )
        .catch((error)=>{
          console.log(error)
      }  )
      
        
    }
  
    useEffect(()=>{
      axios.get(`http://localhost:5000/task/taskbyid/${id}`)
      .then(async(res)=>{
     
       setTitle(res.data.data.title)
       setDescription(res.data.data.description)
       setStatus(res.data.data.status)
      }
        
    )
    .catch((error)=>{
      toast.error('update failed')
    }
  )
    },[] )


  
  return (
    <div className='editTodo'>
    <br />
    <h1>Edit Task</h1>
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
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
            <br />
            <br />
             <a href="/showTask">Show task</a>
          </div>
  </div>
  




  )
}




















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function DoEdit() {
//   const query = new URLSearchParams(useLocation().search);
//   const id = query.get('id');
//   const navigate = useNavigate();
  
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     axios.patch(`http://localhost:5000/task/taskbyid/${id}`)
//       .then((res) => {
//         const task = res.data;
//         setTitle(task.title || '');
//         setDescription(task.description || '');
//         setStatus(task.status || '');
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error('Failed to fetch task details');
//       });
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.get(`http://localhost:5000/task/taskbyid/${id}`, {
//       title,
//       description,
//       status,
//     })
//       .then((res) => {
//         console.log(res.data);
//         toast.success('Task updated successfully');
//         navigate('/dashboard');
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error('Failed to update task');
//       });
//   };

//   return (
//     <div className="editTodo">
//       <br />
//       <h1>Edit Task</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Task Title"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Task Description"
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Status"
//             onChange={(e) => setStatus(e.target.value)}
//             value={status}
//           />
//         </div>
//         <br />
//         <br />
//         <div className="submit-btn">
//           <button className="btn btn-primary" type="submit">
//             Submit
//           </button>
//           <br />
//           <br />
//           <a href="/showTask">Show task</a>
//         </div>
//       </form>
//     </div>
//   );
// }

