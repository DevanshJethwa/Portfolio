import { Skills } from "../assets/Skills_data";
import Skill_Card from "./Skill_Card";

function Skill() {
  return (
    <div className="bg-sky-100  md:py-12 py-8 " id="skill">
      <h1 className="text-center md:text-4xl text-3xl font-semibold underline">
        {" "}
        My Skills
      </h1>

      {/* <div className="flex  flex-col items-center justify-center ">
        <div className="grid grid-cols-4 lg:grid-cols-8  my-6 gap-20">
          <Skill_Card />
          <Skill_Card />
          <Skill_Card />
          <Skill_Card />
        </div>

        <div className="grid grid-cols-6 my-6 gap-20">
          <Skill_Card />
          <Skill_Card />
          <Skill_Card />
        </div>

        
      </div> */}
        <div className="flex flex-col">
      

        <div className="flex justify-center md:my-8 my-4 md:gap-24 gap-3  mx-5" data-aos="fade-up">
          <Skill_Card heading={Skills.html.heading} logo={Skills.html.logo}/>
          <Skill_Card heading={Skills.css.heading} logo={Skills.css.logo}/>
          <Skill_Card heading={Skills.reactjs.heading} logo={Skills.reactjs.logo}/>
          <Skill_Card heading={Skills.csharp.heading} logo={Skills.csharp.logo}/>
          
          
        </div>
        <div className="flex justify-center md:my-8 my-4 md:gap-24 gap-3 " data-aos="fade-up">
          <Skill_Card heading={Skills.javascript.heading} logo={Skills.javascript.logo}/>
          <Skill_Card heading={Skills.bootstrap.heading} logo={Skills.bootstrap.logo}/>
          <Skill_Card heading={Skills.tailwind.heading} logo={Skills.tailwind.logo}/>
          
        </div>
        <div className="flex justify-center md:my-8 my-4 md:gap-24 gap-3  mx-5" data-aos="fade-up">
          <Skill_Card heading={Skills.python.heading} logo={Skills.python.logo}/>
          <Skill_Card heading={Skills.java.heading} logo={Skills.java.logo}/>
          <Skill_Card heading={Skills.dotnet.heading} logo={Skills.dotnet.logo}/>
          <Skill_Card heading={Skills.php.heading} logo={Skills.php.logo}/>
          
        </div>
        <div className="flex justify-center md:my-8 my-4 md:gap-24 gap-3 " data-aos="fade-up">
          <Skill_Card heading={Skills.oracle.heading} logo={Skills.oracle.logo}/>
          <Skill_Card heading={Skills.mysql.heading} logo={Skills.mysql.logo}/>
          <Skill_Card heading={Skills.sqlite.heading} logo={Skills.sqlite.logo}/>
        </div>


          {/* <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='w-14' />
            <h1 className=" mt-2 text-white text-lg">HTML</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='w-14 ' />
            <h1 className=" mt-2 text-white text-lg">CSS</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-14 ' />
            <h1 className=" mt-2 text-white text-lg">Javascript</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='w-14 ' />
            <h1 className=" mt-2 text-white text-lg">Bootrap</h1>
          </div>
           */}
          
        

        
          {/* <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">Tailwind CSS</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">React JS</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">Python</h1>
          </div> */}
          
        

        {/*<div className="flex justify-center my-8 gap-24 " data-aos="fade-right">
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">Java</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">.Net</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">C#</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">PHP</h1>
          </div>
         
          
        </div>

        <div className="flex justify-center my-8 gap-24 " data-aos="fade-left">
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">Oracle</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">MySQL</h1>
          </div>
          <div className="flex flex-col items-center bg-[#051923] w-32 py-3 rounded-md  shadow-[#051923] shadow-lg hover:scale-110 transition-all  duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" className='w-14 ' />
            <h1 className="text-center mt-2 text-white text-lg">SQLite</h1>
          </div>
          
          
        </div> */}
        </div> 

      {/* <div className='xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:max-w-md max-w-xs mt-8 mx-auto'>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">HTML</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">CSS</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">Javascript</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">Bootstrap</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl col-span-3 ">Tailwind CSS</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">React Js</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-8'/>
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">Python</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">.NET</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">C#</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">C++</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">Oracle</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>
          
          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-5' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">MySql</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-10 gap-3 mx-3 my-' data-aos="fade-up">
            <div className='w-[30%] flex items-center gap-2 '>
              <h1 className="text-2xl  col-span-3 ">Sql Lite</h1> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" className='w-8' />
            </div>
            <input type="range" className='w-full' value={80} name="" id="" />
          </div>
          
        
          

        </div> */}
    </div>
  );
}

export default Skill;
