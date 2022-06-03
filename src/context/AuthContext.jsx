import React, {useState } from 'react';
import { createContext } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
export const AuthContext =createContext()
export const AuthProvider=({children})=>{

    const[isAuth,setisAuth]=useState(false);
    const navigate=useNavigate();
    const location =useLocation();
    console.log(location)
    const login=()=>{
        
       
        setisAuth(true)
        navigate("/feeds")
        
      
    };
    const logout=()=>{
        setisAuth(false)
        navigate("/")
    };
   const value={isAuth,login,logout}
     return(
         <AuthContext.Provider value={value}>
             {children}
         </AuthContext.Provider>
     )
}