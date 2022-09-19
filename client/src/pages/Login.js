
import React, { useState } from "react";
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  async function registerUser (event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(
        {
        
          email,
          password,
        }
      )
    })
  const data = await response.json()
  console.log(data)
  }
  return (
    <div>
   <h1>Login</h1>
   <form onSubmit={registerUser}>
    <input value={email} onChange={(e)=>setEmail(e.target.value)}type='text' placeholder="email"/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder="password"/>
    <input type='submit' value="register"/>
    </form></div>
  );
}

export default Login;
