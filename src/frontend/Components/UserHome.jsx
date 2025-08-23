import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, Link, useParams } from 'react-router-dom';
import useChatNavigate from './ChatNavigate';

const Home = () => {
  let id = useParams();

  let [contactavailable, setcontactavailable] = useState(true);
  let [contacts, setContacts] = useState([]); // all user owner have on their account
  let [personalDetail, setPersonalDetail] = useState({});

  let navigate = useNavigate();
  let container = useRef();
  const navigateToChat = useChatNavigate();

  function SecretChatWindow(e) {
    let fingeruser = e.touches.length;
    if (fingeruser === 2) {
      let finger1 = e.touches[0].clientY;
      let finger2 = e.touches[1].clientY;

      if (finger2 - finger1 < 200) {
        navigate('/SecretChat');
      }
    }
  }

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/AnkushVermaDev/ShadowChatApi/refs/heads/main/contacts.json'
        );
        const data = await response.json();
        setContacts(data.ShowAllChat || []); // ensure it's an array
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []); // run once when component mounts

  return (
    <div
      onTouchMove={(e) => SecretChatWindow(e)}
      className="h-screen overflow-y-auto overflow-x-hidden bg-black relative "
    >
      {/* Header */}
      <div className="header border-b border-white w-full h-12 px-4 flex items-center justify-center gap-[80%] pl-[10%] pr-[10%]">
        <Link to="/home">
          <i className="fa-solid fa-house text-white text-xl"></i>
        </Link>

        <Link to="/Archived">
          <i className="fa-solid fa-inbox text-white text-xl"></i>
        </Link>
      </div>

      {/* Search Box - now aligned properly */}
      

    
      <div className="absolute  right-0 w-30 h-10 border border-white cursor-pointer flex items-center justify-center rounded-b-lg gap-3 " onClick={()=>{ navigate('/search',
        {
          
          state:{contacts}
        
        }
        
        )}}>
        <i className="fa-solid fa-magnifying-glass text-white"></i>
        <h3 className="text-white font-light">Search</h3>
      </div>
      
      <div className='mb-8'></div>

      {/* Chat List */}
      {contactavailable && contacts.length > 0 ? (
        contacts
          .filter((data) => data.chatType === 'home')
          .map((item, index) => (
            <div
              key={index}
              ref={container}
              className="container flex items-center justify-center gap-20 "
              onClick={() => navigateToChat(item)}
            >
              <div className="h-17 HomeChat w-full max-w-4xl border border-white flex items-center rounded-lg ml-[7%] mr-[5%] mt-5">
                <div className="picture pl-10 relative">
                  <LazyLoadImage
                    src={item.profilePic}
                    alt={item.name}
                    className="w-10 h-10 rounded-full border-2 border-black shadow"
                  />
                  <div className="status w-2 h-2 bg-red-500 rounded-full absolute bottom-0 left-16"></div>
                </div>
                <h2 className="text-white font-bold text-xl pl-10">
                  {item.name}
                </h2>
              </div>
            </div>
          ))
      ) : (
        <div className="text-white text-center h-full flex items-center ">
          <div className="border border-white w-full h-40 rounded-lg flex items-center justify-center relative">
            <h3>START YOUR JOURNEY</h3>
          </div>
        </div>
      )}

      {/* Bottom Icons */}
      <Link to="/settings">
        <i className="fa-solid fa-gear text-white fixed bottom-9 left-5 text-xl"></i>
      </Link>
      <Link to="/NewChat">
        <i className="fa-regular fa-message text-white fixed bottom-17 right-6 bg-blue-600 rounded-full p-5"></i>
      </Link>
    </div>
  );
};

export default Home;
