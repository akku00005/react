// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import Login from './component/Login'
import Signup from './component/Signup'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Template from './component/Template'
import 'bootstrap/dist/css/bootstrap.min.css';
import'../src/assets/todo.css'
import Task from './component/Task'
import DoEdit from './component/DoEdit'

const  App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Login/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path='/dashboard' element={<Template/>}></Route>
        <Route path="/addTask" element={<Task />} />
       
        <Route path="/showTask" element={<Template />} />
      
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path='/doEdit' element={<DoEdit/>}></Route>

      </Routes>
    </Router>
  )
}
 
      

export default App