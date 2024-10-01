import React from 'react'
import "../styleshetts/Home.css";
import Sidebar from './Sidebar.js';
import MessageContainer from './MessageContainer.js';
import { PiChatsFill } from "react-icons/pi";



export default function Home() {
  return (

    <>
   
    <div className='chatDiv'>
    <h1 className='sidbanHeadHome'><span style={{ color: 'red' }}>Sid</span>ban
    <PiChatsFill className='chatIconHome'/>
    </h1>
 
       
      <Sidebar/>
      <MessageContainer/>
    </div>
    </>
  )
}
