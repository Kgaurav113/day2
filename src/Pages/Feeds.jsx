import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
const Feeds = () => {
 
    const {isAuth}=useContext(AuthContext);
    if(isAuth){
        return <Feeds/>
    }
    else{
      return (
        <div><Navigate to="/login"/></div>
      )
    }
 
}

export default Feeds