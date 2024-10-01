import mongoose from "mongoose";
import Message from "./messageModel.js";
import User from "./userModel.js";

let conversationSchema=mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        },
    ]
},{timestamps:true})

const Conversation=mongoose.model("Conversation",conversationSchema);

export default Conversation;