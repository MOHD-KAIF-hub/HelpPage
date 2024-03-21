import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const SidebarLink = ({ isSmallScreen, name, icon }) => {
    const [isdropdownOpen, setisdropdownOpen] = useState(false);

    return (
        <div className="  flex flex-col w-full cursor-pointer" onClick={() => {
            setisdropdownOpen((prev) => (!prev))
        }}>
            <div className={` border-b-[1px]  border-lime-500/25 text-lime-900 transition-transform duration-250 ease-in-out flex pl-10 pr-10 h-12 gap-[10px] items-center  ${isSmallScreen ? 'border border-x-0  border-t-0' : 'border-0'}`}>
                <span
                    className={`w-fit text-lg `}> {icon}
                </span>

                <div className=" flex items-start min-w-[80px] mr-2 ">
                    <div className=" w-fit">
                        {name}
                    </div>
                </div>
                <span
                    className={`w-fit text-lg  transition-transform duration-500 ease-in-out ${isdropdownOpen ? 'transform rotate-[90deg]' : 'transform rotate-0'}`}

                > <MdKeyboardArrowRight />
                </span>

            </div>
            {isdropdownOpen &&
                <div className='flex flex-col justify-center w-full items-center' onClick={(e) => e.stopPropagation()}>
                    <span className='w-full text-lime-800 flex justify-center items-center'><NavLink to="Sublink1" className='  pl-20 py-1 left-4  w-full hover:bg-lime-500/25 hover:text-gray-800 focus:outline-none focus:bg-lime-500/25 focus:text-gray-800 '>Sublink1</NavLink></span>
                    <span className='w-full text-lime-800 flex justify-center items-center'><NavLink to="Sublink2" className='pl-20  py-1 left-4  w-full hover:bg-lime-500/25 hover:text-gray-800 focus:outline-none focus:bg-lime-500/25 focus:text-gray-800 '>Sublink2</NavLink></span>
                    <span className='w-full text-lime-800 flex justify-center items-center  '><NavLink to="Sublink3" className=' pl-20 py-1  left-4  w-full  hover:bg-lime-500/25 hover:text-gray-800 focus:outline-none focus:bg-lime-500/25 focus:text-gray-800 '>Sublink3</NavLink></span>
                </div>
            }


        </div>

    )
}

export default SidebarLink