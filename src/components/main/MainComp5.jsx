import React from 'react'
import { CommuWrap, TextInfo,MainInfoTitle, Main2Subtitld, GoBtn } from './styles/MaincomStylecomp';

export const MainComp5 = () => {
  return (
    <div style={{backgroundColor : '#FFCB72', height : `100vh`, paddingTop: '230px'}}>
      <CommuWrap>
        <TextInfo>
        <MainInfoTitle>Everything<br></br>about dogs!</MainInfoTitle>
          <Main2Subtitld style={{textAlign:'left'}}>
          멍앤몰에서만 가능한 특별한 경험을 만나보세요!<br></br>
          자랑스러운 강아지를 공유하고, 강아지에 관한 놀라운 <br></br>사실들을 확인할 수 있습니다. 
          </Main2Subtitld>
          <GoBtn>
            Going to share
          </GoBtn>
        </TextInfo>
        <div>
          <img src="/img/mainpost.png" width={'580px'} />
        </div>
      </CommuWrap>
    </div>
  )
}
