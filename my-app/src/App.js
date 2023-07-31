import React, { useEffect, useState } from 'react'
import Technologies from './component/Technologies';
import Navbar from './layout/navbar';
import PersonalInfo from './layout/personal-info';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  return (
    <div className='  w-[100vw] h-[100vh] flex bg-[#931621]'>
      <div className="w-[20%] h-full ">
        <PersonalInfo showContactInfo={showContactInfo} />
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="p-4 ">
          <Navbar updateShowContact={() => { setShowContactInfo(!showContactInfo) }} hideContact={() => { setShowContactInfo(false) }} />
        </div>
        <div className='w-full h-full '>
          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default App;
