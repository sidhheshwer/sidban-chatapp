import React, { useEffect, useState } from 'react'
import Messages from './Messages';
import "../styleshetts/messageContainer.css";
import SendChat from  "../components/SendChat.js";
import {TiMessages} from "react-icons/ti";
import useCoonversation from '../zustand/useConversation.js';
import { useAuthContext } from '../Context/AuthContext.js';
import { IoCloseSharp } from "react-icons/io5";

export default function MessageContainer() {
  let {selectedConversation,setselectedConversation}=useCoonversation();
 
 // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  


  useEffect(()=>{
    return()=>{setselectedConversation(null)}
  },[setselectedConversation]);

  const handleClose = () => {
    setIsOpen(false);
    setselectedConversation(null); // Optionally reset selected conversation
  };
  
  return (

    
 

    <div className={`messageContainer ${selectedConversation?"open":""}`}>
      
     {  (!selectedConversation) ? <NoChats/>:
      (
        <>

        
<div className='header'>
  
  <img  className='headerImg' src={`${selectedConversation.profilePic}`} alt='userPic'/> 
   
   <p className='headerName'>{`${selectedConversation.fullName}`}</p>
  
  <IoCloseSharp className='headerClose' onClick={handleClose}  /> 
  
    </div>
        
        
      <div className='messageDiv'>
      <Messages/>
      


      </div>
      
      <SendChat/>
        </>
      ) 
     
     }
    </div>
 
  )
}

function NoChats(){
  let {authUser}=useAuthContext();
  return(
    <>
    <div className='noChatsDiv'>

       <h2>Welcome {authUser.fullName}</h2>
       <p>Select a chat and start a conversation!!!</p>
       <TiMessages className='chatIcon'/>
       </div>
    </>
  )
}