import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useChatNavigate from './ChatNavigate'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const UserSearched = () => {
  let contact = useLocation()

  const navigateToChat = useChatNavigate();

  let [allcontact, setallcontact] = useState(contact.state.contacts)

  const [usertyped, setusertyped] = useState('');

  const [searched,setsearched] = useState([])

  function search() {
   if (usertyped.trim() === "") {
    setsearched([]); // show all contacts when input is empty
  } else {
    const results = allcontact.filter((item) =>
      item.name.toLowerCase().includes(usertyped.toLowerCase())
    );
    setsearched(results);
  }
}


  useEffect(() => {

    const debouncing = setTimeout(() => {

      


      search()

    }, 2000);


    return () => {
      clearTimeout(debouncing);


    }


  }, [usertyped])




 return (
  <div className="text-white flex flex-col items-center justify-center w-full">
    <input
      placeholder="Search"
      type="search"
      className="px-6 text-white border-1 h-10 border-white mt-5 w-full"
      value={usertyped}
      onChange={(e) => setusertyped(e.target.value)}
    />

    {searched.length > 0 && searched ? (
      searched.map((item, index) => (
        
        
        <div
          key={index}
          className="container flex items-center justify-center gap-20"
          onClick={() => navigateToChat(item)}
        >
          <div className="h-17 HomeChat w-full max-w-4xl border border-white flex items-center rounded-lg ml-[7%] mr-[5%] mt-5">
            <div className="picture pl-10 relative">
              <LazyLoadImage
                src={item.profilePic}
                alt={item.name}
                className="w-10 h-10 rounded-full border-2 border-black shadow"
              />
              <div className="status w-2 h-2 bg-red-500 rounded-full absolute bottom-0 left-16"></div>
            </div>
            <h2 className="text-white font-bold text-xl pl-10">{item.name}</h2>
          </div>
        </div>
      ))
    ) : (
      <div className="text-white text-lg font-semibold mt-5">Not found</div>
    )}
  </div>
)

}

export default UserSearched
