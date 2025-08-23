import {useState,React} from 'react'

const SecurityFeatureMainChat = ({handleBack}) => {
  const [autoDeleteHours, setAutoDeleteHours] = useState(24);
  const [forwarding, setForwarding] = useState(false);

  let obj = {
    page: "SecurityFeatureMainChatt_page1",
    functiontype: "back",
  };


  // Reusable toggle
  const ToggleSwitch = ({ isOn, setIsOn }) => (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`ml-auto relative flex items-center w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-green-500 border-green-500" : "bg-gray-400 border-gray-400"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white absolute transition-all duration-300 ${
          isOn ? "translate-x-6" : "translate-x-1"
        }`}
      ></div>
    </div>
  );

  return (
    <div className="menuoption w-[220px] h-auto py-2 bg-black absolute top-16 right-0 rounded-b-xl border border-white flex flex-col gap-2 items-center justify-center z-30 ">
      {/* Auto Delete */}


       <div data-name="Search" className=" w-full h-7 bg-black flex items-center px-2 rounded-b-lg pl-4" onClick={() => {
        handleBack(obj)

      }}>
        <i class="fa-solid fa-angle-left"></i>
        <h1 className='ml-[5px]'>Back</h1>

      </div>

      
      <div className="option w-full h-10 bg-red-500 flex items-center px-3 rounded-b-lg">
        <i class="fa-solid fa-trash"></i>
        <h1 className="text-white ml-[5px]">Auto Clear</h1>

        {/* Input for hours (min 24) */}
        <input
          type="number"
          min={24}
          value={autoDeleteHours}
          onChange={(e) => setAutoDeleteHours(e.target.value)}
          className="ml-auto w-16 h-7 text-white font-bold rounded px-1 text-sm"
        />
        <span className="ml-1 text-white text-sm">hrs</span>
      </div>

      {/* Forwarding */}
      <div className="option w-full h-10 bg-red-500 flex items-center px-3 rounded-b-lg">
        <i className="fa-regular fa-lightbulb"></i>
        <h1 className="text-white ml-[5px]">Forward</h1>
        <ToggleSwitch isOn={forwarding} setIsOn={setForwarding} />
      </div>
    </div>
  );
}

export default SecurityFeatureMainChat
