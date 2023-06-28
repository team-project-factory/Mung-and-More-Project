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
                DOG FOOD FESTA
                <br />
                <br />
                멍앤몰의 베스트 셀러 <br /> 강아지 간식들을 맛볼 수 있는 <br />
                최고의 페스티벌!
                <br />
                <br />
                이벤트 기간: 7/1 ~ 7/31
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img
              src="./img/event-img2.png"
              alt="Slide 2"
              style={{ objectFit: "fill" }}
            />
            <div className="image-overlay">
              <p>
                MUNG & MORE 애견 카페
                <br />
                <br />
                M&M 카페가 오픈했습니다!
                <br />
                목욕, 미용, 호텔, 용품 등 <br /> 멍앤몰이 제공하는 다양한 혜택을{" "}
                <br /> M&M 카페에서 즐겨 보세요.
                <br />
                <br />
                오픈 기념으로 최대 30% 할인 <br /> 이벤트 진행 중입니다.
                <br />
                <br />
                이벤트 기간: 7/14 ~ 7/24
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img
              src="./img/event-img3.png"
              alt="Slide 3"
              style={{ objectFit: "fill" }}
            />
            <div className="image-overlay">
              <p>
                댓글 참여 이벤트
                <br />
                <br />
                커뮤니티의 멍스타그램, 멍스뉴스 게시글에 댓글을 작성해 주세요!
                <br />
                <br />
                참여하신 분들께는 추첨을 통해 <br /> 강아지 용품을 선물하고
                있습니다. <br /> 많은 참여 부탁드려요!
                <br />
                <br />
                이벤트 기간: 항시 진행
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image">
            <img
              src="./img/event-img4.png"
              alt="Slide 4"
              style={{ objectFit: "cover" }}
            />
            <div className="image-overlay">
              <p>
                제품 리뷰 이벤트
                <br />
                <br />
                멍앤모어에서 구매하신 <br />
                제품의 리뷰를 작성해 주세요! <br />
                <br /> 베스트 리뷰를 작성자께는 <br />
                매월 추첨을 통해 <br /> 강아지 용품을 선물하고 있습니다. <br />{" "}
                많은 참여 부탁드려요!
                <br />
                <br />
                이벤트 기간: 항시 진행
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}
