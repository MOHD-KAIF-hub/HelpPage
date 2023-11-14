
import './App.css';
import Sidebar from './components/Sidebar';
// import AppRoutes from './AppRoutes';
import { useState,useEffect } from 'react';
import Middle from './components/Middle'


function App() {

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

       

       <div className="flex flex-col justify-between mt-10 gap-8 w-full md:w-3/6 max-w-[790px] h-full">

<Middle/>

</div>
        </div>

    </div>


  );
}

export default App;



