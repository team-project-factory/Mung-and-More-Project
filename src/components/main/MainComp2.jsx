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
    <div style={{backgroundColor : 'white', minHeight : `108vh`, padding: '30px 0', position:'relative'}}>
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
                <p>Mung & More는 강아지 용품부터 함께 할 수 있는</p>
                <p>공간 정보, 보호자들을 위한 커뮤니티까지,</p>
                <p>강아지에게 필요한 모든 것을 제공합니다!</p>
                <p></p>
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
        <img src="/img/main2dog.png" alt="" style={{width:"1500px", marginTop:"30px"}}/>
      </ImageWrap>
    </div>
  )
}
