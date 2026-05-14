import { useEffect } from "react";

function Projects() {
  const projectData = [
    {
      title: "Movie Finder",
      image: "MovieFinder_img.png",
      desc: "Search trending movies, cast, ratings and release details with modern UI.",
      live: "https://devanshjethwa.github.io/MovieFinder/",
      code: "https://github.com/DevanshJethwa/MovieFinder",
    },
    {
      title: "Weather App",
      image: "WeatherApp_img.png",
      desc: "Live weather forecast with city search and weekly updates.",
      live: "https://devanshjethwa.github.io/WeatherApp/",
      code: "https://github.com/DevanshJethwa/WeatherApp",
    },
    {
      title: "News App",
      image: "NewsApp_img.png",
      desc: "Trending headlines and global news categories in one platform.",
      live: "#",
      code: "#",
    },
    {
      title: "Text Utils",
      image: "TextUtils_img.png",
      desc: "Useful text converter with word count and formatting tools.",
      live: "https://devanshjethwa.github.io/TextUtils/",
      code: "https://github.com/DevanshJethwa/TextUtils",
    },
    {
      title: "Quote Generator",
      image: "QuoteGen_img.png",
      desc: "Beautiful random quote app with motivational content.",
      live: "https://devanshjethwa.github.io/QuoteGenerator/",
      code: "https://github.com/DevanshJethwa/QuoteGenerator",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section
      id="project"
      className="scroll-mt-0 bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Glow Same as About */}
      <div className="absolute top-20 left-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
            Portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h1>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Scroll reveal cards with zoom + slide animation.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16 md:space-y-24">
          {projectData.map((item, index) => (
            <div
              key={index}
              className={`project-card grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 shadow-xl shadow-black/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[280px] md:h-[360px] object-cover hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-cyan-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
                  Project 0{index + 1}
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-4 md:mt-5 leading-7 md:leading-8 text-sm sm:text-base">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8">
                  <a href={item.live}>
                    <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm sm:text-base">
                      Live Demo
                    </button>
                  </a>

                  <a href={item.code}>
                    <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* CSS */}
      <style>
        {`
          .project-card {
            opacity: 0;
            transform: scale(0.8) translateY(80px);
            transition: all 0.9s ease;
          }

          .project-card:nth-child(odd) {
            transform: translateX(-140px) scale(0.8);
          }

          .project-card:nth-child(even) {
            transform: translateX(140px) scale(0.8);
          }

          .project-card.show {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        `}
      </style>
    </section>
  );
}

export default Projects;