import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/logo1.png',
  '/logo2.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
];

export default function SwiperMarqueeExample() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 0, // không delay giữa các slide
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={3000} // tốc độ chuyển slide (ms)
      freeMode={true} // cho phép chạy tự do, tạo cảm giác liền mạch hơn
      freeModeMomentum={false}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`logo-${index}`} className="w-20 h-20" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
