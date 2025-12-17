import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TripSlider = ({ slides, title, subtitle, videoSrc, isDealSlider = false }) => {
  return (
    <section className="container mx-auto px-4 mb-16 relative">
      {/* Header Section (With optional Video Background) */}
      {(title || subtitle) && (
        <div className="relative mb-8 text-center md:text-left z-20 rounded-xl overflow-hidden">
             {videoSrc && (
                <div className="absolute inset-0 w-full h-[550px] -z-10">
                    <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
            )}
            
            <div className={`py-10 ${videoSrc ? 'text-white px-8 h-[550px]' : 'flex flex-col items-center'}`}>
                {/* Title */}
                <h2 className={`text-4xl font-bold italic font-[var(--font-cormorant)] mb-2 ${!videoSrc ? 'text-[var(--wander-teal)]' : ''}`}>
                    {title}
                </h2>
                
                {/* Subtitle */}
                {subtitle && <p className="text-xl">{subtitle}</p>}
                
                {/* Underline for non-video sections */}
                {!videoSrc && <div className="w-24 h-1 bg-[var(--wander-yellow)] mt-4"></div>}

                {/* Swiper logic for Video Sections (It sits inside the video container in original design) */}
                {videoSrc && (
                    <div className="mt-20 md:mt-32">
                         <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 5 },
                            }}
                            className="w-full h-[350px] md:h-[400px]"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="group relative rounded-xl overflow-hidden cursor-pointer">
                                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0">
                                        <h3 className="text-white text-xl font-bold leading-tight">{slide.title}</h3>
                                        <p className="text-gray-200 text-sm mt-1">{slide.price}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
      )}

      {/* Swiper logic for "Deals" (Standard Section) */}
      {!videoSrc && (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={false}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="w-full h-[350px] rounded-xl overflow-hidden"
        >
            {slides.map((slide, index) => (
            <SwiperSlide key={index} className="group relative rounded-xl overflow-hidden cursor-pointer">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity">
                    <p className="text-[var(--wander-yellow)] font-bold uppercase text-sm mb-1">Sale</p>
                    <h3 className="text-white text-xl font-bold leading-tight">{slide.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{slide.price}</p>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      )}
    </section>
  );
};

export default TripSlider;