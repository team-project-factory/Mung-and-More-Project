import React, { useState } from 'react';
import './eventListComp.css'

function EventListComp() {
  const [imageIndex, setImageIndex] = useState(0);

  // 아래 배열 묶음은 한 화면에 출력됨(3장씩)
  const images = [
    ["./img/post.jpg","./img/post1.jpg","./img/post2.jpg"],
    ["./img/login.png","./img/login2.png","./img/login3.png"],
    ["./img/login4.png","./img/login5.png","./img/login6.png"]
  ];

  function btnPrev() {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  
  function btnNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className='event-slide'>
      {images[imageIndex].map((image, index) => (
        <img
          key={index}
          className='event-slide-img'
          src={image}
          alt={`Image ${imageIndex + 1}`}
        />
      ))}
      <div className='slide-btn'>
        <button className='prev-btn' onClick={btnPrev}>{'<'}</button>
        <button className='next-btn' onClick={btnNext}>{'>'}</button>
      </div>
    </div>
  );
}

export default EventListComp;

