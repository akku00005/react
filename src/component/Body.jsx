import React, { useEffect } from 'react'
import '../assets/Login.css'
function Body() {
    // useEffect(function(){
    //     let data = sessionManager.session.getUserData()
    //       console.log(data._id);
    //       axios.get(`http://localhost:5000/user/get/${data._id}`)
    //       .then(async(res) => {
    //         console.log(res.data.data.task);
            
    //       }

    //       )
    // },[])
  
  return (
    <div className='body' >
        <h1>To do list</h1>
        

    </div>
  )
}

export default Body