import { useState,useEffect } from "react";

import React from 'react'

const AiPoweredMainChat = ({handleBack}) => {
 let obj = {

    page: "AiPoweredMainChat_page1",
    functiontype: 'back'

  }

  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };


  let askaiobj = {

    page: "AiPoweredMainChat_page1",
    functiontype: 'askai',
    state: isOn

  }
  useEffect(() => {

    handleBack(askaiobj)

  }, [isOn])

  return (
    <div className="menuoption w-[180px] h-56 bg-black absolute top-16 right-0 rounded-b-xl border border-white flex flex-col gap-1 items-center justify-center Z-3 ">



      <div data-name="Search" className=" w-full h-7 bg-black flex items-center px-2 rounded-b-lg pl-4" onClick={() => {
        handleBack(obj)

      }}>
        <i class="fa-solid fa-angle-left"></i>
        <h1 className='ml-[5px]'>Back</h1>

      </div>

      <div
        data-name={isOn ? "askaiOn" : "askaiOff"}
        className="option w-full h-8 bg-red-500 flex items-center px-2 rounded-b-lg pl-5"
      >
        <i className="fa-regular fa-lightbulb"></i>
        <h1 className="text-white ml-[5px]">Ask Ai</h1>

        {/* Toggle Switch */}
        <div
          onClick={toggleHandler}
          className={`ml-[20px] relative flex items-center w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${isOn ? "bg-green-500 border-green-500" : "bg-gray-400 border-gray-400"
            }`}
        >
          {/* Circle */}
          <div
            className={`w-5 h-5 rounded-full bg-white absolute transition-all duration-300 ${isOn ? "left-6" : "left-1"
              }`}
          ></div>
        </div>
      </div>


      {/* Voice */}
      <div data-name="Search" className="option w-full h-8 bg-red-500 flex items-center px-2 rounded-b-lg pl-5">
        <i className="fa-solid fa-volume-high"></i>
        <h1 data-name="Search" className="text-white ml-[5px]">Voice</h1>
      </div>


      {/* Assistant */}
      <div data-name="Search" className="option w-full h-8 bg-red-500 flex items-center px-2 rounded-b-lg pl-5">
        <i className="fa-solid fa-robot"></i>
        <h1 data-name="Search" className="text-white ml-[5px]">Assistant</h1>
      </div>

      {/* Schedule */}
      <div data-name="Search" className="option w-full h-8 bg-red-500 flex items-center px-2 rounded-b-lg pl-5">
        <i className="fa-solid fa-clock"></i>
        <h1 data-name="Search" className="text-white ml-[5px]">Schedule</h1>
      </div>


      {/* Schedule */}
      <div data-name="Search" className="option w-full h-8 bg-red-500 flex items-center px-2 rounded-b-lg pl-5">
        <i class="fa-solid fa-masks-theater"></i>
        <h1 data-name="Search" className="text-white ml-[5px]">Face Swap</h1>
      </div>



    </div>

  )
}

export default AiPoweredMainChat
