import React, { useState, useEffect } from 'react';
import { Menu, X, Star, MessageSquare } from 'lucide-react';
import { 
  navLinks, destinations, featuresData, faqs, testimonials, 
  footerLinks, contactFields, socialIcons 
} from '../../data';

// --- 1. RESPONSIVE HEADER COMPONENT ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1050] transition-all duration-300 px-4 py-2 ${
      isScrolled ? 'bg-[rgb(1,95,116)] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-[55px] min-[500px]:w-[80px] object-contain pl-2" />
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Links */}
        <div className={`lg:flex items-center ${isOpen ? 'block absolute top-full left-0 w-full bg-[rgb(1,95,116)] p-4' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row gap-6 ml-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="relative text-white text-lg font-medium hover:text-gray-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-all hover:after:w-full">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// --- 2. FLIP CARD COMPONENT ---
const FlipCard = ({ data }) => {
  return (
    <div className="flip-card-perspective w-full aspect-[5/7] group bg-transparent">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={data.front} alt={data.alt} className="w-full h-full object-cover" />
        </div>
        <div className="flip-card-back">
          <img src={data.back} alt={data.alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

// --- 3. WHY WANDERON CARD COMPONENT ---
const WhyWanderOnCard = ({ data }) => {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[5/6] group">
      <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start pt-5 px-4 bg-transparent">
         <h5 className="text-xl lg:text-[2.5vmin] font-bold text-[rgb(1,95,116)] mb-3 lg:mb-10 text-center lg:text-left">
            {data.title}
         </h5>
         <p className="text-black text-sm min-[500px]:text-[1.15rem] lg:text-[2vmin] font-normal leading-tight text-center lg:text-left">
            {data.text}
         </p>
      </div>
    </div>
  );
};

// --- 4. ACCORDION COMPONENT (FAQs) ---
const FAQItem = ({ data, isOpen, toggle }) => {
  return (
    <div className={`mb-5 rounded-lg overflow-hidden ${isOpen ? 'border border-[rgb(1,95,116)] shadow-[1px_1px_3px_1px_white]' : 'bg-white'}`}>
      <button 
        onClick={toggle}
        className={`w-full flex justify-between items-center p-4 bg-white text-left font-medium transition-colors ${isOpen ? 'text-[rgb(1,95,116)] accordion-active' : 'text-black'}`}
      >
        <span className="text-sm min-[500px]:text-base">{data.q}</span>
        <span className="accordion-arrow"></span>
      </button>
      <div className={`bg-white px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm min-[500px]:text-base text-gray-700">{data.a}</p>
      </div>
    </div>
  );
};

// --- 5. TESTIMONIAL CARD COMPONENT ---
const TestimonialCard = ({ data }) => {
  return (
    <div className="flex gap-4 p-4 min-[500px]:p-8 bg-[#f0eeee] rounded-xl shadow-sm">
      <div className="shrink-0 w-[80px] h-[80px] min-[500px]:w-[100px] min-[500px]:h-[100px] rounded-full border border-[rgb(1,95,116)] p-1 overflow-hidden">
        <img src={data.img} alt={data.name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <p className="mb-0 font-bold text-black text-sm min-[500px]:text-base">{data.name}</p>
          <div className="flex gap-1 text-[#c9c903] text-xs">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
        </div>
        <p className="text-[rgb(83,82,82)] text-xs min-[500px]:text-sm mb-2">{data.date}</p>
        <div className="relative pl-6">
          <span className="absolute top-[-10px] left-0 text-[rgb(1,95,116)] text-5xl font-bold leading-none">“</span>
          <p className="text-[rgb(83,82,82)] text-xs min-[500px]:text-[0.875rem] text-justify leading-relaxed">
            {data.text}
          </p>
        </div>
        <a href={data.link} target="_blank" rel="noreferrer" className="text-[rgb(1,95,116)] font-bold text-sm flex justify-end mt-2 hover:underline">
          Continue Reading
        </a>
      </div>
    </div>
  );
};

// --- 6. CONTACT FORM COMPONENT ---
const ContactForm = () => {
  return (
    <fieldset className="w-full lg:w-1/2 mx-auto bg-[#d4f5fb] p-7 rounded-xl">
       <legend className="text-center mb-6">
          <p className="text-xl font-bold text-[rgb(1,95,116)] m-0">Not sure what to do? We’ll give you a Call back</p>
       </legend>
       <form className="flex flex-col gap-4">
          {contactFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="text-[rgb(1,95,116)] font-medium min-[500px]:text-sm">{field.label}</label>
              <div className="flex mt-1">
                <span className="bg-white px-3 py-2 border border-r-0 border-gray-300 rounded-l-md flex items-center">
                   <field.icon size={16} className="text-gray-600" />
                </span>
                <input type={field.type} id={field.id} className="w-full p-2 text-sm border border-gray-300 rounded-r-md focus:outline-none" placeholder={field.placeholder} />
              </div>
            </div>
          ))}
          <div>
              <label htmlFor="msg" className="text-[rgb(1,95,116)] font-medium min-[500px]:text-sm">Message</label>
              <div className="flex mt-1">
                <span className="bg-white px-3 py-2 border border-r-0 border-gray-300 rounded-l-md flex items-start pt-3">
                   <MessageSquare size={16} className="text-gray-600" />
                </span>
                <textarea id="msg" rows="3" className="w-full p-2 text-sm border border-gray-300 rounded-r-md focus:outline-none" placeholder="Write your message"></textarea>
              </div>
          </div>
          <button type="submit" className="w-full bg-[#ffd400] hover:bg-[#f0c300] text-black font-bold py-2 rounded-full mt-2 transition-colors">
            Submit
          </button>
       </form>
    </fieldset>
  )
}

// --- 7. FOOTER COMPONENT ---
const Footer = () => {
  const [activeAcc, setActiveAcc] = useState(null);
  
  const toggleAcc = (key) => {
    setActiveAcc(activeAcc === key ? null : key);
  }

  return (
    <footer className="bg-black border-t-[10px] border-[rgb(1,95,116)] rounded-t-xl text-white mt-10">
      {/* Desktop View (Columns) - Hidden on Tablet (<769px) */}
      <div className="hidden md:flex justify-center py-12 gap-12 xl:gap-24 border-b border-[rgb(1,95,116)] container mx-auto">
        {Object.entries(footerLinks).map(([title, links]) => (
          <ul key={title} className="flex flex-col gap-1 list-none">
            <li><a href="#" className="font-bold text-white text-lg hover:underline">{title}</a></li>
            {links.map(link => (
              <li key={link}><a href="#" className="text-[#b4b1b1] hover:text-gray-300 hover:underline">{link}</a></li>
            ))}
          </ul>
        ))}
      </div>

      {/* Mobile View (Accordion) - Visible on Tablet/Mobile */}
      <div className="block md:hidden w-full pt-10">
        {Object.entries(footerLinks).map(([title, links]) => (
           <div key={title} className={`border-y border-[rgb(1,95,116)] bg-black ${activeAcc === title ? 'accordion-active' : ''}`}>
             <button 
                onClick={() => toggleAcc(title)}
                className={`w-full flex justify-between items-center p-4 bg-black text-white font-medium focus:outline-none ${activeAcc === title ? 'text-[rgb(1,95,116)]' : ''}`}
             >
               {title}
               <span className="accordion-arrow filter invert-[1] sepia-[1] saturate-[0] brightness-[2]"></span>
             </button>
             <div className={`overflow-hidden transition-all duration-300 ${activeAcc === title ? 'max-h-[500px]' : 'max-h-0'}`}>
                <ul className="pl-4 pb-4 flex flex-col gap-1">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-white text-sm hover:text-[rgb(1,95,116)] hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
             </div>
           </div>
        ))}
      </div>

      {/* Bottom Footer Details */}
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center border-b border-[rgb(1,95,116)] gap-4">
         <p className="text-xl min-[500px]:text-2xl font-bold uppercase">WanderOn Experiences Pvt Ltd</p>
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
              <span key={i} className="bg-white p-1 rounded-full flex items-center justify-center w-[30px] h-[30px] cursor-pointer hover:bg-gray-200">
                 <Icon size={16} className="text-black" />
              </span>
            ))}
         </div>
         <img src="../../assets/banner/footer-desktop.webp" alt="footer graphic" className="w-full max-w-4xl mt-4 object-contain h-[60px] min-[500px]:h-auto" />
      </div>
      <div className="py-4 text-center text-xs min-[500px]:text-sm">
        <p>© WANDERON EXPERIENCES PVT LTD, All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- MAIN PAGE ASSEMBLY ---
const IndiaTrips = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src="../../assets/banner/india-wallpaper.webp" alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        
        {/* Hero Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 z-10">
           <h1 className="text-white text-3xl min-[500px]:text-5xl font-bold border-l-4 border-[rgb(252,252,34)] pl-4 mb-4">
             Book India Holiday Packages
           </h1>
           <p className="text-[rgb(252,252,34)] font-bold text-lg min-[500px]:text-xl">
              India Holiday Packages Crafted For Every Dream, Every Destination
           </p>
        </div>
      </div>

      {/* Flip Cards Section */}
      <section className="container mx-auto mt-24 px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(1,95,116)] mb-3">Explore India</h2>
          <div className="h-[2px] w-[20%] lg:w-[35%] bg-[rgb(252,252,34)]"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => <FlipCard key={dest.id} data={dest} />)}
        </div>
      </section>

      {/* Why WanderOn Section */}
      <section className="container mx-auto mt-12 px-4">
        <div className="flex flex-col items-center justify-center text-center text-white mb-8">
            <p className="text-xl font-bold italic">Why WanderOn?</p>
            <p className="text-4xl font-bold text-[rgb(1,95,116)] mb-3">WanderOn’s Secret Sauce</p>
            <div className="h-[2px] w-[20%] min-[500px]:w-[35%] bg-[rgb(252,252,34)] mb-8"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((usp) => <WhyWanderOnCard key={usp.id} data={usp} />)}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-fluid bg-black pb-10 mt-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center text-white my-8">
               <p className="text-xl font-bold italic">You Right to Know!</p>
               <p className="text-4xl font-bold text-[rgb(1,95,116)] mb-3">Frequently Asked Questions</p>
               <div className="h-[2px] w-[20%] bg-[rgb(252,252,34)]"></div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
               <div className="hidden lg:block w-1/2">
                  <img src="../../assets/banner/faq.png" alt="FAQ" className="w-full h-auto" />
               </div>
               <div className="w-full lg:w-1/2">
                  {faqs.map((faq, idx) => (
                    <FAQItem 
                      key={idx} 
                      data={faq} 
                      isOpen={activeFaqIndex === idx} 
                      toggle={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)} 
                    />
                  ))}
               </div>
            </div>
        </div>
      </section>

      {/* Hear From Travellers Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
           <h2 className="text-[rgb(1,95,116)] text-4xl font-bold mb-3">Hear from Travellers like you</h2>
           <div className="h-[2px] w-[20%] mx-auto bg-[rgb(252,252,34)]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {testimonials.map((t) => <TestimonialCard key={t.id} data={t} />)}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-fluid bg-black pb-12">
         <div className="text-center mb-8">
            <h2 className="text-[rgb(1,95,116)] text-4xl font-bold mb-3">Contact Us</h2>
            <div className="h-[2px] w-[20%] mx-auto bg-[rgb(252,252,34)]"></div>
         </div>
         <div className="container mx-auto flex flex-row gap-12 px-4">
            <ContactForm />
            <div className="hidden lg:block w-1/2">
               <img src="../../assets/banner/ribbon.svg" alt="Contact" className="w-full h-full object-contain" />
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndiaTrips;