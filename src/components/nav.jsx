import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/10 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-purple-600">@veradanicode</div>

        
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
          <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        </div>

        
        <div className="hidden md:block">
          <a href="#contact">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
              Let's Talk
            </button>
          </a>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/90 shadow-sm backdrop-blur-md">
          <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block py-2 text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Projects</a>
          <a href="#skills" className="block py-2 text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Contact</a>
          <a href="#contact">
            <button className="w-full mt-3 bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
              Let's Talk
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
