import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import GithubIcon from '../../icons/github';
import LinkedinIcon from '../../icons/linkedin';

const PersonalInfo = ({ showContactInfo }) => {



    return (
        <div className='w-full h-full flex justify-center'>
            <div className=" text-yo-color-4 drop-shadow-[4px_6px_0px_rgba(0,0,0,1)] absolute text-9xl mt-14 z-30">Yo</div>
            <div className={` transition-all h-full ${showContactInfo && 'bg-yo-color-5 drop-shadow-[1px_1px_30px_rgba(0,0,0,1)] duration-300'}  w-[20vw] `}>
                <div className=' relative w-full h-full flex flex-col gap-4 items-center justify-center '>
                    <div className={`transition-all border-2 border-yo-color-1 duration-200 rounded-lg font-sans font-bold text-center p-3 w-[70%] ${showContactInfo ? 'bg-yo-color-4 text-yo-color-2 ' : 'text-yo-color-1 select-none'}`}>
                        Carlos Zárate
                    </div>
                    <div className={`transition-all duration-200 border-2 border-yo-color-1 rounded-lg font-sans font-bold text-center p-3 w-[70%] ${showContactInfo ? 'bg-yo-color-4 text-yo-color-2 ' : 'text-yo-color-1 select-none'}`}>
                        +52 3319431394
                    </div>
                    <div className={` overflow-auto text-center transition-all duration-200 border-2 border-yo-color-1 rounded-lg font-sans font-bold  p-3 w-[70%] ${showContactInfo ? 'bg-yo-color-4 text-yo-color-2 ' : 'text-yo-color-1 select-none overflow-hidden'}`}>
                        zarate251098@gmail.com
                    </div>
                    <div className={`absolute bottom-3 flex  gap-3`}>
                        <a href='https://github.com/Zaratee' className='drop-shadow-[2px_2px_0px_rgb(0,0,0)] hover:scale-110 transition-all cursor-pointer'>
                            <GithubIcon color={'white'} size={50} />
                        </a>
                        <a href='https://www.linkedin.com/in/carlos-zarate-aa7b3b20a/' className='drop-shadow-[2px_2px_0px_rgb(0,0,0)] hover:scale-110 transition-all cursor-pointer'>
                            <LinkedinIcon color={'white'} size={50} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo