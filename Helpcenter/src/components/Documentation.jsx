import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Sublink1 from '../documentationPages/Sublink1';
import Sublink2 from '../documentationPages/Sublink2';
import Sublink3 from '../documentationPages/Sublink3';
import Header from '../Header';
const Documentation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white  flex flex-col w-full font-medium text-sm  text-gray-600" >
      <Header/>
      <div className={` flex gap-8 mt-20  overflow-y-auto  items-start w-full ${!isSmallScreen ? 'flex-row  h-screen fixed' : 'flex-col '}`}  >
    
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen} />
        <div className=''>
          <Routes>
            <Route path="/Sublink1" element={<Sublink1 />} />
            <Route path="/Sublink2" element={<Sublink2 />} />
            <Route path="/Sublink3" element={<Sublink3 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
