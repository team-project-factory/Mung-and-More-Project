import React,{ useEffect, useRef } from 'react'

import { TitleCircle, DogCircle, WordContainer, WordSpan
  
} from './styles/MaincomStylecomp'

export const MainComp1 = () => {
  const wordRrf = useRef()
  
  useEffect(() => {
    console.log(wordRrf.current.childNodes)
    const spans = wordRrf.current.childNodes;

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });
  }, []);

  return (
    <div style={{minWidth : '1920px',height : `100vh`, overflow : "hidden", textAlign: 'center'}} >

      {/* <TitleCircle>
      <img src="/img/circle.png" alt=""  style={{width:"730px"}}/>
      </TitleCircle> */}
      
      <DogCircle>
        <img src="/img/maindog2.png" style={{width:"550px"}}/>
      </DogCircle>
      <WordContainer ref={wordRrf}>
        <WordSpan>M</WordSpan>
        <WordSpan>U</WordSpan>
        <WordSpan>N</WordSpan>
        <WordSpan>G</WordSpan>
        <WordSpan>&</WordSpan>
        <br />
        <WordSpan>M</WordSpan>
        <WordSpan>O</WordSpan>
        <WordSpan>R</WordSpan>
        <WordSpan>E</WordSpan>
      </WordContainer>
    </div>
  )
}