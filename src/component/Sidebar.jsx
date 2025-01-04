import React from 'react'
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

function Sidebar() {
  return (
    <div className='sidebar'>

      <ul>
        <li>
          <Link to={'/addTask'}>Add Task</Link>
        </li>
        <br />
        <br />

        <li>

          <Link to={'/showTask'}>Show Task</Link>

        </li>
      </ul>
    </div>
  )
}

export default Sidebar