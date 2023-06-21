import React, { useEffect } from 'react'
import { MainTitle, Main2Subtitld, ImageWrap
  
} from './styles/MaincomStylecomp'
import './MainComp2.css'

export const MainComp2 = () => {
  useEffect(()=>{
    function Scroll() {
        
    const intro = document.querySelector("#intro")

    // nav와 마찬가지로 일정 스크롤 이상시 서서히 나타나는 scrollon 적용
        if(window.scrollY>=200) {
        intro.classList.add("scrollon")
        }
        else {
        intro.classList.remove("scrollon")
        }
    }
    window.addEventListener("scroll",Scroll)
    return ()=> {
        window.removeEventListener("scroll",Scroll)
    }
},[])

  return (
    <div style={{backgroundColor : 'white', height : `100vh`, padding: '30px 0'}}>
      <MainTitle>
        <div className='main-wrap'>
          <div className='main-scroll' id='intro'>
            <div className='main-intro'>
              <h3 className='intro-title'>
                <span>M</span><span>ung </span>
                <span></span><span>and </span>
                <span>M</span><span>ore</span>
              </h3>
              </div>
            <Main2Subtitld>
              <div className='main-des'>
                <p>Mung&More는 강아지를 위한 종합 정보 플랫폼으로, </p>
                <p>산책로부터 강아지 상품까지 모두 제공합니다!</p>
              </div>
            </Main2Subtitld>
          </div>
        </div>
      </MainTitle>
      <div className='cursor-box'>
        <img 
        className='cursor'
        src="./img/cursor.png" 
        />
      </div>
      
            
        
      <ImageWrap>
        <img src="/img/main2dog.png" alt="" style={{width:"1500px"}}/>
      </ImageWrap>
    </div>
  )
}
