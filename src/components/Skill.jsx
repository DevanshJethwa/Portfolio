// Skill.jsx

import { Skills } from "../assets/Skills_data";

function Skill() {
  const skillsList = [
    Skills.html,
    Skills.css,
    Skills.javascript,
    Skills.reactjs,
    Skills.bootstrap,
    Skills.tailwind,
    Skills.python,
    Skills.java,
    Skills.dotnet,
    Skills.csharp,
    Skills.php,
    Skills.oracle,
    Skills.mysql,
    Skills.sqlite,
  ];

  return (
    <section>
      <div
        id="skill"
        className="relative min-h-screen flex items-center justify-around px-5 md:px-12 pt-20 bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-900 overflow-hidden pb-14"
      >
        {/* Background Effects */}
        <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
              My Toolkit
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
              Trending <span className="text-cyan-400">Skill Zone</span>
            </h1>

            <p className="text-gray-400 mt-4 sm:mt-5 leading-7 text-sm sm:text-base px-2">
              Technologies I use to craft modern, fast and scalable websites.
            </p>
          </div>

          {/* Skills Pills */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">

            {skillsList.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:rotate-12 transition-all duration-500">
                  <img
                    src={item.logo}
                    alt={item.heading}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>

                {/* Name */}
                <span className="text-white font-medium text-xs sm:text-sm md:text-base group-hover:text-cyan-400 transition-all duration-300">
                  {item.heading}
                </span>

                {/* Dot */}
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-all duration-300"></span>
              </div>
            ))}

          </div>

          {/* Footer Strip */}
          <div className="mt-16 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-6 md:px-8 shadow-xl shadow-black/20">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

              <div className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
                <h1 className="text-cyan-400 text-lg font-semibold">
                  Frontend
                </h1>
                <p className="text-gray-400 text-xs mt-1">Modern UI Design</p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
                <h1 className="text-cyan-400 text-lg font-semibold">
                  Backend
                </h1>
                <p className="text-gray-400 text-xs mt-1">Logic & APIs</p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
                <h1 className="text-cyan-400 text-lg font-semibold">
                  Database
                </h1>
                <p className="text-gray-400 text-xs mt-1">Data Handling</p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
                <h1 className="text-cyan-400 text-lg font-semibold">
                  Responsive
                </h1>
                <p className="text-gray-400 text-xs mt-1">All Devices Ready</p>
              </div>

            </div>
          </div>

        </div>
        </div>
    </section>
  );
}

export default Skill;