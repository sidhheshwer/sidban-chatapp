import {createContext, useState,useEffect, useContext} from "react";
import {io} from "socket.io-client";
import { useAuthContext } from "./AuthContext";



const SocketContext=createContext();

export const useSocketContext=()=>{
   return useContext(SocketContext);
}

export const SocketContextProvider=({children})=>{
    let[socket,setSocket]=useState(null);
    let[onlineUsers,setOnlineUser]=useState([]);
    let {authUser}=useAuthContext();
   
    useEffect(()=>{
        if(authUser){
            const socket=io("https://sidban-chatapp.onrender.com",{
                query:{
                    userId:authUser._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUser(users);
            })

            return()=>socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
     // eslint-disable-next-line
    },[authUser])

    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
         {children}
        </SocketContext.Provider>
    )
}