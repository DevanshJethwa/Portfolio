
function Home() {
    return (
        <>
            <div className="flex items-center px-4 py-5  bg-sky-100 h-screen  justify-around "  id="home">
            <div className="md:w-[40vw] w-full" >

                <h1 className="lg:text-3xl text-2xl ">Hello,I&lsquo;m <span className="font-bold text-[#051923] lg:text-4xl text-3xl">Devansh Jethwa.</span></h1>
                <h1 className="md:text-3xl text-xl">Web Developer</h1>

            <div className="flex ">

                <h1 className="mt-10 md:text-lg text-gray-600 font-medium text-justify">My passion for web development shines through in my portfolio.It's a showcase of self-driven projects, highliting my commitment to mastering this craft through continuous learning.</h1>

            </div>

                <button className="mt-10 md:text-[18px] text-[12px] bg-[#051923] border border-[#051923] rounded px-4 py-2 font-bold text-white hover:bg-sky-100 hover:text-[#051923] transition-all duration-300">Download CV </button>
                

                <a href="#contact"><button className="mt-10 md:mx-4 ms-2 md:text-[18px] text-[12px]  border border-[#051923] text-[#051923] rounded px-4 py-2 font-bold hover:bg-[#051923] hover:text-white transition-colors duration-300 " >Contact Me </button></a>
                
            </div>

            <div className="pb-8 lg:w-96 w-72 md:flex hidden items-center " >
                <img src="bitmoji.png" className="" alt=""  />
            </div>
        </div>
        </>
    )
}

export default Home