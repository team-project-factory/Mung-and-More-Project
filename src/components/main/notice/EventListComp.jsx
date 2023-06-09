import React from 'react'
import Slider from 'react-slick';
import './eventListComp.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function EventListComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode : true,
    centerPadding : 0
  };

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick}>
        &lt;
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick}>
        &gt;
      </button>
    );
  }


  return (
    <div>
      <h2>슬라이더 예제</h2>
        <Slider {...settings}>
            <div>
              <img className='imgBox' src="./img/post.jpg" />
            </div>
            <div>
              <img className='imgBox' src="./img/post.jpg" />
            </div>
            <div>
              <img className='imgBox' src="./img/post.jpg" />
            </div>
            <div>
              <img className='imgBox' src="./img/post.jpg" />
          </div>
        </Slider>
    </div>
  )
}
