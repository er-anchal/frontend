import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Pass in data and specific config props
const TripSlider = ({ slides, title, subtitle, videoSrc, isDealSlider = false }) => {
  return (
    <section className="container mx-auto px-4 mb-16 relative">
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="relative mb-8 text-center md:text-left z-20">
             {videoSrc && (
                <div className="absolute inset-0 w-full h-125 -z-10 rounded-xl overflow-hidden">
                    <video src={videoSrc} autoPlay loop muted className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
                </div>
            )}
            
            <div className={`py-10 ${videoSrc ? 'text-white px-8' : 'text-wander-teal flex flex-col items-center'}`}>
                <h2 className="text-4xl font-bold italic font-cormorant mb-2">{title}</h2>
                {subtitle && <p className="text-xl">{subtitle}</p>}
                {!videoSrc && <div className="w-24 h-1 bg-wander-yellow mt-4"></div>}
            </div>
        </div>
      )}

      {/* Swiper */}
      <div className={`${videoSrc ? 'translate-y-25 px-4' : ''}`}>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={isDealSlider ? false : { delay: 3000 }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: isDealSlider ? 3 : 4 },
                1280: { slidesPerView: isDealSlider ? 3 : 5 },
            }}
            className="w-full h-8705 md:h-100 rounded-xl overflow-hidden"
        >
            {slides.map((slide, index) => (
            <SwiperSlide key={index} className="group relative rounded-xl overflow-hidden cursor-pointer">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Overlay & Text */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-6">
                {isDealSlider && <p className="text-wander-yellow font-bold uppercase text-sm mb-1">Sale</p>}
                <h3 className="text-white text-xl font-bold leading-tight">{slide.title}</h3>
                {slide.price && <p className="text-gray-200 text-sm mt-1">{slide.price}</p>}
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TripSlider;