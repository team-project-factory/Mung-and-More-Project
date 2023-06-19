import React from 'react'
import { CommuWrap, TextInfo,MainInfoTitle, Main2Subtitld, GoBtn } from './styles/MaincomStylecomp';

export const MainComp5 = () => {
  return (
    <div style={{backgroundColor : '#FFCB72', height : `100vh`, paddingTop: '230px'}}>
      <CommuWrap>
        <TextInfo>
        <MainInfoTitle>Everything<br></br>about dogs!</MainInfoTitle>
          <Main2Subtitld style={{textAlign:'left'}}>
          멍앤몰 사이트에서만 가능한  내 강아지 자랑하기,<br></br>
          강아지에 관한 몰랐던 사실들을 확인 가능하다는 문구
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
