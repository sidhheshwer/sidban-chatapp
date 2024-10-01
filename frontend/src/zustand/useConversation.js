import {create} from "zustand";

const useCoonversation=create((set)=>({
 selectedConversation:null,
 setselectedConversation:(selectedConversation)=>set({selectedConversation}),
 messages:[],
 setMessages:(messages)=>set({messages})
}))

export default useCoonversation;
