import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShowTask from './ShowTask'

function Template() {
  return (
    <div>
      <Navbar/>
      <div className='d-flex'>
        <Sidebar/>
        <ShowTask/>
      </div>
       
    </div>
  )
}

export default Template