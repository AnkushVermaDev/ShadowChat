import { React, useEffect, useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useChatNavigate from './ChatNavigate';



const ArchievedChat = () => {

  const navigateToChat = useChatNavigate();

  let id = useParams();
  let canvas = useRef()
  let navigate = useNavigate();


  function SecretChatWindow(e) {

    let fingeruser = (e.touches.length)
    if (fingeruser == 2) {

      let finger1 = (e.touches[0].clientY)
      let finger2 = (e.touches[1].clientY)

      if (finger2 - finger1 < 200) {

        navigate('/SecretChat')

      }


    }

  }

  let [contacts, setcontacts] = useState([]); // all user owner have on their account
  let [personalDetail, setpersonalDetail] = useState({});

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

    <div onTouchMove={(e) => SecretChatWindow(e)} className='h-screen'>

      <div className="header border-1 border-b-white w-full h-12 p-2 flex items-center justify-center gap-[60%] ">
        <Link to="/home">
          <i className="fa-solid fa-house text-white text-xl"></i>
        </Link>

        <Link to="/Archived">
          <i className="fa-solid fa-inbox text-white text-xl"></i>
        </Link>
      </div>

      {


        contacts.filter((data) => data.chatType == "archive").map((item, index) => ((
          <div className="container flex items-center justify-center gap-20">
            <div className="h-14 HomeChat w-full max-w-4xl   border-1 border-white mt-10 flex items-center rounded-lg ml-[7%] mr-[7%]" onClick={() => navigateToChat(item)}>
              <div className="picture pl-10 relative">

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

      <Link to="/settings">
        <i className="fa-solid fa-gear text-white fixed bottom-9 left-5 text-xl"></i>
      </Link>

    </div>
  )
}



export default ArchievedChat
