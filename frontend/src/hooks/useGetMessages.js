import { useEffect, useState } from "react"
import {toast} from "react-hot-toast";
import useCoonversation from "../zustand/useConversation";

const useGetMessages=()=>{
    let[loading,setLoading]=useState(false);
    let {messages,setMessages,selectedConversation}=useCoonversation();

    
    useEffect(()=>{
        let getMessages=async()=>{
            try {
                setLoading(true);
                let response=await fetch(`/api/messages/${selectedConversation._id}`,{
                  method:"GET",
                  headers:{"Content-Type":"application/json"}
                });

                let data=await response.json();

              

                if(data.error){
                    throw new Error(data.error);
                }
                setMessages(data);
                 
                
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }
     if(selectedConversation?._id){  getMessages()};
    },[selectedConversation._id , setMessages]);
    
  return {loading,messages}
}
export default useGetMessages;