import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { assets } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      style={{ backgroundColor: scrolled ? 'var(--wander-dark-teal)' : 'transparent' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={assets.logo} alt="WanderOn Logo" className="w-[55px] h-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium">
          {['Home', 'Explore', 'About', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="relative text-white transition-colors duration-500
             after:content-[''] after:absolute after:bottom-0 after:left-1/2
             after:w-0 after:h-0.5 after:bg-linear-to-r
             after:from-pink-500 after:to-purple-500
             after:transition-all after:duration-300 after:ease-out
             hover:after:w-full hover:after:left-0 pb-1.5">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute w-full left-0 top-full p-4 flex flex-col space-y-4 text-white shadow-xl" style={{ backgroundColor: 'var(--wander-teal)' }}>
           {['Home', 'Explore', 'About', 'Blog', 'Contact'].map((item) => (
            <a key={item} href="#" className="block py-2 border-b border-white/20">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;