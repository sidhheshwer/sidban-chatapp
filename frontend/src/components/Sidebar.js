import React from 'react'
import SearchInput from './SearchInput.js'
import Conversations from './Conversations.js'
import Logout from './Logout.js'
import "../styleshetts/sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebarDiv'>
     <SearchInput/>
     <Conversations/>
    
     <Logout/>
    </div>
  )
}
