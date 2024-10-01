import { useState } from "react";
import useCoonversation from "../zustand/useConversation";
import {toast} from "react-hot-toast";

const useSendMessage=()=>{
    let [loading,setLoding]=useState(false);
    let {messages,setMessages,selectedConversation}=useCoonversation();
    
    
    let sendMessage=async(message)=>{
       try {
        setLoding(true);

        let response=await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message})
        })
        let data=await response.json();
        if(data.error){
        throw new Error(data.error);
        }

        setMessages([...messages,data])
       } catch (error) {
          toast.error(error.message);
       }
       finally{
        setLoding(false)
       }
    }
    return{loading,sendMessage}
}

export default useSendMessage;
