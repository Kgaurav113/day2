import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
    const {isAuth,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const handlelogin=()=>{
        if(isAuth){
            logout()
            navigate("/")
        }
        else{
            navigate("/Login")
        }
       
    }
  return (
    <div style={{display:"flex",gap:"20px",paddding:"10px"}}>Navbar:
      Navbar:
        <Link to="">Home</Link>
        <Link to="/Feeds">Feeds</Link>
        <button onClick={handlelogin}>{isAuth?"logout":"login"}</button>
    </div>
  )
}

export default Navbar