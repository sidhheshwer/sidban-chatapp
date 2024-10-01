import { useEffect, useState } from "react"
import {toast} from "react-hot-toast";

const useGetConversation=()=>{
    let[loading,setLoading]=useState(false);
    let[conversations,setConversations]=useState([]);
    
    useEffect(()=>{
        let getConversation=async()=>{
            try {
                setLoading(true);
                let response=await fetch("/api/users",{
                  method:"GET",
                  headers:{"Content-Type":"application/json"}
                });

                let data=await response.json();
                setConversations(data);

                if(data.error){
                    throw new Error(data.error);
                }
                 
                
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }
       getConversation();
    },[]);
    
  return {loading,conversations}
}
export default useGetConversation;