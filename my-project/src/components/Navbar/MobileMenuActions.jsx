import React from 'react';
const MobileMenuActions = ({ isOpen, onSignInClick, onBookNowClick }) => {
  return (
    <div 
      className={`px-6 py-6 space-y-3 transform transition-all duration-300 ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
    >
      <button
        onClick={onSignInClick}
        className="w-full px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 active:scale-95"
      >
        Sign In
      </button>
      <button 
        onClick={onBookNowClick}
        className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 active:scale-95"
      >
        Book Now
      </button>
    </div>
  );
};

export default MobileMenuActions;
