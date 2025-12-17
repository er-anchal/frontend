import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { assets } from '../data';

const Footer = () => {
  const links = {
    "International Trips": ["Europe", "Georgia", "Bali", "Vietnam", "Spain", "Singapore", "Dubai"],
    "India Trips": ["Himachal", "Kashmir", "Kerala", "Ladakh", "Meghalaya", "Rajasthan", "Uttarakhand"],
    "WanderOn Special": ["Community Trips", "Honeymoon Trips", "Corporate Trips", "Weekend Gateways"],
    "Quick Links": ["Home", "About Us", "Blogs", "Contact Us", "Privacy Policy"]
  };

  return (
    <footer className="bg-black text-white border-t-[10px] rounded-t-2xl mt-10" style={{ borderColor: 'var(--wander-teal)' }}>
      <div className="container mx-auto px-6 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-8 border-b" style={{ borderColor: 'var(--wander-teal)' }}>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[var(--wander-teal)] transition-colors text-sm">
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
          <h2 className="text-2xl font-bold tracking-wider uppercase">WanderOn Experiences Pvt Ltd</h2>
          <p className="text-gray-400 max-w-lg">
            3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-medium text-[var(--wander-yellow)]">
            <span>hello@wanderon.in</span>
            <span>+91-9090403075</span>
            <span>www.wanderon.in</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[FaInstagram, FaFacebook, FaYoutube, FaLinkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="bg-white p-2 rounded-full text-black hover:bg-[var(--wander-yellow)] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <img src={assets.logo} alt="" className="h-12 mt-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
      
      <div className="bg-[#0f0f0f] py-4 text-center text-gray-500 text-sm">
        &#169; WANDERON EXPERIENCES PVT LTD, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;