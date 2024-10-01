import React, { useState } from 'react'
import "../styleshetts/searchInput.css";
import {BsSend} from "react-icons/bs";
import useSendMessage from '../hooks/useSendMessage';


export default function SendChat() {
  let [message,setMessage]=useState("");
  let {loading,sendMessage}=useSendMessage();

 async function handleOnSendChat(e){
    e.preventDefault();
    await sendMessage(message);
    setMessage("");

  }

  return (
    <div>
     <form className='sendDiv'>
      <input  className="sendInput" type='text' placeholder='Send a message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <button className='sendButton' onClick={handleOnSendChat} disabled={loading}>
        
        {loading ? <span className='sendSpinner'></span> :<BsSend />} </button>
      </form>
    </div>
  )
}
