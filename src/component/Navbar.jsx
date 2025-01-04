import React from 'react'
import SessionManager from './helper'
import {  useNavigate } from 'react-router-dom'


function Navbar() {
 let data =  SessionManager.session.getUserData()
 const navigate = useNavigate()
 var handleLogOut = () => {
   SessionManager.session.logoutUser()
   navigate('/login')
  }
  return (
    <div className='nav'>
        <h1>welcome:- {data.name}</h1>
        <div className='nav-btn'>
        <button  className='btn btn-primary ' onClick={handleLogOut}>log out</button> 

        </div>
    </div>
  )
}

export default Navbar