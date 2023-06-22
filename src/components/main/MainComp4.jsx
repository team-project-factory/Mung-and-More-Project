import React from 'react'
import { GoBtn, WalkWrap, TextInfo, MainInfoTitle, Main2Subtitld } from './styles/MaincomStylecomp';
import './MainComp4.css'

export const MainComp4 = () => {
  return (
    <div style={{backgroundColor : 'white', height : `90vh`, paddingTop: '250px'}}>
      <WalkWrap>
        <div className='main4-container'>
        <TextInfo>
          <MainInfoTitle>Do you want <br></br> to go for a walk?</MainInfoTitle>
          <Main2Subtitld style={{textAlign:'left'}}>
            산책로, 동물병원, 애견동반 카페까지! <br></br> 
            다양한 장소를 멍앤몰에서 찾아보세요.
          </Main2Subtitld>
          <a href='./location'>
          <GoBtn>
            Find a place
          </GoBtn>
          </a>
        </TextInfo>
        </div>
      </WalkWrap>
      <div className='container'>
      <div className="main">
      <div className="dog">
        <div className="dog__paws">
          <div className="dog__bl-leg leg">
            <div className="dog__bl-paw paw"></div>
            <div className="dog__bl-top top"></div>
          </div>
          <div className="dog__fl-leg leg">
            <div className="dog__fl-paw paw"></div>
            <div className="dog__fl-top top"></div>
          </div>
          <div className="dog__fr-leg leg">
            <div className="dog__fr-paw paw"></div>
            <div className="dog__fr-top top"></div>
          </div>
        </div>
        <div className="dog__body">
          <div className="dog__tail"></div>
        </div>
        <div className="dog__head">
          <div className="dog__snout">
            <div className="dog__nose"></div>
            <div className="dog__eyes">
              <div className="dog__eye-l"></div>
              <div className="dog__eye-r"></div>
            </div>
          </div>
        </div>
        <div className="dog__head-c">
          <div className="dog__ear-l"></div>
          <div className="dog__ear-r"></div>
        </div>
      </div>
    </div>
    </div>


    </div>
  )
}
