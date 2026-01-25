import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLogo from './NavLogo';
import NavMenuItems from './NavMenuItems';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Explore', 'About', 'Blog', 'Contact', 'Login'];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to route
  const handleNavigation = (item) => {
    const route = item === 'Login' ? '/login' : `/${item.toLowerCase()}`;
    navigate(route);
    setMobileMenuOpen(false);
  };

  // Handle sign in
  const handleSignIn = () => {
    navigate('/login');
    setMobileMenuOpen(false);
  };

  // Handle book now
  const handleBookNow = () => {
    navigate('/booking'); // Change to your booking route
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 shadow-lg' : 'py-4'
        } ${
          mobileMenuOpen ? 'invisible opacity-0' : 'visible opacity-100'
        }`}
        style={{ backgroundColor: scrolled ? 'var(--wander-dark-teal)' : 'transparent' }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLogo />
          <NavMenuItems items={menuItems} onItemClick={handleNavigation} />
          <MobileMenuToggle 
            isOpen={mobileMenuOpen} 
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menuItems={menuItems}
        onItemClick={handleNavigation}
        onSignInClick={handleSignIn}
        onBookNowClick={handleBookNow}
      />
    </>
  );
};

export default Navbar;
