import React, { useEffect, useState, useReducer, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../Components/Css/chat.css'
import SendIcon from './SendIcon'
import UserSearched from './UserSearched.jsx'

import SecurityFeatureMainChat from './ChatSection/SecurityFeatureMainChat.jsx'
import AiPoweredMainChat from './ChatSection/AiPoweredMainChat.jsx'


const Chat = () => {
  let blocknoti = useRef()

  let chatinfo = useLocation();

  const [currentchat, setcurrentchat] = useState({})
  const [isaion, setisaion] = useState(false)


  const [pos, setpos] = useState({ oldx: 0, newx: 0 })

  const [toggleellipsis, settoggleellipsis] = useState(false)
  const [currentmedia, setcurrentmedia] = useState('fa-solid fa-microphone')
  const [togglmedia, settogglmedia] = useState(false)


  function reducer(state, action, key) {
    switch (action.type) {
      case "clearhistroy":
        console.log(state.clearhistroy.state);

        return {
          ...state,
          clearhistroy: {
            "state": !state.clearhistroy.state
          }
        }


      case "Search":
        return {
          ...state,
          Search: {
            "state": !state.Search.state
          }
        }


      case "Block":
        return {
          ...state,
          Block: {
            "state": !state.Block.state
          }
        }


      case "AiPowered":
        return {
          ...state,
          AiPowered: {
            ...state.AiPowered,   // keep Components
            state: !state.AiPowered.state
          }
        }



      case "askai":
        return {
          ...state,
          AiPowered: {
            ...state.AiPowered,   // keep Components
            state: !state.AiPowered.state
          }
        }


      case "back":
        if (action.key === "AiPoweredMainChat_page1") {
          return {
            ...state,
            AiPowered: {
              ...state.AiPowered,
              state: !state.AiPowered.state
            }
          }
        }

        if (action.key=="SecurityFeatureMainChatt_page1") {
         return {
          ...state,
          SecurityFeature: {
            "state": !state.SecurityFeature.state
          }
        }
        }

        return state





      case "SecurityFeature":
        return {
          ...state,
          SecurityFeature: {
            "state": !state.SecurityFeature.state
          }
        }

      default:
        return state

        break;
    }
  }





  const initialState = {
    "Search": {
      state: false,
      component: <UserSearched />

    },

    "Mute": {
      state: false,
      Mutenetworkresult: {
        purpose: 'mute',
        ownerid: 123,
        chatid: 511,
        cleartype: ''
      }
    },

    "clearhistroy": {
      state: false,
      Chatnetworkresult: {
        purpose: 'clearhistroy',
        ownerid: 123,
        chatid: 511,
        cleartype: ''
      }
    },

    "AiPowered": {
      state: false,
      Components: {

        page: {

          maincomponent: (

            <AiPoweredMainChat />

          )
        }




      }

    },

    "SecurityFeature": {
      state: false,
       Components: {

        page: {

          maincomponent: (

            <SecurityFeatureMainChat />

          )
        }




      }

    },

    "Block": {
      state: false
    }

  };


  let [state, dispatch] = useReducer(reducer, initialState);

  const [showInfo, setShowInfo] = useState(false);





  const [x, setx] = useState('')


  function fetchmedianame(e) {

    setcurrentmedia(e.target.getAttribute('class'))
    console.log(e.target.getAttribute('class'));


  }


  let obj = {
    page: "SecurityFeatureMainChatt_page1",
    functiontype: "back",
  };
  function backmenu(obj) {

    if (obj.functiontype == 'back' && obj.page=="AiPoweredMainChat_page1") {
      settoggleellipsis(true)
      dispatch({ type: obj.functiontype, key: obj.page })
    }

    if (obj.functiontype == 'back' && obj.page=="SecurityFeatureMainChatt_page1") {
      settoggleellipsis(true)
      dispatch({ type: obj.functiontype, key: obj.page })
    }

    if (obj.functiontype == 'askai') {

      setisaion(obj.state)


    }




  }

  function checkingselectedmedia(e) {


    if (pos.oldx - pos.newx > 0) {
      setcurrentmedia('fa-solid fa-microphone p-3 ')
    }
    if (pos.oldx - pos.newx < 0) {
      setcurrentmedia(' fa-solid fa-camera  p-3 ')
    }


  }



  useEffect(() => {

    setcurrentchat(chatinfo.state)


  }, [])


  return (
    <div className="text-white">

      <div className="header fixed top-0 left-0 w-full flex flex-row items-center justify-between px-4 py-3 bg-blue-900 shadow-md">

        {/* Back Button */}
        <button className="text-gray-300 hover:text-white transition">
          <Link to='/home'>
            <i className="fa-solid fa-left-long text-lg"></i>
          </Link>
        </button>

        {/* User Info */}
        <div className="flex flex-row items-center gap-3">
          <img
            src={currentchat.profilePic}
            alt="profile"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          <h3 className="font-semibold text-lg">{currentchat.name}</h3>
        </div>


        {/* Actions */}
        <div className="flex flex-row items-center gap-8">
          <button className="hover:text-green-400 transition">
            <i className="fa-solid fa-phone text-lg"></i>
          </button>
          <button className="hover:text-blue-400 transition">
            <i className="fa-solid fa-video text-lg"></i>
          </button>

          <button className="hover:text-gray-400 transition">
            <i className="fa-solid fa-ellipsis-vertical text-lg"
              onClick={() => settoggleellipsis(!toggleellipsis)}>

            </i>
          </button>




        </div>



        {



          !state.AiPowered.state && !state.SecurityFeature.state && toggleellipsis ?
            (
              <div className={`menuoption w-[180px] h-56 bg-black absolute top-16 right-0 rounded-b-xl border border-white ${toggleellipsis ? "flex flex-col gap-1 items-center justify-center Z-3" : "hidden"}`}
                onClick={(e) => {
                  let key = e.target.getAttribute('data-name');
                  dispatch({ type: key });
                }}
              >

                <div data-name='Search' className="option w-full h-8 bg-red-500 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg">
                  <i data-name='Search' className="fa-solid fa-magnifying-glass text-center"></i>
                  <h1 data-name='Search' className="text-white">Search</h1>
                </div>

                <div data-name='clearhistroy' className="option w-full h-8 bg-red-500 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg">
                  <i data-name='clearhistroy' className="fa-solid fa-trash text-center"></i>
                  <h1 data-name='clearhistroy' className="text-white">Clear History</h1>
                </div>

                <div data-name='Mute' className="option w-full h-8 bg-red-500 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg">
                  <i data-name='Mute' className="fa-solid fa-volume-xmark text-center"></i>
                  <h1 data-name='Mute' className="text-white">Mute</h1>
                </div>

                <div data-name='AiPowered' className="option w-full h-8 bg-red-500 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg">
                  <i data-name='AiPowered' className="fa-solid fa-brain text-center"></i>
                  <h1 data-name='AiPowered' className="aitext text-white relative">
                    <span className="gradient-text">Ai Powered</span>
                    <sup>
                      <i className="fa-solid fa-star text-yellow-400 text-[0.7em] absolute top-[2px] "></i>
                    </sup>
                  </h1>

                </div>

                <div data-name='SecurityFeature' className="option w-full h-8 bg-white-100 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg">
                  <i data-name='SecurityFeature' className="fa-solid fa-shield-halved text-center"></i>
                  <h1 data-name='SecurityFeature' className="text-white">Security Feature</h1>

                </div>

                <div data-name='Block' className="option w-full h-8 bg-red-500 grid grid-cols-[40px_auto] items-center px-2 rounded-b-lg"
                  onClick={() => {
                    blocknoti.current.style.display = 'flex'
                    blocknoti.current.style.transition = "all 0.4s 0s linear";


                    setTimeout(() => {

                      blocknoti.current.style.left = "5%";

                    }, 200);

                    setTimeout(() => {
                      blocknoti.current.style.display = 'none'

                    }, 1900);

                    setTimeout(() => {

                      blocknoti.current.style.left = "-100%";

                    }, 2300);




                  }}

                >
                  <i class="fa-solid fa-ban text-center"></i>
                  <h1 data-name='Block' className="text-white">Block</h1>
                </div>

              </div>

            ) : (
              <>

              </>
            )
        }

        {

          state.AiPowered.state ? (

            <AiPoweredMainChat handleBack={backmenu} />



          )
            :
            (

              <></>

            )


            


        }

        {
          state.SecurityFeature.state?(
            <SecurityFeatureMainChat handleBack={backmenu}/>
          ):(
            <>
            </>
          )
        }

      </div>

      {



        state.clearhistroy.state ?
          (
            <div className='clearhistroyNoti border border-white fixed 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-2/3 h-35 text-white p-2 flex flex-col items-center justify-center gap-3 rounded-lg'>
              <div className='flex items-center justify-center gap-3'>
                <input type="checkbox" id="clear" />
                <h2>Also Clear for {currentchat.name}</h2>
              </div>

              <input
                type="button"
                value="Clear"
                className='p-1 rounded-lg bg-white text-black font-bold ml-5'
              />
            </div>
          ) :

          <>
          </>


      }


      <div ref={blocknoti} className={`blockyNoti  absolute w-45 h-20 top-25 -left-[100%] text-white p-2 hidden items-center justify-center gap-3 flex-col rounded-lg ${state.Block.state ? "border-1 border-red-500" : "border-1 border-green-500"} `} >
        <div className='flex items-center justify-center gap-3 flex-row'>
          <h2>{currentchat.name} {state.Block.state ? "Blocked" : "Unblock"}</h2>
        </div>
      </div>


      {


        state.Search.state ?

          (
            <div className='absolute right-1/7 top-6'>
              <UserSearched />

            </div>
          )
          :
          (
            <div className='absolute nothingwork'></div>
          )

      }


      {


        <div className={`aichatbox absolute right-0 top-1/3 ${isaion ? "block" : "hidden"}`}>

          <div>

            {/* Pink Toggle Button */}
            <div className="absolute w-10 h-10 rounded-l-lg bg-pink-500 flex items-center justify-center right-0 cursor-pointer z-2"
              onClick={() => setShowInfo((prev) => !prev)}
            >
              <i className="fa-solid fa-angles-left text-white text-lg"></i>
            </div>



            {showInfo && (
              <div className="text-black absolute right-12 top-0 bg-white p-4 rounded-lg shadow-lg w-64 flex justify-center items-center flex-col">
                <h1 className="text-black text-xl font-bold mb-5">Ask Ai</h1>
               
                <div className="w-full flex flex-row items-center justify-center gap-2">

                  <input
                    type="text"
                    placeholder="Enter text"
                    className="border border-black px-2 py-1 w-full  rounded mb-5"
                  />

                  <i class="fa-solid fa-clone text-lg pb-5"></i>

                </div>




                {/* Button container */}
                <div className="w-full flex justify-center gap-3">
                  <button className="bg-blue-500 text-white h-10 px-3 py-1 rounded w-1/3">
                    Submit
                  </button>
                  <button className="bg-red-500 text-white h-10 px-3 py-1 rounded w-1/3">
                    Clear
                  </button>
                </div>
              </div>

            )}

          </div>


        </div>



      }



      {/* Footer */}
      <div className="fixed bottom-0 w-full h-12 border-t border-blue-700 bg-blue-900 grid grid-cols-[30px_1fr_30px] items-center px-4 gap-5">

        <div>
        <i className="fa-solid fa-link flex items-center justify-center relative"> 
        <input type="file" value="" className='absolute left-0 w-10'/>

        </i>
        </div>
        

        <div className='h-[80%] relative flex items-center justify-center'>
          <input
            type="text"
            className="border-1 border-white w-full h-full rounded-lg px-2 bg-transparent text-white"
          />
          <i
            className={`${currentmedia} absolute right-0  p-5`}
            onTouchStart={(e) => {

              settogglmedia(!togglmedia);

              setpos(prev => ({ ...prev, oldx: e.touches[0].clientX }))

            }}

            onTouchMove={(e) => {

              setpos(prev => ({ ...prev, newx: e.touches[0].clientX }))
              checkingselectedmedia();

            }

            }


            onTouchEnd={() => {
              settogglmedia(false);

            }}




          >

            {

              togglmedia ? (

                <div
                  className="w-20 h-12 bg-blue-700 absolute bottom-13 right-2 rounded-t-lg flex items-center justify-center gap-0"
                  onClick={(e) => fetchmedianame(e)}
                >
                  <i className="fa-solid fa-microphone p-3 "></i>
                  <i className="fa-solid fa-camera  p-3 "></i>
                </div>


              ) : <div className='absolute'></div>


            }
          </i>


        </div>

        <SendIcon />
      </div>

    </div>

  )
}

export default Chat
