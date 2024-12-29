import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   

  const handleAdduser = event =>{
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const user = {
      name,
      email,
    }
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .then(data =>{
      console.log(data)
    })
    event.target.reset();
  }

  return (
    <>
      <div>
      
        <h1>Simple Crud</h1>


        <form onSubmit={handleAdduser}>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your Email" />
          <button type="submit">Add User</button>
        </form>
      </div>
    
    </>
  )
}

export default App
