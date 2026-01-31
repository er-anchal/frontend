import { Instagram, Facebook, Youtube, Linkedin, User, Mail, Phone, MessageSquare } from 'lucide-react';
// Images
import slider1 from './assets/images/Exhilerating/slider_1.jpg';
import slider2 from './assets/images/Exhilerating/slider_2.jpg';
import slider3 from './assets/images/Exhilerating/slider_3.jpg';
import slider4 from './assets/images/Exhilerating/slider_4.jpg';
import slider5 from './assets/images/Exhilerating/slider_5.jpg';
import slider6 from './assets/images/Exhilerating/slider_6.jpg';
import slider7 from './assets/images/Exhilerating/slider_7.jpg';
import slider8 from './assets/images/Exhilerating/slider_8.jpg';

// Banners & Backgrounds
import upcomingBanner from './assets/banner/upcoming_trips.webp';
import connectBanner from './assets/banner/connect.webp';

// Trip Images
import europe from './assets/images/International/europe.webp';
import bali from './assets/images/International/bali.webp';
import vietnam from './assets/images/International/vietnam.webp';
import dubai from './assets/images/International/dubai.webp';
import spain from './assets/images/International/Spain.webp';
import singapore from './assets/images/International/singapore.webp';
import georgia from './assets/images/International/georiga.webp';
import kazakashtan from './assets/images/International/kazakashtan.webp';

// India Images
import himachal from './assets/images/Indian/himachal.webp';
import kashmir from './assets/images/Indian/kashmir.webp';
import kerala from './assets/images/Indian/kerala.webp';
import ladakh from './assets/images/Indian/ladakh.webp';
import meghalaya from './assets/images/Indian/meghalaya.webp';
import rajasthan from './assets/images/Indian/rajasthan.webp';
import uttarakhand from './assets/images/Indian/uttarakhand.webp';
import spiti from './assets/images/Indian/spiti.webp';

//Indian card
import himachal_card from './assets/images/Indian/himachal_card.webp';
import kashmir_card from './assets/images/Indian/kashmir_card.webp';
import ladakh_card from './assets/images/Indian/ladakh_card.webp';  
import meghalaya_card from './assets/images/Indian/meghalya_card.webp';
import rajasthan_card from './assets/images/Indian/rajasthan_card.webp';
import uttarakhand_card from './assets/images/Indian/uttarakhand_card.webp';
import spiti_card from './assets/images/Indian/spiti_card.webp';
import kerala_card from './assets/images/Indian/kerala_card.webp';

// Feature Cards
import card1 from './assets/images/card/card1.svg';
import card2 from './assets/images/card/card.svg';
import card3 from './assets/images/card/card3.svg';
import card4 from './assets/images/card/card4.svg';

// testimonials
import traveller1 from './assets/images/travellers/anchal.jpg';
import traveller2 from './assets/images/travellers/manash.jpg';
import traveller3 from './assets/images/travellers/sakshi.png';
import traveller4 from './assets/images/travellers/omkar.jpg';
// Logo
import logoImg from '/logo.png';

export const assets = {
    upcomingBanner,
    connectBanner,
    logo: logoImg
};

export const dealsData = [
    { title: "Ladakh Fixed Departure", price: "@ 999", image: slider1 },
    { title: "Manali Bike Expedition", price: "@ 999", image: slider2 },
    { title: "Rishikesh Bungee Jump", price: "@ 999", image: slider3 },
    { title: "Paragliding Manali", price: "@ 999", image: slider4 },
    { title: "Himalayan Bungee", price: "@ 999", image: slider5 },
    { title: "Himalayan Bungee", price: "@ 999", image: slider6},
    { title: "Himalayan Bungee", price: "@ 999", image: slider7 },
    { title: "Himalayan Bungee", price: "@ 999", image: slider8 },
];

export const internationalData = [
    { title: "Europe", price: "Starts Rs. 1,49,000/-", image: europe },
    { title: "Bali", price: "Starts Rs. 49,999/-", image: bali },
    { title: "Vietnam", price: "Starts Rs. 59,999/-", image: vietnam },
    { title: "Dubai", price: "Starts Rs. 29,999/-", image: dubai },
    { title: "Spain", price: "Starts Rs. 44,999/-", image: spain },
    { title: "Singapore", price: "Starts Rs. 1,49,000/-", image: singapore },
    { title: "Georgia", price: "Starts Rs. 39,999/-", image: georgia },
    { title: "Kazakhstan", price: "Starts Rs. 34,999/-", image: kazakashtan },
];

export const indiaData = [
    { title: "Himachal", price: "Starts Rs. 6,999/-", image: himachal }, 
    { title: "Kashmir", price: "Starts Rs. 12,999/-", image: kashmir }, 
    { title: "Kerala", price: "Starts Rs. 14,999/-", image: kerala }, 
    { title: "Ladakh", price: "Starts Rs. 18,999/-", image: ladakh }, 
    { title: "Meghalaya", price: "Starts Rs. 9,999/-", image: meghalaya }, 
    { title: "Rajasthan", price: "Starts Rs. 11,999/-", image: rajasthan },
    { title: "Uttarakhand", price: "Starts Rs. 19,999/-", image: uttarakhand },
];

export const romanticData = [
    { title: "Bali", price: "Starts Rs. 49,999/-", image: bali },
    { title: "Singapore", price: "Starts Rs. 58,999/-", image: singapore },
    { title: "Kashmir", price: "Starts Rs. 15,999/-", image: kashmir },
    { title: "Kerala", price: "Starts Rs. 19,999/-", image: kerala },
    { title: "Uttarakhand", price: "Starts Rs. 19,999/-", image: uttarakhand },
    { title: "Spiti Valley", price: "Starts Rs. 22,999/-", image: spiti },
];

export const featuresData = [
    { img: card1, title: "No Third Party Mess", desc: "100% in-house operations! No third parties involved." },
    { img: card2, title: "Security", desc: "Real time monitoring of all trips by ground team!" },
    { img: card3, title: "Co-Travelers Filtering", desc: "Multi-step filtering to bring only like-minded people together!" },
    { img: card4, title: "Seamless Use", desc: "Comfortable stays, trained drivers, and hospitable staff!" }
];

export const destinations = [
  { id: 1, front: kerala_card.webp, back: kerala, alt: "Kerala" },
  { id: 2, front: himachal_card, back: himachal, alt: "Himachal" },
  { id: 3, front: rajasthan_card, back: rajasthan, alt: "Rajasthan" },
  { id: 4, front: spiti_card, back: spiti, alt: "Spiti" },
  { id: 5, front: uttarakhand_card, back: uttarakhand, alt: "Uttarakhand" },
  { id: 6, front: ladakh_card, back: ladakh, alt: "Ladakh" },
  { id: 7, front: meghalaya_card, back: meghalaya, alt: "Meghalaya" },
  { id: 8, front: kashmir_card, back: kashmir, alt: "Kashmir" },
];

// usps = features data

export const faqs = [
  { q: "What is the best package in India?", a: "The best package in India varies from destination to destination. Some of the best packages offered by WanderOn include Ladakh, Kashmir, Spiti Valley, Sikkim, Andaman, Kerala." },
  { q: "What are the best ways to travel within India?", a: "The best ways to travel within India include travel via flights, trains and by roads. India is well connected by all these modes of transports." },
  { q: "What is the best time to visit India?", a: "The best time to visit India varies depending upon location. For Ladakh and Spiti, travel during summer. For Kerala and Andaman, winter is best." },
  { q: "Do I need to hire tour guides for my trip to India?", a: "It is generally recommended to hire tour guides as they have complete knowledge about routes and food, easing your journey." },
  { q: "Which are the best places to travel for 4-5 days in India?", a: "Ladakh, Rajasthan, Kerala, Golden Triangle (Delhi-Agra-Jaipur), Sikkim, and parts of Himachal Pradesh." }
];

export const testimonials = [
  { id: 1, name: "Archana Awati", date: "30 Apr 2024", img: traveller1, text: "In Ladakh, find the perfect blend of culture, adventure, and serenity. December last year I decided that my next trip would be Ladakh...", link: "https://www.google.com/maps/reviews/@28.4994494,77.0749511,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURSMnJhNjlBRRAB!2m1!1s0x0:0x56b3e3ef002edbc2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" },
  { id: 2, name: "Sonal Shekhar Das", date: "9 May 2024", img: traveller2, text: "I did my first solo trip in India with WanderOn. Initially I was sceptical about their Meghalaya-Kaziranga trip...", link: "https://www.google.com/maps/reviews/@28.4994494,77.0749511,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURSOTV5M1l3EAE!2m1!1s0x0:0x56b3e3ef002edbc2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" },
  { id: 3, name: "Shrutika Parab", date: "24 May 2024", img: traveller3, text: "Thank you Team Wanderon for the amazing Ladakh Experience. Right from the point of making the bookings...", link: "https://www.google.com/maps/reviews/@28.4994494,77.0749511,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUN4dlpfT1JnEAE!2m1!1s0x0:0x56b3e3ef002edbc2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" },
  { id: 4, name: "Kartik Dilawari", date: "30 Apr 2024", img: traveller4, text: "After an amazing trip to Tirthan with WanderOn, I decided to go to Manali-Jispa with them...", link: "https://www.google.com/maps/contrib/116933324535405941392/place/ChIJ39f0keLjDDkRwtsuAO_js1Y/@25.5375281,69.207753,5z/data=!4m6!1m5!8m4!1e1!2s116933324535405941392!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" }
];

export const footerLinks = {
  "International Trips": ["Europe", "Georgia", "Bali", "Vietnam", "Spain", "Singapore", "Dubai"],
  "India Trips": ["Himachal", "Kashmir", "Kerala", "Ladakh", "Meghalaya", "Rajasthan", "Uttarakhand"],
  "WanderOn Special": ["Community Trips", "Honeymoon Trips", "Corporate Trips", "Weekend Gateways"],
  "Quick Links": ["Home", "About Us", "Blogs", "Contact Us", "Privacy Policy"]
};

export const contactFields = [
  { id: "name", icon: User, type: "text", placeholder: "Enter your name", label: "Name:" },
  { id: "email", icon: Mail, type: "email", placeholder: "Enter your Email Id", label: "Email:" },
  { id: "phone", icon: Phone, type: "tel", placeholder: "Enter your 10 digit number", label: "Phone:" }
];

export const socialIcons = [Instagram, Facebook, Youtube, Linkedin];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "International Trips", href: "/international" },
  { name: "Romantic Explore", href: "/honeymoon" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];