
import React, {  useState,useRef } from 'react';
import './sidebar.css';
import { FaBars,FaTimes } from 'react-icons/fa';
import SidebarLink from './SidebarLink';



const Sidebar = ({ isSidebarOpen, toggleSidebar,isSmallScreen}) => {

      const [Icon,setIcon]=useState(false);
      const [quickstarts,setquickstarts]=useState(false);
      const [tutorials,settutorials]=useState(false);
      const [samples,setsamples]=useState(false);
      const [dashboard,setdashboard]=useState(false);
      const [concept,setconcept]=useState(false);
      const [languages,setlanguages]=useState(false);
      const [refrences,setrefrences]=useState(false);
      const [about,setabout]=useState(false);
      const [contact,setcontact]=useState(false);

      const sidebarRef = useRef(null);
      const [isResizing, setIsResizing] = useState(false);
      const [sidebarWidth, setSidebarWidth] = useState(300);
    
      const startResizing = React.useCallback((mouseDownEvent) => {
        setIsResizing(true);
      }, []);
    
      const stopResizing = React.useCallback(() => {
        setIsResizing(false);
      }, []);
    
      const resize = React.useCallback(
        (mouseMoveEvent) => {
          if (isResizing) {
            setSidebarWidth(
              mouseMoveEvent.clientX -
                sidebarRef.current.getBoundingClientRect().left
            );
          }
        },
        [isResizing]
      );
    
      React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
          window.removeEventListener("mousemove", resize);
          window.removeEventListener("mouseup", stopResizing);
        };
      }, [resize, stopResizing]);

const handleIcon=()=>{
    setIcon(!Icon);
    toggleSidebar();
}
const handledashboard=()=>setdashboard(!dashboard);
const handlequickstarts=()=>setquickstarts(!quickstarts);
const handletutorials=()=>settutorials(!tutorials);
const handlesamples=()=>setsamples(!samples);
const handleconcept=()=>setconcept(!concept);
const handlelanguages=()=>setlanguages(!languages);
const handlerefrences=()=>setrefrences(!refrences);
const handleabout=()=>setabout(!about);
const handlecontact=()=>setcontact(!contact);




    return (
        <>
          
          {
                isSmallScreen &&
              
                           (!Icon?<button
                                onClick={handleIcon}
                                className="toggle_button md:hidden"
                            >
                                <FaBars className="text-gray-700" />
                            </button>: <button
                                onClick={handleIcon}
                                className="toggle_button md:hidden"
                            >
                                <FaTimes className="text-gray-700" />
                            </button>  )
            }
            
         
        {
                (isSidebarOpen||!isSmallScreen) &&

                <div className={`Sidebar_container flex max-h-[400px]  overflow-y-auto ${!isSmallScreen ? 'border-r sticky top-0 ' : 'border-0 w-full'} `} >
                  
                    <div className="flex flex-col  items-end mt-5 " ref={sidebarRef} style={{ width: sidebarWidth }} onMouseDown={(e) => e.preventDefault()} >
                     
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handledashboard}  icon={dashboard} name=" Overview"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handlequickstarts}  icon={quickstarts} name=" QuickStarts"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handletutorials}  icon={tutorials} name="Tutorials"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handlesamples}  icon={samples} name="Samples"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handleconcept}  icon={concept} name="Concept"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handlelanguages}  icon={languages} name="Languages"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handlerefrences}  icon={refrences} name="Refrences"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handleabout}  icon={about} name="About"/>
                            <SidebarLink isSmallScreen={isSmallScreen} handlevalue={handlecontact}  icon={contact} name="Contact"/>
                    
                    </div>
                    <div className="border-r-[5px] h-screen sticky top-0" onMouseDown={startResizing} />
                
                </div>

        }
   

        </>











    );
};

export default Sidebar;


