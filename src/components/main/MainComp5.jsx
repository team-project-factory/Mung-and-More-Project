import React from 'react'
import { CommuWrap, TextInfo,MainInfoTitle, Main2Subtitld, GoBtn } from './styles/MaincomStylecomp';
import './MainComp5.css'

export const MainComp5 = () => {
  
  return (
    <div style={{backgroundColor : '#FFCB72', height : `100vh`, paddingTop: '230px'}}>
        <div className="wrapper">
          <div className="focus">
            Everything
          </div>
          <div className="mask">
            <div className="text">Everything</div>
          </div>
        </div>
      <CommuWrap>
        <TextInfo>
        <MainInfoTitle>
          <br></br>about dogs!
          </MainInfoTitle>
          <Main2Subtitld style={{textAlign:'left'}}>
          멍앤몰에서만 가능한 특별한 경험을 만나보세요!<br></br>
          자랑스러운 강아지를 공유하고, 강아지에 관한 놀라운 <br></br>사실들을 확인할 수 있습니다. 
          </Main2Subtitld>
          <a href="./community">
          <GoBtn>
            Going to share
          </GoBtn>
          </a>
        </TextInfo>
        <div>
          <img src="/img/mainDogPost.png" width={'580px'} />
          <video src='./dogVideo.mp4' id="main-slide-video" autoPlay muted loop width="510px"
          style={{position:"absolute", left:"995px", top:"5180px", height:"490px"}}>
        </video>
        </div>
      </CommuWrap>
    </div>
  )
}
