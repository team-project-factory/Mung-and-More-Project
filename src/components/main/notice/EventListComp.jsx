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
              <p>
                멍앤몰에서 제공하는 다양한 간식들을 맛볼 수 있는 절호의 찬스! 
                Food Festa는 7월 한달간 진행합니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/event-img2.png" alt="Slide 2" style={{objectFit:"fill"}} />
            <div className="image-overlay">
              <p>
                멍앤몰에서 M & M 카페를 오픈했습니다!
                목욕,미용,호텔,용품 등 멍앤몰에서 제공하는 다양한 혜택을
                즐겨보세요 오픈 이벤트는 추후 공지 예정입니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/event-img3.png" alt="Slide 3" style={{objectFit:"fill"}}/>
            <div className="image-overlay">
              <p>
                멍앤몰 게시글 및 뉴스 게시물에 댓글을 작성해주세요
                추첨을 통해 애견 소품을 증정하고있습니다
                많은 참여 부탁드려요!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img src="./img/event-img4.png" alt="Slide 4" style={{objectFit:"cover"}}/>
            <div className="image-overlay">
              <p>
                멍앤몰에서 판매중인 제품들의 리뷰를 게시글로 남겨주세요
                추첨을 통해 애견 소품을 증정하고있습니다
                많은 참여 부탁드려요!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}
