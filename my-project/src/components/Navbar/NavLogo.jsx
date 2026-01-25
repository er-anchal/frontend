import React from 'react';
import { assets } from '/logo.png';

const NavLogo = () => {
  return (
    <a href="/" className="flex items-center">
      <img 
        src={assets.logo} 
        alt="WanderOn Logo" 
        className="w-16.5 h-auto object-contain" 
      />
    </a>
  );
};

export default NavLogo;
