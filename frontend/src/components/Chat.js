import React from 'react'
import "../styleshetts/senderChats.css";
import "../styleshetts/recieverChats.css";
import {useAuthContext} from "../Context/AuthContext.js";
import useCoonversation from '../zustand/useConversation.js';

export default function Chat({messages}) {
  const {authUser}=useAuthContext();
  let {selectedConversation}=useCoonversation()
 
  const fromMe=messages.senderId===authUser._id;
  const profilePic= fromMe ? authUser.profilePic :selectedConversation?.profilePic;
  const shakeChat=messages.shouldShake?"shake":"";
  

  return (
    <div className={fromMe ? "senderContainer" : "reciverContainer"}>
    <div className={fromMe ? "senderMessage" : "receiverMessage"}>
      <img 
        className={fromMe ? "senderImg" : "receiverImg"} 
        src={profilePic} 
        alt="User Avatar"
      />
     
      <p className={`${shakeChat}`}>{messages.message}</p>
    </div>
    <div className={fromMe ? "senderTime" : "reciverTime"}>{messages.createdAt? messages.createdAt.toString().slice(12,16):"now"}</div>
  </div>


  )
}



/*
<div className='sender'>
<img className="senderImg"  src='https://www.irishtimes.com/resizer/v2/UM3O52A4XRAMDIK34Y7PQTNYG4.jpg?auth=3511f71b5a588172a1ff7f40a82660adb5143342ec4ea7f30642fbd9c2e29232&smart=true&width=1024&height=683' alt='carl'/>
 <p className="senderMessage">He rick its me daryl</p>
 <div className='senderTime'>12:20</div>
</div>*/