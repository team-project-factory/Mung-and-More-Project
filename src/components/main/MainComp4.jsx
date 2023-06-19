import React from 'react'
import { GoBtn, WalkWrap, TextInfo, MainInfoTitle, Main2Subtitld } from './styles/MaincomStylecomp';


export const MainComp4 = () => {
  return (
    <div style={{backgroundColor : 'white', height : `100vh`, paddingTop: '250px'}}>
      <WalkWrap>
        <div className='img'>
          <img src="/img/walkdog.png" />
        </div>
        <TextInfo>
          <MainInfoTitle>Do you want <br></br> to go for a walk?</MainInfoTitle>
          <Main2Subtitld style={{textAlign:'left'}}>
            산책로, 동물병원, 애견동반 카페까지 <br></br> 
            한번에 찾는게 가능한 페이지임을 강조하는 문구
          </Main2Subtitld>
          <GoBtn>
            Find a place
          </GoBtn>
        </TextInfo>
        
      </WalkWrap>
    </div>
  )
}
