import React from 'react'
import { MainTitle, Main2Subtitld, ImageWrap
  
} from './styles/MaincomStylecomp'

export const MainComp2 = () => {
  return (
    <div style={{backgroundColor : 'white', height : `100vh`, padding: '30px 0'}}>
      <MainTitle>Mung and More</MainTitle>
      <Main2Subtitld>
      Mung&More는 강아지를 위한 종합 정보 플랫폼으로, <br></br>산책로부터 강아지 상품까지 모두 제공합니다!
      </Main2Subtitld>
      <ImageWrap>
        <img src="/img/main2dog.png" alt="" style={{width:"1500px"}}/>
      </ImageWrap>
    </div>
  )
}
