import React, { useState } from 'react'
import './instagramComp.css'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InstagramComp() {
    const [imageIndex, setImageIndex] = useState(0);

  const images = ["./img/login.png","./img/login2.png","./img/login3.png","./img/login4.png","./img/login5.png"];

  function btnPrev() {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  
  function btnNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

return (
    <div className='body'>
        <div className='card'>
            <div className='top'>
                <div className='userDetails'>
                    <div className='profile_img'>
                        <img src="./img/logo.png" className='logo'/>
                    </div>
                    <h3>우리 강아지 자랑글 <br /><span>부산, 서면</span></h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEllipsisVertical} size='2xl' className='dot' />
                </div>
            </div>
            <div className='imgBx'>
            <img
                className='event-slide-img'
                src={images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
                style={{width:'340px'}}
            />

        <div className='slide-btn'>
            <button className='prev-btn' onClick={btnPrev}>{'<'}</button>
            <button className='next-btn' onClick={btnNext}>{'>'}</button>
        </div>
                
            </div>
            <div className='actionBtns'>
                <div className='left'>
                    <FontAwesomeIcon icon={faHeart} size="2xl" color='red' className='heart'/>
                    <FontAwesomeIcon icon={faComment} size="2xl" flip='horizontal' className='comment'/>
                    <FontAwesomeIcon icon={faPaperPlane} size="2xl" className='share'/>
                    
                </div>
                <div className='right'>
                <FontAwesomeIcon icon={faBookmark} size="2xl" />
                </div>
            </div>
                <h4 className='likes'>2,800 likes</h4>
                <h4 className='message'><b>우리 강아지 자랑글1</b> 자랑글 예시내용입니다@@ ( 위의 사진과는 무관함) <span>#멈무1</span><span>#멈무2</span><span>#멈무3</span></h4>
        </div>
        
    </div>
  )
}
