import React from 'react'
import './instagramComp.css'

export default function InstagramComp() {
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
                    <img src="./img/icon3.png" className='dot' />
                </div>
            </div>
            <div className='imgBx'>
                <img src="./img/insta1.png" className='cover'/>
            </div>
        </div>
    </div>
  )
}
