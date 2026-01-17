import React from "react";

const TripCard = ({ slide, variant = "standard" }) => {
  const isDeal = variant === "deal";
  const isVideo = variant === "video"; // with-video swiper ke liye

  return (
    <div className="group relative h-[240px] sm:h-[260px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          isDeal
            ? "bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.75)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(0,0,0,0)_70%,rgba(0,0,0,0.67)_100%)]"
        }`}
      />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end w-full p-4 md:p-6 transition-opacity duration-300
        ${isVideo ? "items-center text-center" : "items-start text-left"}
        ${!isDeal ? "group-hover:opacity-0" : ""}`}
      >
        {isDeal && (
          <p className="text-[var(--wander-yellow)] font-bold uppercase text-xs mb-1 md:mb-2 tracking-wider group-hover:opacity-0 transition-opacity">
            Sale
          </p>
        )}

        <h3
          className={`text-white text-lg md:text-2xl font-bold leading-tight mb-1 md:mb-2 ${
            isDeal ? "group-hover:opacity-0" : ""
          }`}
        >
          {slide.title}
        </h3>

        <p
          className={`text-white text-xs md:text-sm font-medium ${
            isDeal ? "group-hover:opacity-0" : ""
          }`}
        >
          {slide.price}
        </p>
      </div>

      {/* Deal Specific Hover Overlay (Arrow) */}
      {isDeal && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-2xl md:text-3xl">→</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripCard;
