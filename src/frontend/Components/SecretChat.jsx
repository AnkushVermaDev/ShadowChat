import {React, useEffect, useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useChatNavigate from './ChatNavigate';

import { useParams } from "react-router-dom"; 
const SecretChat = () => {
    let id  = useParams();
  const navigateToChat = useChatNavigate();
    
    
      let [contacts,setcontacts]=useState([]); // all user owner have on their account
      let [personalDetail,setpersonalDetail]=useState({});
    
      let navigate  = useNavigate();
    
    
    
        useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/AnkushVermaDev/ShadowChatApi/refs/heads/main/contacts.json');
            const data = await response.json();
            setcontacts(data.ShowAllChat || []);  // ensure it's an array
          } catch (error) {
            console.error("Error fetching contacts:", error);
          }
        };
    
        fetchContacts();
      }, []); // run once when component mounts
    
    
  return (
     
      <div className='bg-black h-screen'>
          
         <h1 className='text-white font-bold text-2xl text-center pt-5'>STEALTH MODE</h1>
  
      {
     
     
             contacts.filter((data) => data.chatType == "strealth").map((item, index) => ((
               <div className="container flex items-center justify-center gap-20">
                 <div className="h-17 HomeChat w-full max-w-4xl   border-1 border-white  flex items-center rounded-lg ml-[7%] mr-[5%] mt-5" onClick={()=>navigateToChat(item)}>
                   <div className="picture pl-10 relative ">
     
                     <LazyLoadImage
                       src={item.profilePic}
                       alt=''
                       width={600}
                       height={400}
                       className='w-10 h-10 rounded-full border-2 border-black shadow'
                     />
     
                     <div className="status w-2 h-2 bg-red-500 rounded-full absolute bottom-0 left-17" ></div>
                   </div>
     
                   <h2 className='text-white font-bold text-xl pl-10'>{item.name}</h2>
                 </div>
     
               </div>
             )))
     
     
     
     
           }
  
  
      </div>
    )
}

export default SecretChat
