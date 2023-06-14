import React from "react";

// 이미지 슬라이더에 필요한 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// css import
import "./eventListComp.css";

export default function App() {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={300}
        grabCursor={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/event-img1.png" alt="Slide 1" />
            <div className="image-overlay">
              <p>이벤트 상세 설명</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/post.jpg" alt="Slide 2" />
            <div className="image-overlay">
              <p>Text 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/post.jpg" alt="Slide 3" />
            <div className="image-overlay">
              <p>Text 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/post.jpg" alt="Slide 4" />
            <div className="image-overlay">
              <p>Text 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/post.jpg" alt="Slide 5" />
            <div className="image-overlay">
              <p>Text 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/post.jpg" alt="Slide 6" />
            <div className="image-overlay">
              <p>Text 1</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}
