import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CreateAccount = () => {

  const [signin,setsignin] = useState({username:'',password:'',conformpassword:'',})
  useEffect(()=>{

  },[])
  return (
    <div className='flex flex-col items-center text-white'>
      <div className='w-110 h-125 border-white border-1 m-auto mt-10 rounded-lg flex flex-col items-center justify-center gap-10 relative'>
        
      

        {/* Email */}
        <input 
          type="email" 
          placeholder='Email' 
          className='border-1 border-white w-[60%] p-2'
        />

        {/* Password */}
        <input 
          type="password" 
          placeholder='Password' 
          className='border-1 border-white w-[60%] p-2'
        />

        {/* Confirm Password */}
        <input 
          type="password" 
          placeholder='Confirm Password' 
          className='border-1 border-white w-[60%] p-2'
        />

        {/* Back to Login */}
        <Link to='/login'>
          <h4 className='absolute left-21 bottom-35 text-red-500 font-lighter mr-35 text-sm'>
            Login
          </h4>
        </Link>

        {/* Submit Button */}
        <input
          type="submit"
          value="Create Account"
          className=" absolute bottom-10 px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        />

      </div>
    </div>
  )
}

export default CreateAccount
