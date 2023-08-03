import React from 'react'
import Project from '../project'
import { portafolioInfo } from '../../data/project-data'

const MasInfo = () => {
    return (
        <div className='h-full w-full flex justify-center items-center overflow-hidden  '>
            <div className='  card bg-white border-[#62BBC1] border-[4px] drop-shadow-[7px_6px_0_#000] w-[70%]'>
                <Project project={portafolioInfo} />
            </div>
        </div>
    )
}

export default MasInfo