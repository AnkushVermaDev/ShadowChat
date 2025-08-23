import { React, useEffect, useState, useRef } from 'react'
import styles from '../Components/Css/Login.module.css'

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
const Login = () => {

  const [login, setlogin] = useState({ username: '', password: '', SecretKey: '', })
  const [data, setdata] = useState({})


  function changedstate(e) {
    let name = e.target.name;
    let value = e.target.value;

    setlogin(prev => ({ ...prev, [name]: value }));
  }

  async function submit2() {

    const response = await fetch('https://api.shadowchat.ai/powerprotector', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(login)
    })

    if (!response.ok) {

      throw new Error('NETWORK ISSUE')
      
    }

    

  }

  const navigate = useNavigate();

  function submit(){

    navigate('/home');
    
  }



  return (
    <div className='flex flex-col items-center text-white'>
    <div className={`${styles.container} border-white border m-auto mt-10 rounded-lg flex flex-col items-center gap-10 relative`}>


        <input onChange={changedstate} value={login.username} type="text" name="username" id="" placeholder='username' className='border-1 border-white w-[60%] p-2 mt-20' />
        <input onChange={changedstate} value={login.password} type="text" name="password" id="" placeholder='password' className='border-1 border-white w-[60%] p-2' />
        <input onChange={changedstate} value={login.SecretKey} type="text" name="SecretKey" id="" placeholder='SecretKey' className='border-1 border-white w-[60%] p-2' />

        <Link to='/signin'><h4 className=' absolute left-10 top-73 text-red-500 font-lighter mr-35 '>Create Account</h4></Link>

        <input
          type="submit"
          value="Continue"
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 absolute bottom-6"
          onClick={submit}
        />

      </div>


    </div>
  )
}

export default Login
