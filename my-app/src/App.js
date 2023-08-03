import React, { useEffect, useState } from 'react'
import Navbar from './layout/navbar';
import PersonalInfo from './layout/personal-info';
import Technologies from './component/technologies/index';
import Software from './component/software';
import Alert from './component/alert';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [navbarItemSelected, setNavbarItemSelected] = useState(null)
  const [dashboardItemSelected, setDashboardItemSelected] = useState(null)
  const [alertInfo, setAlertInfo] = useState(null)

  const handlerOnClickNavbar = (data) => {
    setNavbarItemSelected(data)
    setDashboardItemSelected(null)
  }

  const handlerOnClickDashBoard = (data) => {
    setDashboardItemSelected(data)
  }

  const onCreateAlertInfo = (type, description) => {
    setAlertInfo({
      type: type,
      description: description
    })
  }

  return (
    <div className='  w-[100vw] h-[100vh] flex bg-[#931621] relative'>
      <div className='font-sans font-light text-[10px] text-white absolute right-1 bottom-0'>v0.9.0</div>
      <div className="w-[20%] h-full ">
        <PersonalInfo showContactInfo={showContactInfo} />
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="p-4 ">
          <Navbar onSelectShowPalette={onCreateAlertInfo} onClickNavbar={handlerOnClickNavbar} updateShowContact={() => { setShowContactInfo(!showContactInfo) }} hideContact={() => { setShowContactInfo(false) }} />
        </div>
        <div className='w-full h-[70%]  '>
          {navbarItemSelected === null && dashboardItemSelected === null ? <Technologies onClickDashboard={handlerOnClickDashBoard} /> : navbarItemSelected?.component}
          {dashboardItemSelected !== null && <Software techDashboardSelected={dashboardItemSelected} />}
        </div>
      </div>
      {
        alertInfo &&
        <div className='w-[80%] ml-[20%] h-[100px] absolute bottom-0 p-5 flex items-center justify-center'>
          <Alert onClose={() => setAlertInfo(null)} info={alertInfo} />
        </div>
      }
    </div>
  );
}

export default App;
