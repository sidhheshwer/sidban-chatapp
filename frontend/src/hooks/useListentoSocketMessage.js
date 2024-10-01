import  { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext.js'
import useCoonversation from '../zustand/useConversation.js';

import notificationSound from "../sounds/notificationSound.mp3";

export default function useListentoSocketMessage() {
    const {socket}=useSocketContext();
    const {messages,setMessages}=useCoonversation();

    useEffect(()=>{
      socket?.on("newMessage",(newMessage)=>{
       
        newMessage.shouldShake=true;
        const sounds=new Audio(notificationSound);
        sounds.play();
        setMessages([...messages,newMessage])
      });

      return()=>socket?.off("newMessage")
    },[socket,messages,setMessages]);
  
}
