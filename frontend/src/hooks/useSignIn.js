
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

 export default function useSignIn(){
  let [loading,setLoading]=useState(false);
  let {setAuthUser}=useAuthContext();
   
  async function signin({fullName,username,password,confirmPassword,gender}){
    const success=handleInputError({fullName,username,password,confirmPassword,gender});
    
    if(!success){
        return;
    }
    setLoading(true)

    try {
     const response=await fetch("/api/auth/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fullName,username,password,confirmPassword,gender})
     })

     let data=await response.json();
     console.log(data);

     localStorage.setItem("chat-user",JSON.stringify(data));
     setAuthUser(data);

     if(data.error){
        throw new Error(data.error);
     }
        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(true);
    }

    
  }
  return {loading,signin}
}

function handleInputError({fullName,username,password,confirmPassword,gender}){
   if(!fullName || !username || !password || !confirmPassword || !gender){
     toast.error("Please fill all the fields");
     return false;
   }

   if(password !==confirmPassword){
    toast.error("Password is wrong");
    return false;
   }

   if(password.length<6){
    toast.error("Password must be aleast 6 charcters");
    return false;
   }

   return true;
}