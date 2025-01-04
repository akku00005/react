import React,{useState} from 'react'
import axios from 'axios'
import '../assets/Signup.css'
import { toast, ToastContainer } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie';

function Signup() {
   const navigate = useNavigate()
  const[name,setName]= useState('') 
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState();
  const[error,setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signUp",{
        name,
        email,
        password
      });
      if(response.status===201){
        Cookies.set('userToken',response.data.token,{expires:1})
         navigate('/login')
      }else{
        setError('invalid login credentials.')
      }
    } catch (error) {
      setError('Login failed')
      console.error(error)
    }
  }

  return (
<div className='signin'>
    <h1>USER SIGNUP</h1>
  <div className="signup">
    <label for="name"><b>name</b></label>
    <input type="text" placeholder="Enter Username" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" required/>
    

    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Useremail" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" required/>
    
  

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="psw" required/>
    
    
    <div className='btn' btn-btn-primary>
    <button type="submit" onClick={handleSubmit}>submit</button>

      </div>
  

     
    
  </div>
</div>
  )
}

export default Signup
