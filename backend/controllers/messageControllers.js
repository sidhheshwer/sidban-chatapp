import Conversation from "../modals/conversationModel.js";
import Message from "../modals/messageModel.js";
import mongoose from "mongoose";
import { getReceiverSocketId,io } from "../sockets/socket.js";





export async function handleSendMessage(req,res) {
    try{
        let {id:receiverId}=req.params;
        let senderId=req.user._id;
        let {message}=req.body;


        let conversation=await Conversation.findOne({
            participants:{$all: [senderId,receiverId]}
        });

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage=new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message
        });


        if(newMessage){
            console.log(newMessage._id);
            conversation.messages.push(newMessage._id)
        }
        res.status(200).json(newMessage);
          
      // await conversation.save();
      // await newMessage.save();

       await Promise.all([conversation.save(),newMessage.save()]);

       const receiverSocketId=getReceiverSocketId(receiverId);
       
       if(receiverSocketId){
        //io.to(<socket.id>).emit() is used to send event to specific client
       io.to(receiverSocketId).emit("newMessage",newMessage)
         
       }
    }
    catch(error){
        console.log("error in handleSendMessage controller:"+error);
        res.status(500).json({error:"Internal server error"})
    }
}

export async function handleGetMessages(req,res){
    try {
        let {id:userToChat}=req.params;
        let  senderId=req.user._id;
     

        let conversation=await Conversation.findOne({
            
            participants:{$all:[senderId,userToChat]}
        }).populate("messages");
       



        if(!conversation){
            res.status(200).json([]);
        }

        const Messages=conversation.messages

        res.status(200).json(Messages)
    } catch (error) {
        console.log("error in handleGetMessages:"+error.message)
        
    }
}