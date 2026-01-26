import { useAccordion } from '../../hooks/useAccordion';
import { footerLinks } from '../../data';

export const FooterMobile = () => {
  const { activeIndex: activeAcc, toggle: toggleAcc } = useAccordion();

  return (
    <div className="block md:hidden w-full pt-10">
      {Object.entries(footerLinks).map(([title, links], idx) => (
        <div 
          key={title} 
          className={`border-y border-[rgb(1,95,116)] bg-black ${
            activeAcc === idx ? 'accordion-active' : ''
          }`}
        >
          <button 
            onClick={() => toggleAcc(idx)}
            className={`w-full flex justify-between items-center p-4 bg-black text-white font-medium focus:outline-none ${
              activeAcc === idx ? 'text-[rgb(1,95,116)]' : ''
            }`}
          >
            {title}
            <span className="accordion-arrow filter invert-[1] sepia-[1] saturate-[0] brightness-[2]"></span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              activeAcc === idx ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <ul className="pl-4 pb-4 flex flex-col gap-1">
              {links.map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white text-sm hover:text-[rgb(1,95,116)] hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
