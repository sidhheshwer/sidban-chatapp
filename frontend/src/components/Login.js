import React, { useState } from 'react'
import "../styleshetts/signin.css";
import {Link} from "react-router-dom";
import useLogin from '../hooks/useLogin';
import { PiChatsFill } from "react-icons/pi";

export default function Signin() {
    let [username,setUsername]=useState("");
    let[password,setPassword]=useState("");
    let {loading,login}=useLogin();

  async function handleOnLogin(e) {
       e.preventDefault();
       await login(username,password)
       
    }
    return (
            <div className='formDiv'>
  <h1 className='sidbanHead'><span style={{ color: 'red' }}>Sid</span>ban 
  <PiChatsFill /> 
  </h1>
 
               <h3>Login</h3>
            <form onSubmit={handleOnLogin}>
            
          
            <input className="inpt" type='text' name='username' placeholder='enter username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
            <input className="inpt" type='password' name='password' placeholder='enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
       
           <p > <Link to="/" className='link1'>Create an account</Link></p>
            <br/>
            <button disabled={loading}>
                {loading ? <span className='signInSpinner'></span>:"Login"}
            </button>
            </form>
            </div>
     
    )
}

