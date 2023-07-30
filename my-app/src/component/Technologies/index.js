import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

const Technologies = () => {
    useEffect(() => {
        anime({
            targets: ".card",
            translateX: 1020,
            easing: 'easeOutBounce(10)'
        });

    })

    return (
        <div className='h-full w-full flex justify-center items-center overflow-hidden '>
            <div className='ml-[-2000px] card bg-white border-[#62BBC1] border-[4px] drop-shadow-[7px_6px_0_#000] w-[70%] h-[60%]'>
            </div>
        </div>
    )
}

export default Technologies