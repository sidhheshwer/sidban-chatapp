import React from 'react'
import Conversation from './Conversation.js';
import useGetConversation from "../hooks/useGetConversation.js";
import "../styleshetts/conversation.css";

import "../styleshetts/conversation.css";
import { getRandomEmojis } from '../emojis/emoji.js';

export default function Conversations() {
  let {loading,conversations}=useGetConversation();

  return (
    <div className='conversationDiv'>

      {conversations.map((data,last)=>(
        <Conversation 
        key={data._id} 
        conversation={data}
        emoji={getRandomEmojis()}
        lastChat={last===conversations.length-1}
        />
      ))}
        
     {loading?<span className='convoSpinner'></span>:null}
 
    </div>
  )
}
