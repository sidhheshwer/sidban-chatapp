import React, { useEffect, useRef } from 'react'
import "../styleshetts/messageContainer.css";
import Chat from './Chat.js';
import ChatSkeletonLoader from "../components/ChatSkeleton/ChatSkeletonLoader.js";

import useGetMessages from '../hooks/useGetMessages.js';
import useListentoSocketMessage from '../hooks/useListentoSocketMessage.js';

export default function Messages() {
  let {loading,messages}=useGetMessages();
   useListentoSocketMessage();
  let scrollToLastChat=useRef();
  useEffect(()=>{
  
  
    setTimeout(()=>{
      if(scrollToLastChat.current===undefined){
       scrollToLastChat.current=null;
      }
      if(scrollToLastChat.current===null){
        scrollToLastChat.current=null
      }
      else{
        scrollToLastChat.current.scrollIntoView({
          behavior:"smooth",
       
        })
      }
      
    }
  ,100);
  
  
  
  
  },[messages])
  return (
    <div >
        {!loading && messages.length>0 && 
      
      messages.map((data)=>(

        <div key={data._id} ref={scrollToLastChat}> 
        <Chat  messages={data}/>
        </div>
      )

      )}
      {loading && <ChatSkeletonLoader/>}
      {!loading && messages.length === 0 && (<p className='startMessage'>Send a message to start an conversation</p>)}
    </div>
  )
}
