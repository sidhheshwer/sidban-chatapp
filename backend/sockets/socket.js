import { Server } from "socket.io";
import express from "express";
import http from "http";

const app=express();

const server=http.createServer(app);

const io=new Server(server,{
    
cors:{
    origin:["http://localhost:3000"],
    methods:["GET","POST"]
}
});


export const getReceiverSocketId=(receiverId)=>{

   return userSocketMap[receiverId];
}
 
const userSocketMap={}

 

io.on("connection",(socket)=>{
    //console.log("user is connected:",socket.id);
    const userId=socket.handshake.query.userId;

      if(userId!=undefined){
        userSocketMap[userId]=socket.id
      }

      io.emit("getOnlineUsers",Object.keys(userSocketMap));//used to send event ie getOnlineUsers to all the connected clients or sockets


    socket.on("disconnect",()=>{//socket.on is used to listen events in both client and server side
       // console.log("user is disconnected:",socket.id);
        delete userSocketMap[userId];//deleting the userid from map
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})


export  {app,io,server};