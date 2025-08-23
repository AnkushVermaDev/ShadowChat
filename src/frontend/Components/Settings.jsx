import React, { useEffect, useRef, useState } from 'react'
import styles from '../Components/Css/chatSec.module.css'
import Pencil from './pencil'
const Settings = () => {
  const [personaldetail, setPersonaldetail] = useState([])
  const [windowcord, setwindowcord] = useState({ top: 0, left: 0 });
  const pichook = useRef(null)

  useEffect(() => {




    fetch('https://raw.githubusercontent.com/AnkushVermaDev/ShadowChatApi/refs/heads/main/personalDetail.json')
      .then(res => res.json())
      .then(data => setPersonaldetail(data))
      .catch(() => setPersonaldetail([]))

  }, [])

  useEffect(() => {
    if (pichook.current) {
      const rect = pichook.current.getBoundingClientRect()
      setwindowcord({ top: rect.top, left: rect.left })
      console.log(windowcord);

    }
  }, [personaldetail]) // run after personaldetail is loaded and rendered









  return (
    <div className="text-white flex items-center justify-center flex-col gap-2 overflow-x-hidden">
      {personaldetail.map((person, index) => ( // () means you are directly returning the JSX expression.
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-5 mt-10 ml-10 pr-10" >
            <div ref={pichook} className="pic  relative">


              <img src={person.picUrl} className='
              backgroundImage: `url(${person.picUrl})`,
                object-cover w-15 h-15 rounded-full bg-blue-600 brightness-[0.5]'  alt="" />


              <Pencil top={windowcord.top} left={windowcord.left} />

            </div>
            <h3 className="font-bold text-2xl">{person.name}</h3>
          </div>

          <div className="w-full mt-10">
            <h1 className="text-center font-bold text-lg">General</h1>


            <div className={`${styles.settingSec} relative`}>
              <h3>Username</h3>
              <h3 className='overflow-hidden'>{person.name}</h3>
              <Pencil />

            </div>

            <div className={styles.settingSec}>
              <h3>Phone</h3>
              <h3 className='overflow-hidden'>{person.phoneNumber}</h3>
              <Pencil />


            </div>

            <div className={styles.settingSec}>
              <h3>Bio</h3>
              <h3 className='overflow-hidden'>{`${person.bio.substring(0, 35) + '.....'}`}</h3>
              <Pencil />

            </div>
          </div>

          <div className="w-full mt-2">
            <h1 className="text-center font-bold text-lg">Privacy</h1>

            <div className={styles.settingSec}>
              <h3>Chat Lock</h3>
              <h3 className='pl-2 pt-2'>***</h3>
              <Pencil />

            </div>

            <div className={styles.settingSec}>
              <h3>2 Factor Auth</h3>
              <Pencil />

            </div>

            <div className={styles.settingSec}>
              <h3>Delete</h3>
              <Pencil />

            </div>

            
             


          </div>





          <div className="w-full mt-3 mb-20 ">
            <h1 className="text-center font-bold text-lg">Theme</h1>

            <div className={styles.settingSec}>
              <h3>Chat Theme</h3>
            </div>

          </div>

          <div className='relative w-full'>

            <h1 className='text-red-500 font-bold absolute bottom-10 left-5'>Logout</h1>

          </div>





        </React.Fragment>

      ))}
    </div>

  )


}

export default Settings
