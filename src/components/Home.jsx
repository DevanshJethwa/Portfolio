function Home() {
  return (
    <>
      <div
        id="home"
        className="relative min-h-screen flex items-center justify-around px-5 pb-10 md:px-12 pt-24 bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-900 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    
        {/* Left Content */}
        <div className="w-full md:w-[48vw] text-white z-10">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Welcome To My Portfolio
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Devansh Jethwa
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-3xl text-gray-300 font-medium">
          Full Stack Web Developer
          </h2>

          <p className="mt-8 text-gray-400 md:text-lg leading-8 text-justify max-w-xl">
            I build modern, responsive, and user-friendly websites with smooth
            animations and clean code. Passionate about creating digital
            experiences that look great and perform fast.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a href="Devansh_Jethwa_Resume_2026.pdf" download>
              <button className="px-7 py-3 rounded-full bg-cyan-500 font-semibold text-white hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300">
                Download CV
              </button>
            </a>

            <a href="#contact">
              <button className="px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 transition-all duration-300">
                Contact Me
              </button>
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Available for freelance & full-time opportunities
          </p>
        </div>

        {/* Right Image Only Animated */}
        <div className="hidden md:flex items-center justify-center relative z-10">
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          {/* Rotating Border */}
          <div className="absolute w-80 h-80 border border-cyan-400/30 rounded-full animate-spin-slow"></div>

          {/* Image */}
          <img
            src="bitmoji.png"
            alt="Devansh"
            className="relative w-72 lg:w-96 animate-float drop-shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Custom Animation */}
        <style>
          {`
            @keyframes float {
              0%,100% { transform: translateY(0px); }
              50% { transform: translateY(-18px); }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-spin-slow {
              animation: spin 14s linear infinite;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Home;