import { IoMenu, IoClose } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = ["home", "about", "skill", "project", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <nav className="h-16 px-4 sm:px-6 md:px-8 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-2xl">

          {/* New Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaLaptopCode className="text-white text-xl" />
              <span className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md scale-125"></span>
            </div>

            <div>
              <h1 className="text-white text-lg font-bold leading-none tracking-wide">
                Devansh
              </h1>
              <p className="text-[10px] text-cyan-400 tracking-[4px] uppercase">
                Full Stack Dev
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={`#${item}`}
                className={`px-4 py-2 rounded-full text-sm uppercase transition-all duration-300 ${
                  active === item
                    ? "bg-cyan-500 text-slate-900 font-bold shadow-lg shadow-cyan-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setShowSidebar(true)}
            className="md:hidden p-2 rounded-xl bg-cyan-500 text-white"
          >
            <IoMenu size={22} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`md:hidden fixed inset-0 bg-black/60 z-40 transition-all duration-300 ${
          showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-slate-950 border-l border-white/10 z-50 transition-all duration-500 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Menu</h2>

          <button
            onClick={() => setShowSidebar(false)}
            className="p-2 rounded-lg bg-red-500 text-white"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="p-6 flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setShowSidebar(false);
              }}
              className={`px-4 py-3 rounded-xl uppercase transition-all duration-300 ${
                active === item
                  ? "bg-cyan-500 text-slate-900 font-bold"
                  : "bg-white/5 border border-white/10 text-white hover:bg-cyan-500/20 hover:text-cyan-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-gray-500 text-sm">
          Devansh Jethwa
        </div>
      </aside>
    </>
  );
}

export default Navbar;