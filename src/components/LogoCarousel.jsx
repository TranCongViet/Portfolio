import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { skillLogos } from '../constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export const LogoCarousel = () => {
  return (
    <div className="w-[1000px] p-10 flex justify-center mx-auto ">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={6}
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
      >
        {skillLogos.map((logo, index) => {
          console.log(logo.src);
          return (
            <SwiperSlide key={index}>
              <div className="w-20 h-20 md:w-20 md:h-20 p-3 cursor-pointer backdrop-blur-sm rounded-lg border border-purple/20 hover:border-purple/60 transition-all duration-300">
                <img
                  src={logo.src}
                  // alt={typeof logo === 'string' ? `Skill ${index + 1}` : logo.alt}
                  className="w-full object-contain "
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
