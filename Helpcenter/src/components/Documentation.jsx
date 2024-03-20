
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';


const  Documentation=()=> {

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


    <div className="bg-white flex flex-col w-full ">

      {/* <Navbar /> */}

      <div className={` flex gap-8 items-start w-full   ${!isSmallScreen?'flex-row overflow-y-auto h-screen':'flex-col overflow-y-hidden'}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen}/>

        </div>

    </div>


  );
}

export default Documentation;



