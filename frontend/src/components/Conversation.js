import React from 'react'

import "../styleshetts/conversation.css";
import useCoonversation from '../zustand/useConversation.js';
import { useSocketContext } from '../Context/SocketContext.js';

export default function Conversation({ conversation, emoji, lastChat }) {
  let { selectedConversation, setselectedConversation } = useCoonversation()
  let isSelected = selectedConversation?._id === conversation._id;

  let { onlineUsers } = useSocketContext();
  let isOnline= onlineUsers.includes(conversation._id);

  
  return (
    <>




      <div className='convo1' style={{ backgroundColor: isSelected ? 'rgb(14, 74, 74)' : '', }}
        onClick={() => { setselectedConversation(conversation) }}
      >

        <div className="user-container">
          <div className={`${isOnline ?"user-status":""} `}></div>
          <img className='avatarImg  ' src={conversation.profilePic} alt='rick' ></img>
        </div>


        {conversation.fullName.length < 12 ?
          conversation.fullName :
          `${conversation.fullName.substring(0, 12)}... ` }

        <span className='chatIcons'>{emoji}

        </span>

        {!lastChat && <hr />}
      </div>



    </>
  )
}
