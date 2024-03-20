import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({isSmallScreen,handlevalue,icon,name}) => {
  return (
    <div  className="Sidebar_Container_Sub  flex flex-col w-full cursor-pointer" onClick={handlevalue}>
                                <div className={`Sidebar_Container_Sub1 hover:text-lime-800 transition-transform duration-250 ease-in-out flex pl-10 pr-10 h-12 gap-[10px] items-center rounded-md ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    
                                <span
                                        className={`w-fit text-lg ${icon?'transform rotate-0':'transform rotate-[-90deg]'}`}> &#709;
                                        </span> 
                                    <div className="Sidebar_Container_Sub2 flex items-start mr-2 ">
                                        <div className="text-base w-fit">
                                         {name}
                                        </div>
                                    </div>
                              
                                </div>
                                {icon&&
                                    <div className='flex flex-col mr-5 ml-20 items-center'>
                                        <NavLink to="Sublink1" className='Sidebar_Container_Sublink ml-0 w-full hover:bg-lime-500/25 hover:text-lime-800'>Sublink1</NavLink>
                                        <NavLink to="Sublink2" className=' ml-0 w-full hover:bg-lime-500/25 hover:text-lime-800'>Sublink2</NavLink>
                                        <NavLink to="Sublink3" className=' ml-0 w-full hover:bg-lime-500/25 hover:text-lime-800'>Sublink3</NavLink>
                                    </div>
                                }
                             
                            </div>

  )
}

export default SidebarLink