import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { skillLogos } from '../constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export const LogoCarousel = () => {
  return (
    <div className="mx-auto flex w-[300px] justify-center p-10 sm:w-[600px] md:w-[800px] lg:w-full">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: '0',
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true, // chạy ngược (từ phải sang trái)
        }}
        speed={3000}
        freeMode={{ enabled: true, momentum: true, sticky: false }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {skillLogos.map((logo, index) => {
          console.log(logo.src);
          return (
            <SwiperSlide key={index}>
              <div className="border-purple/20 hover:border-purple/60 h-20 w-20 cursor-pointer rounded-lg border bg-gray-800 p-3 backdrop-blur-sm transition-all duration-300 md:h-20 md:w-20">
                <img
                  src={logo.src}
                  // alt={typeof logo === 'string' ? `Skill ${index + 1}` : logo.alt}
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
