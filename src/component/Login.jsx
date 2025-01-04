import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom'
import SessionManager from './helper';



function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        name,
        email,
        password
      })
     
      
      if (response.status === 200) {

        SessionManager.session.setSessionToken(response.data.data.token);
        SessionManager.session.storeUserData(response.data.data.user)
        navigate('/dashboard')
      } else {
        setError('invalid login credentials.')
      }
    } catch (error) {
      setError('Login failed')
      console.error('error')
    }
  }

  return (
  
    <div className="d-flex justify-content-center mt-5 login-main">
      <form className='mt-5 login-form'>
        <div className="form-group mt-3">
          <label for="name">name</label>
          <input type="text" className="form-control" id="name" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} name="name" required />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" required />

        </div>
        <div className="form-group mt-3">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="psw" required />
        </div>

        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
        <div>


          <p>
            Do you have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>

    </div>
  )
}

export default Login
