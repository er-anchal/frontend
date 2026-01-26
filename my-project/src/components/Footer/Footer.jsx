import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';
import { socialIcons } from '../../data';

export const Footer = () => {
  return (
    <footer className="bg-black border-t-[10px] border-[rgb(1,95,116)] rounded-t-xl text-white mt-10">
      {/* Desktop & Mobile Views */}
      <FooterDesktop />
      <FooterMobile />

      {/* Bottom Footer Details */}
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center border-b border-[rgb(1,95,116)] gap-4">
        <p className="text-xl min-[500px]:text-2xl font-bold uppercase">
          WanderOn Experiences Pvt Ltd
        </p>
        <p className="text-sm min-[500px]:text-base max-w-lg">
          3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
        </p>
        <div className="flex flex-wrap justify-center gap-4 min-[500px]:gap-12 text-sm min-[500px]:text-base font-medium">
          <span>hello@wanderon.in</span>
          <span>+91-9090403075</span>
          <span>www.wanderon.in</span>
        </div>

        <div className="flex gap-2 bg-[#3b3838] px-5 py-2 rounded-full mt-2 w-[200px] justify-center">
          {socialIcons.map((Icon, i) => (
            <span 
              key={i} 
              className="bg-white p-1 rounded-full flex items-center justify-center w-[30px] h-[30px] cursor-pointer hover:bg-gray-200"
            >
              <Icon size={16} className="text-black" />
            </span>
          ))}
        </div>
        <img 
          src="../../assets/banner/footer-desktop.webp" 
          alt="footer graphic" 
          className="w-full max-w-4xl mt-4 object-contain h-[60px] min-[500px]:h-auto" 
        />
      </div>
      <div className="py-4 text-center text-xs min-[500px]:text-sm">
        <p>© WANDERON EXPERIENCES PVT LTD, All rights reserved.</p>
      </div>
    </footer>
  );
};
