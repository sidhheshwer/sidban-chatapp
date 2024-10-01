import React, { useState } from 'react'

import "../styleshetts/signin.css";
import {Link} from "react-router-dom";
import useSignIn from '../hooks/useSignIn.js';
import { PiChatsFill } from "react-icons/pi";


export default function Signin() {

    let [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    });
    let {loading,signin}=useSignIn();

    function handleGenderChange(gender){
        setInputs({...inputs,gender});
    }

  async  function handleOnSignin(e) {
      e.preventDefault();
      await signin(inputs);
   
    }
    return (
        <>
         
            <div className='formDiv'>
            <h1 className='sidbanHead'><span style={{ color: 'red' }}>Sid</span>ban 
            <PiChatsFill />
            </h1>
               <h3>Signin</h3>
            <form onSubmit={handleOnSignin}>
            
            <input className="inpt" type='text' name='fullName' placeholder='enter fullname' value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} /><br/>
            <input className="inpt" type='text' name='username' placeholder='enter username' value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} /><br/>
            <input className="inpt" type='password' name='password' placeholder='enter password' value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} /><br/>
            <input className="inpt" type='password' name='confirm password' placeholder='confirm password' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />

            <br/>
                <label>gender:
                <label>
                    <input type='checkbox' name='gender' value='male' checked={inputs.gender==="male"}  onChange={()=>{handleGenderChange("male")}}/> Male
                </label>
                <label>
                    <input type='checkbox' name='gender' value='female' checked={inputs.gender==="female"}  onChange={()=>{handleGenderChange("female")}} /> Female
                </label>
                </label>
            
             <br/>
             <br/>
             <p > <Link to="/login" className='link1'>Already have an account</Link></p>
             <br/>
            <button disabled={loading} >
                {loading?<span className='signInSpinner'></span>:"Signin"}
            </button>
            </form>
            </div>
     </>
    )
}
