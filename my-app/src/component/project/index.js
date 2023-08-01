import React, { useState } from 'react'

const Project = ({ project }) => {
    const [showLabel, setShowLabel] = useState(false)
    const [showLabelTechno, setShowLabelTechno] = useState(false)
    return (
        <div className='bg-yo-color-4 rounded p-4 relative flex flex-col  w-full'>
            <div className='flex'>
                <div onMouseEnter={() => setShowLabelTechno(true)} onMouseLeave={() => setShowLabelTechno(false)} className={`absolute right-1 top-1 ${project?.techno?.name === 'React' && 'bg-yo-color-3'}  rounded`}>
                    <img src={project?.techno?.logo} width={30} height={30} />
                    {showLabelTechno && <div className='absolute left-[-150%] border border-slate-300 top-0 font-sans bg-slate-100 text-xs p-1 shadow-xl z-20 text-center'>{project?.techno?.name}</div>}
                </div>
                <div className='flex flex-col w-[80%] '>
                    <div className='font-sans font-bold text-3xl'>
                        {project?.name}
                    </div>
                    <div className='font-sans font-light text-sm'>
                        {project?.type}
                    </div>
                    <div className='font-sans font-light text-xl mt-1'>
                        {project?.description}
                    </div>
                    {
                        project?.package &&
                        project?.package.map((pack) => {
                            return (
                                <div className=' font-sans font-bold flex text-sm'>
                                    • <div className='ml-1'>{pack}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col w-[20%] gap-1 items-center justify-center'>
                    {
                        project?.lenguages &&
                        project?.lenguages.map((lenguages) => {
                            return (
                                <div className='relative'>
                                    <img src={lenguages?.logo} width={25} height={25} onMouseEnter={() => setShowLabel(true)} onMouseLeave={() => setShowLabel(false)} />
                                    {showLabel && <div className='absolute left-[-300%] border border-slate-300 top-0 font-sans bg-slate-100 text-xs p-1 shadow-xl'>{lenguages?.name}</div>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                project.gitUrl &&
                <div className='w-full flex justify-center  mt-3'>
                    <a href={project.gitUrl} className='w-[70%] p-1 text-sm hover:bg-slate-300 text-center rounded-lg font-sans text-blue-700 cursor-pointer '>
                        Ver proyecto
                    </a>
                </div>
            }
        </div>
    )
}

export default Project