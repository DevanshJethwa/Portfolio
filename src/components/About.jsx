
function About() {
    return (
        <>

            <div  className="bg-[#051923] text-white md:py-[90px] py-[40px]" id="about">
                    <h1 className="text-center md:text-4xl text-3xl underline">About Me </h1>

                    <div className="flex lg:flex-row flex-col items-center justify-around mx-4" >

                        <div className="pb-8 md:w-96 w-72 "  data-aos="fade-up">
                            <img src="bitmoji.png " className="" alt=""  />
                        </div>

                        <div className="lg:w-[50vw] w-full mt-10 font-semibold text-lg text-justify" >
                            <h1 data-aos="fade-up">Welcome to my corner of the web! I'm Devansh Jethwa, a passionate web developer dedicated to crafting seamless digital experiences. With a robust skill set encompassing technologies such as React, Tailwind, Bootstrap, HTML, CSS, JavaScript, PHP, and ASP.NET, I've journeyed through diverse projects, honing my expertise in creating dynamic and user-friendly websites.</h1>

                                <br />
                                
                                <h1 data-aos="fade-up"> Driven by a relentless work ethic, I approach each project with enthusiasm and a commitment to excellence. I thrive on challenges and am always ready to embrace new technologies, keeping myself at the forefront of the ever-evolving web development landscape.</h1>

                                <br/>

                                <h1 data-aos="fade-up">I am not just a web developer; I am a continuous learner, eager to adapt and evolve with the current trends in the market. Let's collaborate and bring your digital vision to life!</h1>
                        </div>
                </div>

            </div>
        </>
    )
}

export default About