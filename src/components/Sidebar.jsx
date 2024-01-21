import React from 'react'

function Sidebar({isopen,setOpen}) {
    return (
        <>
            <div className={`bg-white w-full fixed z-10 top-0shadow-black ${isopen ? "translate-y-0" : "-translate-y-full"} transition-all duration-500 `}>
                
            <div className='flex flex-col gap-2  border-t-stone-950 border-t  font-semibold mt-12 px-3 py-2'>
                <a href="#home" className=' '>
                    <h1 className="hover:text-blue-700 border-b-2 border-white hover:border-b-2  hover:border-blue-500 transition-all duration-300 ">
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
            </div>
        </>
    )
}

export default Sidebar