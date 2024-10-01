import React from 'react'

import "../styleshetts/conversation.css";
import { BiLogOut } from "react-icons/bi";
import useLogout from '../hooks/useLogout';
import "../styleshetts/logout.css";

export default function Logout() {
  let{loading,logout}=useLogout();

  return (
    <div className='logoutDiv' >
    {!loading ?(
   
       <BiLogOut  className='logoutIcon' onClick={logout}/>
   
     ) :( <span className='loadingSpinner'></span>)
    }
     </div>
  )
}
