import React from 'react'
import { MainTitle, Main2Subtitld, GoBtn } from './styles/MaincomStylecomp';

export const MainComp6 = () => {
  return (
    <div style={{backgroundColor : 'white', height:'100vh', paddingTop: '100px', textAlign:'center'}}>
      <MainTitle style={{paddingTop : '300px'}}>You can find more information here.</MainTitle>
      <Main2Subtitld>
        FAQ, 공지사항 및 이벤트를 확인 가능하다는 문구 한줄로 작성
      </Main2Subtitld>
      <GoBtn style={{marginTop:'110px'}}>
        Go to information
      </GoBtn>
    </div>
  )
}
