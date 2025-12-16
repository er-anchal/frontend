import React, { useState } from 'react';
import Navbar from "./Navbar"
import Hero from './Hero';
import TripSlider from './TripSlider';
import Footer from './Footer';

// Assets
import card1 from '../assets/card/card1.svg';
import card2 from '../assets/card/card.svg';
import card3 from '../assets/card/card3.svg';
import card4 from '../assets/card/card4.svg';
import bannerConnect from '../assets/banner/connect.webp';
// Import your other images/videos here...

const Home = () => {
    // Mock Data for Sliders
    const dealsData = [
        { title: "Ladakh Fixed Departure", price: "@ 999", image: "assets/images/slider_1.jpg" },
        { title: "Manali Bike Expedition", price: "@ 999", image: "assets/images/slider_2.jpg" },
        { title: "Rishikesh Bungee Jump", price: "@ 999", image: "assets/images/slider_3.jpg" },
        { title: "Paragliding Manali", price: "@ 999", image: "assets/images/slider_4.jpg" },
    ];

    const internationalData = [
        { title: "Europe", price: "Starts Rs. 1,49,000/-", image: "assets/images/europe.webp" },
        { title: "Bali", price: "Starts Rs. 49,999/-", image: "assets/images/bali.webp" },
        { title: "Vietnam", price: "Starts Rs. 59,999/-", image: "assets/images/vietnam.webp" },
        { title: "Dubai", price: "Starts Rs. 29,999/-", image: "assets/images/dubai.webp" },
    ];

    return (
        <div className="font-sans text-gray-900 bg-gray-50">
            <Navbar />
            <Hero />

            <main>
                {/* Exhilarating Deals */}
                <div className="mt-20">
                    <TripSlider 
                        title="Exhilarating Deals" 
                        slides={dealsData} 
                        isDealSlider={true} 
                    />
                </div>

                {/* International Trips */}
                <TripSlider 
                    title="International Trips" 
                    subtitle="Discover the world, one destination at a time"
                    videoSrc="assets/banner/int_tr_video.mp4"
                    slides={internationalData}
                />

                {/* Features / Why WanderOn */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center mb-12">
                        <p className="text-xl italic font-serif text-gray-500">Why WanderOn?</p>
                        <h2 className="text-4xl font-bold text-wander-teal">WanderOn’s Secret Sauce</h2>
                        <div className="w-20 h-1 bg-wander-yellow mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { img: card1, title: "No Third Party Mess", desc: "100% in-house operations! No third parties involved." },
                            { img: card2, title: "Security", desc: "Real time monitoring of all trips by ground team!" },
                            { img: card3, title: "Co-Travelers Filtering", desc: "Multi-step filtering to bring only like-minded people together!" },
                            { img: card4, title: "Seamless Use", desc: "Comfortable stays, trained drivers, and hospitable staff!" }
                        ].map((card, idx) => (
                            <div key={idx} className="relative group rounded-xl overflow-hidden aspect-5/6 shadow-lg">
                                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                    <h3 className="text-wander-teal font-bold text-xl mb-4">{card.title}</h3>
                                    <p className="text-gray-800">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Banner */}
                <section className="container mx-auto px-4 mb-20 relative">
                    <div className="rounded-2xl overflow-hidden relative">
                        <img src={bannerConnect} alt="Connect" className="w-full h-300px object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20">
                            <h2 className="text-white text-3xl md:text-4xl font-bold italic mb-2">Dreaming of your next Adventure?</h2>
                            <p className="text-white text-xl mb-6">Hit us up!</p>
                            <button className="bg-wander-yellow hover:bg-wander-yellow-hover text-black font-bold py-3 px-8 rounded-full transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;