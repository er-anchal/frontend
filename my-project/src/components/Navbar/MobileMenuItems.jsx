import React from 'react';

const MobileMenuItems = ({ items, isOpen, onItemClick }) => {
  return (
    <nav className="px-6 py-6">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={item}
            className={`transform transition-all duration-300 ${
              isOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: isOpen ? `${100 + index * 60}ms` : '0ms' }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                onItemClick(item);
              }}
              className="w-full text-left block px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/15 active:bg-white/25 bg-none border-none cursor-pointer"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenuItems;
