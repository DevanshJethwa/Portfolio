function About() {
  return (
    <>
      <section id="about" className="scroll-mt-0 bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Heading */}
        <div className="text-center relative z-10">
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
            Know More
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 mt-14 flex flex-col lg:flex-row items-center justify-between gap-14 relative z-10">

          {/* Left Image */}
          <div className="w-full lg:w-[38%] flex justify-center">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

              {/* Rotating Border */}
              <div className="absolute -inset-3 border border-cyan-400/20 rounded-full animate-spin-slow"></div>

              {/* Image */}
              <img
                src="bitmoji.png"
                alt="Devansh"
                className="relative w-72 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[55%] text-gray-300 text-justify space-y-6 text-[16px] md:text-lg leading-8">

            <p>
              Welcome to my corner of the web! I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Devansh Jethwa
              </span>
              , a passionate web developer dedicated to crafting seamless
              digital experiences.
            </p>

            <p>
              With a strong skill set in MongoDB, Express.js, React, Node.js, Tailwind CSS, Bootstrap, HTML, CSS, and JavaScript, I have worked on multiple projects focused on modern UI, responsive layouts, scalable web applications, and user-friendly experiences.
            </p>

            <p>
              Driven by consistency and curiosity, I enjoy solving problems,
              learning new technologies, and staying updated with modern web
              trends.
            </p>

            <p>
              I’m not just a developer — I’m a continuous learner ready to build
              impactful digital products and bring creative ideas to life.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                <h2 className="text-cyan-400 text-2xl font-bold">1+</h2>
                <p className="text-sm text-gray-400">Years Exp.</p>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                <h2 className="text-cyan-400 text-2xl font-bold">10+</h2>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                <h2 className="text-cyan-400 text-2xl font-bold">100%</h2>
                <p className="text-sm text-gray-400">Responsive</p>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                <h2 className="text-cyan-400 text-2xl font-bold">∞</h2>
                <p className="text-sm text-gray-400">Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>
          {`
            @keyframes float {
              0%,100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-spin-slow {
              animation: spin 14s linear infinite;
            }
          `}
        </style>
      </section>
    </>
  );
}

export default About;