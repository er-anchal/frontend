import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = ['Home', 'Explore', 'About', 'Blog', 'Contact'];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 z-[9999] ${
          scrolled ? 'py-3 shadow-lg' : 'py-4'
        } ${
          mobileMenuOpen ? 'invisible opacity-0' : 'visible opacity-100'
        }`}
        style={{ backgroundColor: scrolled ? 'var(--wander-dark-teal)' : 'transparent' }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={assets.logo} alt="WanderOn Logo" className="w-16.5 h-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-white font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="relative text-white transition-colors duration-500
                   after:content-[''] after:absolute after:bottom-0 after:left-1/2
                   after:w-0 after:h-0.5 after:bg-linear-to-r
                   after:from-pink-500 after:to-purple-500
                   after:transition-all after:duration-300 after:ease-out
                   hover:after:w-full hover:after:left-0 pb-1.5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white text-2xl cursor-pointer z-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Subtle Gradient */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 lg:hidden z-30 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)'
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-80 shadow-2xl transform transition-transform duration-300 ease-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--wander-teal)' }}
      >
        {/* Close Button Area */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <h3 className="text-white font-semibold text-lg">Destiny</h3>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl hover:bg-white/10 p-2 rounded-lg transition-colors duration-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-6 py-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li 
                key={item}
                className={`transform transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${100 + index * 60}ms` : '0ms' }}
              >
                <a
                  href="#"
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/15 active:bg-white/25"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div 
          className={`border-t border-white/20 mx-6 transform transition-all duration-300 ${
            mobileMenuOpen 
              ? 'opacity-100 scale-x-100' 
              : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms', transformOrigin: 'left' }}
        />

        {/* Additional Actions */}
        <div 
          className={`px-6 py-6 space-y-3 transform transition-all duration-300 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: mobileMenuOpen ? '450ms' : '0ms' }}
        >
          <button className="w-full px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 active:scale-95">
            Sign In
          </button>
          <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
