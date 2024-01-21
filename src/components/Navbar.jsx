import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [showSidebar,showSidebarFunc] = useState(false)

    

    return (
    <>
        <div className={`flex items-center md:px-10 fixed z-20 h-12  bg-white w-full grow top-0 justify-between ${showSidebar ? "shadow-none" : "shadow-lg"}`}>
            <img src="logo2.jpg" className='w-16' />
            
            <div className='md:flex hidden gap-10 '>
                <a href="#home" className=' '>
                    <h1 className="hover:text-blue-700 border-b-2 border-white hover:border-b-2 hover:border-blue-500 transition-all duration-300 ">
                        HOME
                    </h1>
                </a>

                <a href="#about">
                    <h1 className='hover:text-blue-700  border-b-2 border-white hover:border-b-2 hover:border-blue-500 transition-all duration-300 '>ABOUT</h1>
                </a>

                <a href="#skill">
                    <h1 className='hover:text-blue-700 border-b-2 border-white hover:border-b-2 hover:border-blue-500 transition-all duration-300 '>SKILLS</h1>
                </a>

                <a href="#project">
                    <h1 className='hover:text-blue-700 border-b-2 border-white hover:border-b-2 hover:border-blue-500 transition-all duration-300 '>PROJECTS</h1>
                </a>
                
                <a href="#contact">
                    <h1 className='hover:text-blue-700 border-b-2 border-white hover:border-b-2 hover:border-blue-500 transition-all duration-300 '>CONTACT</h1>
                </a>
            </div>
            <div className="flex items-center">

            {!showSidebar?<IoMenu size={30}  className="md:hidden block me-3 cursor-pointer " onClick={()=>{showSidebarFunc(!showSidebar)}} />
            :
            <IoClose size={30} className="md:hidden block me-3 cursor-pointer " onClick={()=>{showSidebarFunc(!showSidebar)}}  />}
            </div>
        </div>

        <Sidebar isopen={showSidebar} setOpen={showSidebarFunc}></Sidebar>
        
        
        
    </>
    )
}

export default Navbar