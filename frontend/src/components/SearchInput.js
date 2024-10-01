import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import "../styleshetts/searchInput.css"
import useCoonversation from '../zustand/useConversation';
import useGetConversation from '../hooks/useGetConversation';
import toast from 'react-hot-toast';

export default function SearchInput() {
  let [search,setSearch]=useState("");
  const {setselectedConversation}=useCoonversation();
  let {conversations} =useGetConversation();

  function handleOnSearch(e){
    e.preventDefault();
     if(!search) return;
     if(search.length<3){
      toast.error("search term must be 3 characters long")
     }

     const conversation=conversations.find((data)=>data.fullName.toLowerCase().includes(search.toLowerCase()));
     if(conversation){
      setselectedConversation(conversation);
      setSearch("")
     }
     else{
      toast.error("No such user found")
    }
  }
  
  return (
    <div>
    <form className='searchDiv' onSubmit={handleOnSearch}>
      <input  className="searchInput" type='text' placeholder='Search' value={search}onChange={(e)=>setSearch(e.target.value)}/>
      <button className='searchButton'><IoMdSearch /></button>
      </form>
      <hr/>
    </div>
  )
}
