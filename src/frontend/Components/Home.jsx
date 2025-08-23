import React from 'react'
import './Css/DefaultHome.css'
import Header from './Header.jsx'
import video from '../../media/blueball.mov'
const Home = () => {
  return (
    <>

      <div className="main">
        <Header/>

        <div className="content">


          <div className="herosection flex flex-rows justify-between items-center p-10 h-[90vh]">

            <h1 className='text-white pl-10 text-5xl font-bold uppercase'>Trust is built on security</h1>

            
           
                <video src={video} autoPlay loop muted className='w-[100%] object-cover h-[90vh] border-1 border-white absolute top-15 left-0 overlay-wrap z-[-1] '></video>


           


          </div>
         <h1 className=' text-center font-bold text-white text-4xl mt-10'>Features</h1>

          <div className="featuresbox flex flex-rows flex-wrap  items-center justify-start p-10">


            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>

            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>


            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>


            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>


            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>




            <div className="features w-75 h-60 border-1 border-black rounded-lg">

            </div>






          </div>


        </div>

        <div className="membership-plan w-full mb-20   text-white">


          <h1 className='text-3xl font-bold text-center mt-20 mb-10'>MEMBERSHIP PLAN</h1>

        <div className='pricingbox flex flex-col lg:flex-row justify-center items-center gap-10 px-5'>

          {/* BASIC PLAN */}
          <div className='cardBox w-80 p-5 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] shadow-lg '>
            <h1 className='text-center font-bold text-3xl pt-2 pb-4'>BASIC</h1>

            <div className='flex justify-between px-2 py-2 border-b border-gray-600'>
              <span>Monthly Price</span> <h1 className='font-lighter'>Free</h1>
            </div>

            <ul className='mt-5 space-y-2 text-sm pl-3'>
              <li>✅ Session-Based Access</li>
              <li>✅ End-to-End Encryption</li>
              <li>✅ Sort Contacts</li>
              <li>✅ Message Reactions</li>
              <li>❌ Auto Message Deletion</li>
              <li>❌ Voice/Video Calls</li>
              <li>❌ AI Paragraph Composer</li>
            </ul>

            <div className="ProceedtoBuyBtn mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg cursor-pointer">
              Buy
            </div>
          </div>

          {/* STANDARD PLAN */}
          <div className='cardBox w-80 p-5 rounded-2xl bg-gradient-to-br from-[#222831] to-[#393e46] shadow-lg'>
            <h1 className='text-center font-bold text-3xl pt-2 pb-4'>STANDARD</h1>

            <div className='flex justify-between px-2 py-2 border-b border-gray-600'>
              <span>Monthly Price</span> <h1 className='font-bold'>$49</h1>
            </div>

            <ul className='mt-5 space-y-2 text-sm pl-3'>
              <li>✅ All from BASIC</li>
              <li>✅ Auto Message Deletion (24H)</li>
              <li>✅ Voice & Video Calls</li>
              <li>✅ AI Auto Replies (Limited)</li>
              <li>✅ Media Sharing</li>
              <li>✅ Call Logs & History</li>
              <li>❌ AI Smart Paragraph Composer (Custom)</li>
            </ul>

            <div className="ProceedtoBuyBtn mt-6 text-center bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg cursor-pointer">
              Buy
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className='cardBox w-80 p-5 rounded-2xl bg-gradient-to-br from-[#240046] to-[#5a189a] shadow-lg'>
            <h1 className='text-center font-bold text-3xl pt-2 pb-4'>PREMIUM</h1>

            <div className='flex justify-between px-2 py-2 border-b border-gray-600'>
              <span>Monthly Price</span> <h1 className=''> <strike className='text-red-500 pr-10'> $99</strike> <span className='text-bold'>$65</span></h1>
            </div>

            <ul className='mt-5 space-y-2 text-sm pl-3'>
              <li>✅ All from STANDARD</li>
              <li>✅ Voice Filters</li>
              <li>✅ AI Smart Paragraph Composer</li>
              <li>✅ Scheduled Messages</li>
              <li>✅ Reminders & Timers</li>
              <li>✅ Up to 3 Devices</li>
              <li>✅ Priority Security & Support</li>
            </ul>

            <div className="ProceedtoBuyBtn mt-6 text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg cursor-pointer">
              Buy
            </div>
          </div>

        </div>
          


        </div>


        
      </div>

    </>

  )
}

export default Home
