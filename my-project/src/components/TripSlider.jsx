import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TripSlider = ({ slides, title, subtitle, videoSrc, isDealSlider = false }) => {
  return (
    <section className="container mx-auto px-4 mb-32 relative">
      {/* Full Hero Section with Video Background */}
      {(title || subtitle) && videoSrc && (
        <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Video Background */}
          <video 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

          {/* Content Section - Left Side */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
            {/* Top Content */}
            <div className="flex flex-col justify-start">
              <h2 className="text-5xl md:text-6xl font-bold text-white italic font-[var(--font-cormorant)] mb-4 max-w-lg leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-gray-100 max-w-md">
                {subtitle}
              </p>
            </div>

            {/* Explore Button */}
            <div className="flex">
              <button className="bg-[var(--wander-yellow)] text-black font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base">
                Explore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Swiper Cards - Positioned Below/Overlapping Video */}
      {videoSrc && (
        <div className="-mt-24 relative z-10 px-4 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="
              w-full 
              [&_.swiper-pagination-bullet]:!bg-white/40
              [&_.swiper-pagination-bullet-active]:!bg-white
              [&_.swiper-pagination]:!pb-0 [&_.swiper-pagination]:!mb-4
            "
          >
            {slides.map((slide, index) => (
              <SwiperSlide 
                key={index} 
                className="pb-8"
              >
                <div className="group relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Card Image */}
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  
                  {/* Card Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-medium">
                      {slide.price}
                    </p>
                  </div>

                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-3xl">→</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons - Video Mode */}
            <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 z-50 md:left-4 lg:left-0 cursor-pointer group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 group-hover:bg-white/50 flex items-center justify-center transition-all duration-300 shadow-lg">
                <FaChevronLeft className="text-white text-lg md:text-xl" />
              </div>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 z-50 md:right-4 lg:right-0 cursor-pointer group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 group-hover:bg-white/50 flex items-center justify-center transition-all duration-300 shadow-lg">
                <FaChevronRight className="text-white text-lg md:text-xl" />
              </div>
            </div>
          </Swiper>
        </div>
      )}

      {/* Standard Slider for Non-Video Sections */}
      {!videoSrc && (
        <div>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[var(--wander-teal)] italic font-[var(--font-cormorant)] mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
            )}
            <div className="w-24 h-1 bg-[var(--wander-yellow)] mx-auto"></div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-deals',
              prevEl: '.swiper-button-prev-deals',
            }}
            pagination={{ clickable: true }}
            autoplay={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="
              w-full relative
              [&_.swiper-pagination-bullet]:!bg-gray-300
              [&_.swiper-pagination-bullet-active]:!bg-black
            "
          >
            {slides.map((slide, index) => (
              <SwiperSlide 
                key={index} 
                className="pb-10"
              >
                <div className="group relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-[var(--wander-yellow)] font-bold uppercase text-xs mb-2 tracking-wider">
                      Sale
                    </p>
                    <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-medium">
                      {slide.price}
                    </p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-3xl">→</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons - Deals Mode */}
            <div className="swiper-button-prev-deals absolute top-1/2 -translate-y-1/2 left-4 z-50 cursor-pointer group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 group-hover:bg-black flex items-center justify-center transition-all duration-300 shadow-lg">
                <FaChevronLeft className="text-white text-lg md:text-xl" />
              </div>
            </div>
            <div className="swiper-button-next-deals absolute top-1/2 -translate-y-1/2 right-4 z-50 cursor-pointer group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 group-hover:bg-black flex items-center justify-center transition-all duration-300 shadow-lg">
                <FaChevronRight className="text-white text-lg md:text-xl" />
              </div>
            </div>
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default TripSlider;
