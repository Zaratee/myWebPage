import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import reactLogo from '../../assets/react-logo.png'
import kotlinLogo from '../../assets/kotlin-logo.png'
import javaLogo from '../../assets/java-logo.png'
import vueLogo from '../../assets/vue-logo.png'
import htmlLogo from '../../assets/html-logo.png'
import androidLogo from '../../assets/androidLogo.png'

const Technologies = ({ onClickDashboard }) => {
    useEffect(() => {
        anime({
            targets: ".card",
            translateX: 1020,
            easing: 'easeOutElastic()'
        });
    })

    const srcImgTechnologies = [
        {
            name: "React",
            src: reactLogo
        },
        {
            name: "Vue",
            src: vueLogo
        },
        {
            name: "Android Studio",
            src: kotlinLogo
        },
        {
            name: "Android Studio",
            src: androidLogo
        },
        {
            name: "Android Studio",
            src: javaLogo
        },
        {
            name: "HTML",
            src: htmlLogo
        },

    ]

    return (
        <div className='h-full w-full flex justify-center items-center overflow-hidden '>
            <div className=' ml-[-2000px] card bg-white border-[#62BBC1] border-[4px] drop-shadow-[7px_6px_0_#000] w-[70%] h-[60%]'>
                <div className='flex flex-col p-3 gap-3 justify-center items-center  h-full'>
                    <div className='flex gap-7 justify-center '>
                        <div onClick={() => onClickDashboard("React")} className=' group hover:bg-slate-100 rounded-md hover:border hover:border-slate-300 p-4 cursor-pointer'>
                            <img src={reactLogo} className='w-[150px] h-[100px] hover:scale-[1.01] transition-all group-hover:drop-shadow-[2px_3px_0_#30332E] cursor-pointer ' />
                        </div>
                        <div onClick={() => onClickDashboard("Vue")} className=' group hover:bg-slate-100 rounded-md hover:border hover:border-slate-300 p-4 cursor-pointer'>
                            <img src={vueLogo} className='w-[100px] h-[100px] hover:scale-[1.01] transition-all group-hover:drop-shadow-[2px_3px_0_#30332E] cursor-pointer ' />
                        </div>
                    </div>
                    <div className='flex  justify-evenly  w-full'>
                        {
                            srcImgTechnologies.map((tech, index) => {
                                return (
                                    index > 1 &&
                                    <div onClick={() => onClickDashboard(tech.name)} className=' group hover:bg-slate-100 rounded-md hover:border hover:border-slate-300 p-4 cursor-pointer'>
                                        <img src={tech.src} className='w-[50px] h-[50px] hover:scale-[1.01] transition-all group-hover:drop-shadow-[2px_3px_0_#30332E]  ' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies