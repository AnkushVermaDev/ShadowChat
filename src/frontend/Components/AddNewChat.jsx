import React, { useRef } from 'react'
import styles from '../Components/Css/chatSec.module.css'

const AddNewChat = () => {

  let Contactselect = useRef(null);
  let GroupSelect = useRef(null);
  let ChannelSelect = useRef(null);


  return (
    <div className='text-white w-full'>

      <div className={`${styles.addcontactsec} p-5`} onClick={()=> (Contactselect.current.checked='true')}> 
        <input type="radio" name="new" id="" ref={Contactselect}/>
        <h1>New Contact</h1>
        
      </div>

      <div className={`${styles.addcontactsec} p-5`} onClick={()=> (GroupSelect.current.checked='true')}>
         <input type="radio" name="new" id=""  ref={GroupSelect}/>New Group
      </div>

      <div className={`${styles.addcontactsec} p-5`} onClick={()=> (ChannelSelect.current.checked='true')}>
         <input type="radio" name="new" id="" ref={ChannelSelect}/>New Channel
      </div>
      
    </div>
  )
}

export default AddNewChat
