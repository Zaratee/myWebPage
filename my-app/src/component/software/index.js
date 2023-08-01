import React, { useEffect, useState } from 'react'
import { allProjects, allTechno } from '../../data/project-data'
import Project from '../project'

const Software = ({ techDashboardSelected = null }) => {
    const [techSelected, setTechSelected] = useState(null)
    const filterProjects = (projectName) => {
        setTechSelected(projectName)
    }
    useEffect(() => {
        techDashboardSelected != null && techSelected == null && setTechSelected(techDashboardSelected)
    })
    return (
        <div className='h-full w-full flex p-8 '>
            <div className='w-[80%] h-[100%] p-4 flex flex-col gap-2 overflow-auto'>
                {
                    techSelected == null ?
                        allProjects.map((project) => {
                            return (
                                <>
                                    <Project project={project} />
                                </>
                            )
                        })
                        : allProjects.filter(project => project.techno.name === techSelected).sort(() => Math.random() - 0.5).map((project) => {
                            return (
                                <>
                                    <Project project={project} />
                                </>
                            )
                        })

                }
            </div>
            <div className='w-[18%] h-full flex items-center justify-center'>
                <div className='flex flex-col bg-white rounded-2xl shadow-lg '>
                    {
                        allTechno.map((techno) => {
                            return (
                                <div onClick={() => filterProjects(techno.name)} className={`h-[25%] cursor-pointer ${techSelected == techno.name && 'bg-slate-300 first:hover:rounded-t-2xl last:hover:rounded-b-2xl'} first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-300 w-fit p-3 border-b-[2px] border-slate-300 last:border-b-0 flex justify-center items-center`} >
                                    <img src={techno?.logo} width={35} height={35} className={` ${techno?.name == 'React' && ' bg-slate-700 rounded-md '}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Software