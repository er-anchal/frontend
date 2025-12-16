import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const links = {
    "International Trips": ["Europe", "Georgia", "Bali", "Vietnam", "Spain", "Singapore", "Dubai"],
    "India Trips": ["Himachal", "Kashmir", "Kerala", "Ladakh", "Meghalaya", "Rajasthan"],
    "WanderOn Special": ["Community Trips", "Honeymoon Trips", "Corporate Trips", "Weekend Gateways"],
    "Quick Links": ["Home", "About Us", "Blogs", "Contact Us", "Privacy Policy"]
  };

  return (
    <footer className="bg-black text-white border-t-10 border-wander-teal rounded-t-2xl mt-10">
      <div className="container mx-auto px-6 py-12">
        {/* Desktop Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-wander-teal pb-8">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-wander-teal transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">WANDERON EXPERIENCES PVT LTD</h2>
          <p className="text-gray-400 max-w-lg">
            3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-wander-yellow font-medium">
            <span>hello@wanderon.in</span>
            <span>+91-9090403075</span>
            <span>www.wanderon.in</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[FaInstagram, FaFacebook, FaYoutube, FaLinkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="bg-white p-2 rounded-full text-black hover:bg-wander-yellow transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-4 text-center text-gray-500 text-sm">
        &#169; WANDERON EXPERIENCES PVT LTD, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;