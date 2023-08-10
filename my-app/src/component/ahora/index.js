import React from 'react'
import eriImg from '../../assets/eri.jpg'
const Ahora = () => {
    return (
        <div className='h-full w-full flex justify-center items-center   '>
            <div className=' card bg-white border-[#62BBC1] border-[4px] drop-shadow-[8px_8px_0_#000] w-[70%] p-4 flex items-center justify-center'>
                <div className='w-[50%] h-fit bg-slate-100 border border-slate-300 rounded-md p-3 flex flex-col items-start'>
                    <div className='w-full font-sans text-center italic font-bold text-2xl mb-2'> Hoy</div>
                    <div className='font-sans text-base'>
                        <div className='flex gap-2 items-center justify-center'>
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Acariciando a Eris
                        </div>
                    </div>
                    <div className='font-sans text-base'>
                        <div className='flex gap-2 items-center justify-center'>
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Escuchando propuestas laborales
                        </div>
                    </div>
                    <div className='font-sans text-base'>
                        <div className='flex gap-2 items-center justify-center'>
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Aprendiendo Vue
                        </div>
                    </div>

                    <div className='font-sans text-base'>
                        <div className='flex gap-2 items-center justify-center'>
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Mejorando mi portafolio
                        </div>
                    </div>
                    <div className='font-sans text-base'>
                        <div className='flex gap-2 items-center justify-center'>
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Aprendiendo nuevas tecnologies
                        </div>
                    </div>
                </div>
                <div className='w-[50%] p-14  overflow-hidden rounded-xl flex flex-col'>
                    <img src={eriImg} className=' object-fill h-full rounded-xl border-2  border-orange-600 ' />
                    <div className='font-sans font-bold text-orange-700 italic drop-shadow-[1px_1px_0_#000] text-center'>~ Eris ~</div>
                </div>
            </div>
        </div>
    )
}

export default Ahora