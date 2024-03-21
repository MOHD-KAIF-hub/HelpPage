import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SidebarLink from './SidebarLink';
import { GrOverview } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { SiQwiklabs } from "react-icons/si";

const Sidebar = ({ isSidebarOpen, toggleSidebar, isSmallScreen }) => {
  const [Icon, setIcon] = useState(false);
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);
  // Setting dynamic width of sidebar
  const resize = useCallback(
    (mouseMoveEvent) => {
      const MIN_SIDEBAR_WIDTH=200;
      if (isResizing) {
        const newWidth =
        mouseMoveEvent.clientX -
        sidebarRef.current.getBoundingClientRect().left;
  
      if (newWidth >= MIN_SIDEBAR_WIDTH) {
        setSidebarWidth(newWidth);
      } else {
        setIsResizing(false); 
      }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  const handleIcon = () => {
    setIcon(!Icon);
    toggleSidebar();
  };




  return (
    <>
      {isSmallScreen &&
        (!Icon ?
          <button
            onClick={handleIcon}
            className="toggle_button md:hidden"
          >
            <FaBars className="text-gray-700" />
          </button> :
          <button
            onClick={handleIcon}
            className="toggle_button md:hidden"
          >
            <FaTimes className="text-gray-700" />
          </button>)
      }

      {(isSidebarOpen || !isSmallScreen) &&
        <div className={`flex min-w-fit bg-lime-500/25  h-screen overflow-y-auto ${!isSmallScreen ? 'border-r sticky top-0' : 'border-0 w-full'}`}>
          <div className="flex flex-col items-end mt-5" ref={sidebarRef} style={{ width: sidebarWidth }}>

            <SidebarLink isSmallScreen={isSmallScreen} name=" Overview" icon={<GrOverview />} />
            <SidebarLink isSmallScreen={isSmallScreen} name=" Contact" icon={<IoMdContact />} />
            <SidebarLink isSmallScreen={isSmallScreen} name="Books" icon={<MdLibraryBooks />} />
            <SidebarLink isSmallScreen={isSmallScreen} name="Labs" icon={<SiQwiklabs />} />
          </div>
          <div className="dragable border-r-[5px] max-h-screen sticky top-0" onMouseDown={startResizing} />
        </div>
      }
    </>
  );
};

export default Sidebar;
