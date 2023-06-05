import React from "react";
import Swiper from "swiper";
import "./EventListComp.scss";
import styled from "styled-components";

export default function EventListComp() {
  React.useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      initialSlide: 2,
      speed: 1000,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      roundLengths: true,
      mousewheel: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  const Event = styled.div`
    display: flex;
    margin: auto;
    height: 100vh;
    width: 100%;
    display: flex;
    font-family: "Montserrat", sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Event>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1548549557-dbe9946621da?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <article className="slide-content">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                molestias itaque reiciendis et excepturi odit eligendi cum eaque
                ad culpa, numquam corrupti rem praesentium, earum beatae
                temporibus nulla voluptates laudantium!
              </p>
              <footer>
                <div>01/02</div>
                <a href="#">READ MORE</a>
              </footer>
            </article>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1508350552147-213c11fcede6?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1551310357-b26c1af069c6?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <article className="slide-content">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                molestias itaque reiciendis et excepturi odit eligendi cum eaque
                ad culpa, numquam corrupti rem praesentium, earum beatae
                temporibus nulla voluptates laudantium!
              </p>
              <footer>
                <div>02/02</div>
                <a href="#">READ MORE</a>
              </footer>
            </article>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&h=500&q=70&fit=crop&crop=faces)",
              }}
            ></div>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </Event>
  );
}
