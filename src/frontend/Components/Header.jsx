import React from 'react'
import './Css/DefaultHome.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='p-7 border-b-2 border-black w-full h-10 flex flex-rows items-center justify-between pl-[5%] pr-[5%]'>

      <div className='text-2xl  text-white font-bold'>
          ShadowChat
      </div>

      <div className='sideheader text-white font-lighter flex flex-rows'>
        <Link to='/'> <h3>Home</h3></Link>
        <Link to='/Login'><h3>Account</h3></Link>
        <Link><h3>Help</h3></Link>
      </div>

     

    </div>
  )
}

export default Header
