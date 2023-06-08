import React from 'react'
import './instagramComp.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InstagramComp() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

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
                <Slider {...settings}>
                    <div>
                        <img  src="./img/post.jpg" style={{width:'360px'}}/>
                    </div>
                    <div>
                        <img  src="./img/post1.jpg" style={{width:'360px'}}/>
                    </div>
                    <div>
                        <img  src="./img/post2.jpg" style={{width:'360px'}}/>
                    </div>
                    <div>
                        <img  src="./img/post3.jpg" style={{width:'360px'}}/>
                    </div>
                    <div>
                        <img  src="./img/post4.jpg" style={{width:'360px'}}/>
                    </div>
                </Slider>
                
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
