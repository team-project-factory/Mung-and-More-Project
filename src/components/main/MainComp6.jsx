import React from 'react'
import { MainTitle, Main2Subtitld, GoBtn } from './styles/MaincomStylecomp';

export const MainComp6 = () => {
  return (
    <div style={{backgroundColor : 'white', height:'100vh', paddingTop: '100px', textAlign:'center'}}>
      <MainTitle style={{paddingTop : '300px'}}>You can find more information here.</MainTitle>
      <Main2Subtitld>
        FAQ, 공지사항 및 이벤트를 한 곳에서 확인해보세요!
      </Main2Subtitld>
      <a href="./notice">
      <GoBtn style={{marginTop:'110px'}}>
        Go to information
      </GoBtn>
      </a>
      <div style={{marginLeft:"30%"}}>
        <img src="/img/mainDog8.gif" style={{width:'600px', marginLeft:"545px",marginTop:"-180px"}} />
      </div>
    </div>
  )
}
