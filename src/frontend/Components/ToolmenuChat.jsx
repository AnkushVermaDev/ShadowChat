import React, { useState,useEffect } from 'react'

const useToolmenuChat = (e) => {
          let [x,setx] =useState('')

  useEffect(()=>{

          setx(e.target.name)
        

  },[])  
  return (
    {x}
  )
}

export default useToolmenuChat
