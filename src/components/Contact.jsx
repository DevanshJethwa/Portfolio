import React from 'react'

function Contact() {
  return (
    <>
        <div className=' bg-sky-100 pt-10 pb-10 ' id='contact'>
            <div className='flex flex-col items-center justify-center '>
          <h1 className="text-center md:text-4xl text-3xl font-bold">Contact me :-</h1>
          <div className='flex md:gap-10 gap-6 text-3xl my-7 '>
              
              <a href="https://github.com/Devansh1323"><i className="bi bi-github hover:text-blue-700"></i> </a>

              <a href="https://www.facebook.com/devansh.jethwa"><i className="bi bi-facebook hover:text-blue-700"></i></a>

              <a href="https://twitter.com/DevanshJethwa"><i className="bi bi-twitter-x hover:text-blue-700"></i></a>

              <a href="https://www.instagram.com/devansh__312/"><i className="bi bi-instagram hover:text-blue-700"></i></a>

              <a href="https://www.linkedin.com/in/devansh-jethwa-400140276/"><i className="bi bi-linkedin hover:text-blue-700"></i></a>


          </div>
              <h1 className='text-xs font-semibold'>Created By Devansh Jethwa | ©2023 All Right Reserved</h1>
          {/* <div className='flex justify-end w-full text-5xl me-5'>

              <a href="#home"><i className="bi bi-arrow-up-circle-fill animate-bounce  cursor-pointer text-[#051923] hover:text-[#345363] "></i></a>
          </div> */}
          
            </div>
        </div>
    </>
  )
}

export default Contact