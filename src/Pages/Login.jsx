import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const navigate=useNavigate()
    const[logincreds,setlogincreds]=useState({})
    const {login}=useContext(AuthContext)
    const handleChange=(e)=>{
        
           const{name,value}=e.target;
           setlogincreds({
               ...logincreds,
               [name]:value,
           })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        login()
        navigate("/Feeds")
      
    }
  return (
    <div>Login
        <form onSubmit={handleSubmit}
        style={{
            display:"flex",
            flexDirection:"column",
            color:"red",
            width:"200px",
            alignItems:"center",
            marginLeft:"40%"
        }}>
        <input type="email" name="email" placeholder='email' onChange={handleChange}/>
      <input type="password" name="password"placeholder="enter password" onChange={handleChange}/>
   <button type='submit'>login</button>
        </form>
  
    </div>
  )
}

export default Login