import React, { useEffect, useState } from 'react'
import Navbar from './layout/navbar';
import PersonalInfo from './layout/personal-info';
import Technologies from './component/technologies/index';
import Software from './component/software';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [navbarItemSelected, setNavbarItemSelected] = useState(null)
  const [dashboardItemSelected, setDashboardItemSelected] = useState(null)

  const handlerOnClickNavbar = (data) => {
    setNavbarItemSelected(data)
    setDashboardItemSelected(null)
  }

  const handlerOnClickDashBoard = (data) => {
    setDashboardItemSelected(data)
  }
  return (
    <div className='  w-[100vw] h-[100vh] flex bg-[#931621]'>
      <div className="w-[20%] h-full ">
        <PersonalInfo showContactInfo={showContactInfo} />
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="p-4 ">
          <Navbar onClickNavbar={handlerOnClickNavbar} updateShowContact={() => { setShowContactInfo(!showContactInfo) }} hideContact={() => { setShowContactInfo(false) }} />
        </div>
        <div className='w-full h-[70%]  '>
          {navbarItemSelected === null && dashboardItemSelected === null ? <Technologies onClickDashboard={handlerOnClickDashBoard} /> : navbarItemSelected?.component}
          {dashboardItemSelected !== null && <Software techDashboardSelected={dashboardItemSelected} />}
        </div>
      </div>
    </div>
  );
}

export default App;
