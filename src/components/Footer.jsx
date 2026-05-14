import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-center py-8 text-white border-t border-white/10 relative">

      <p className="text-gray-400 text-sm md:text-base italic px-4">
        “Coding with passion ❤️, debugging with patience 🛠️, and designing with purpose ✨.”
      </p>

      <p className="text-gray-600 text-xs mt-4">
        © {new Date().getFullYear()} Devansh Jethwa
      </p>

      {/* ✅ FIXED BUTTON (HIGH Z-INDEX) */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full 
          bg-gradient-to-r from-cyan-500 to-blue-500 
          text-white flex items-center justify-center 
          shadow-xl shadow-cyan-500/30 
          hover:scale-110 hover:rotate-12 
          transition-all duration-300"
        >
          <IoArrowUp size={22} />
        </button>
      )}

    </footer>
  );
}

export default Footer;