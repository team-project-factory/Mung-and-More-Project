import React, { useEffect } from 'react';
import { MainTitle } from './styles/MaincomStylecomp';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination]);

export const MainComp3 = () => {
  return (
    <div style={{ backgroundColor: '#CBECB5', height: '100vh', padding: '70px' }}>
      <MainTitle>Let’s go shopping together!</MainTitle>
      <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
      >
        <SwiperSlide>
          <div>1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>4</div>
        </SwiperSlide>
        <div className='allswiperbutton'>
          <div className='swiper-prev'>
            <img src={'/img/prevbtn.png'} alt="" />
          </div>
          <div className='swiper-next'>
            <img src={'/img/nextbtn.png'} alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
