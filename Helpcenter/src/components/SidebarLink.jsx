import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarLink.css'
const SidebarLink = ({isSmallScreen,handlevalue,icon,name}) => {
  return (
    <div  className="Sidebar_Container_Sub" onClick={handlevalue}>
                                <div className={`Sidebar_Container_Sub1 ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    
                                <span
                                        className={`w-fit text-lg ${icon?'transform rotate-0':'transform rotate-[-90deg]'}`}> &#709;
                                        </span> 
                                    <div className="Sidebar_Container_Sub2">
                                        <div className="text-base w-fit">
                                         {name}
                                        </div>
                                    </div>
                              
                                </div>
                                {icon&&
                                    <div className='Sidebar_Container_Sublink'>
                                        <NavLink to="Sublink1" className='navlink'>Sublink1</NavLink>
                                        <NavLink to="Sublink2" className='navlink'>Sublink2</NavLink>
                                        <NavLink to="Sublink3" className='navlink'>Sublink3</NavLink>
                                    </div>
                                }
                             
                            </div>

  )
}

export default SidebarLink