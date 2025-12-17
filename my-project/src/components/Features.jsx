import React from 'react';
import { featuresData } from '../data';

const Features = () => {
    return (
        <section className="container mx-auto px-4 mb-20">
            <div className="text-center mb-12">
                <p className="text-xl italic text-gray-500 font-[var(--font-cormorant)]">Why WanderOn?</p>
                <h2 className="text-4xl font-bold text-[var(--wander-teal)] mt-2">
                    WanderOn’s Secret Sauce
                </h2>
                <div className="w-20 h-1 bg-[var(--wander-yellow)] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuresData.map((card, idx) => (
                    <div key={idx} className="relative group rounded-xl overflow-hidden aspect-[5/6] shadow-lg cursor-pointer">
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                            <h3 className="text-[var(--wander-teal)] font-bold text-xl mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-800 text-sm">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;