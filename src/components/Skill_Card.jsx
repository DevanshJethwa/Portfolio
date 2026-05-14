// Skill_Card.jsx

function Skill_Card({ heading, logo, delay }) {
  return (
    <>
      <div
        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
        style={{
          animation: `fadeUp 0.6s ease forwards`,
          animationDelay: `${delay * 0.08}s`,
          opacity: 0,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

        {/* Icon */}
        <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
          <img
            src={logo}
            alt={heading}
            className="w-9 h-9 md:w-10 md:h-10 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="relative mt-6 text-white text-xl font-semibold group-hover:text-cyan-400 transition-all duration-300">
          {heading}
        </h1>

        {/* Mini Description */}
        <p className="relative mt-3 text-gray-400 text-sm leading-6">
          Professional development experience using {heading}.
        </p>

        {/* Bottom Button Style */}
        <div className="relative mt-6 inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
          Explore
          <span className="group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default Skill_Card;