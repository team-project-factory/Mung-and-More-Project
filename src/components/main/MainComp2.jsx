import React from 'react'
import { MainTitle, Main2Subtitld, ImageWrap
  
} from './styles/MaincomStylecomp'

export const MainComp2 = () => {
  return (
    <div style={{backgroundColor : 'white', height : `100vh`, padding: '30px 0'}}>
      <MainTitle>Mung and More</MainTitle>
      <Main2Subtitld>
        Mung&More 웹 사이트에 관한 간단한 소개를 두 줄 정도 기재
      </Main2Subtitld>
      <ImageWrap>
        <img src="/img/main2.png" alt="" style={{width:"1630px"}}/>
      </ImageWrap>
    </div>
  )
}
