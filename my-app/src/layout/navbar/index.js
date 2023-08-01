import React from 'react'
import Software from '../../component/software'
import MasInfo from '../../component/mas-info'
import Ahora from '../../component/ahora'


const Navbar = ({ updateShowContact, onClickNavbar }) => {
    return (
        <div className='  w-full '>
            <div className="p-4 ">
                <div className="bg-white rounded-3xl w-full   flex shadow">
                    <div onClick={updateShowContact} className='w-[20%] rounded-l-3xl cursor-pointer group hover:bg-black p-2 hover:text-[#62BBC1] text-center border-r-2 border-black '>
                        <div className="  group-hover:drop-shadow-[1px_2px_0_#931621]  text-xl">
                            CONTACTO
                        </div>
                    </div>
                    <div onClick={() => onClickNavbar({ name: 'Software', component: <Software /> })} className='w-[20%] cursor-pointer  group hover:bg-black p-2 hover:text-[#62BBC1] text-center border-r-2 border-black '>
                        <div className="group-hover:drop-shadow-[1px_2px_0_#931621] text-xl">
                            SOFTWARE
                        </div>
                    </div>
                    <div onClick={() => onClickNavbar({ name: 'Info', component: <MasInfo /> })} className='w-[20%] cursor-pointer  group hover:bg-black p-2 hover:text-[#62BBC1] hover: text-center border-r-2 border-black '>
                        <div className="group-hover:drop-shadow-[1px_2px_0_#931621] text-xl">
                            MAS INFO
                        </div>
                    </div>
                    <div onClick={() => onClickNavbar({ name: 'AHORA', component: <Ahora /> })} className='w-[20%] cursor-pointer  group hover:bg-black p-2 hover:text-[#62BBC1] hover: text-center border-r-2 border-black '>
                        <div className="group-hover:drop-shadow-[1px_2px_0_#931621] text-xl">
                            AHORA
                        </div>
                    </div>
                    <div className='w-[20%] cursor-pointer rounded-r-3xl group hover:bg-black p-2 hover:text-[#62BBC1] hover: text-center '>
                        <div className="group-hover:drop-shadow-[1px_2px_0_#931621] text-xl">
                            PALETTA
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar