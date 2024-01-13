// import React from 'react'

function Skill_Card({heading,logo}) {
    return (
    <>
        <div className="flex flex-col  items-center bg-[#051923] md:w-28 w-20 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src={logo} className='md:w-14 w-8' />
            <h1 className=" mt-2 text-white text-sm md:text-lg">{heading}</h1>
        </div>
    </>
    )
}

export default Skill_Card