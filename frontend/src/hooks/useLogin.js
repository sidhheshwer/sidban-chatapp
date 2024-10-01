import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";


export default function useLogin(){
   let [loading,setLoading]=useState(false);
   let {setAuthUser}=useAuthContext();

   const login=async(username,password)=>{
   try {
    const success=handleInputError(username,password);
    
    if(!success){
        return;
    }
    
    setLoading(true);
    let response=await fetch("/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
    });
    let data=await response.json();
     if(data.error){
        throw new Error(data.error);
     }
     localStorage.setItem("chat-user",JSON.stringify(data));
     setAuthUser(data);

    
   } catch (error) {
    toast.error(error.message)
   }
   finally{
    setLoading(false)
   }
}
return{loading,login}
}



function handleInputError(username,password){
    if( !username || !password ){
      console.log(username,password)
      toast.error("Please fill all the fields");
      return false;
    }
 
    return true;
 }