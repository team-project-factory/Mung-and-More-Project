import React, { useEffect, useRef } from 'react';
import {
  TitleCircle,
  DogCircle,
  WordContainer,
  WordSpan, Container, Cursor, TitleHover
} from './styles/MaincomStylecomp';

export const MainComp1 = () => {
  
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const title = document.querySelector('.title h1');
  
    const handleMouseOverTitle = () => {
      cursor.classList.add('cursor--hover');
    };
  
    const handleMouseOutTitle = () => {
      cursor.classList.remove('cursor--hover');
    };
  
    if (title) {
      title.addEventListener('mouseover', handleMouseOverTitle);
      title.addEventListener('mouseout', handleMouseOutTitle);
    }
  
    return () => {
      if (title) {
        title.removeEventListener('mouseover', handleMouseOverTitle);
        title.removeEventListener('mouseout', handleMouseOutTitle);
      }
    };
  }, []);
  const wordRef = useRef();

  useEffect(() => {
    const spans = wordRef.current.childNodes;

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
    <div style={{minHeight: '100vh', overflow: 'hidden', textAlign: 'center'}}>
      
      {/* <TitleCircle>
        <img src="/img/circle.png" alt="" style={{ width: '730px' }} />
      </TitleCircle> */}
      <DogCircle>
        <div style={{position:"absolute", right:"300px", bottom:"275px"}}>
          <img src={process.env.PUBLIC_URL + "/img/mainDog7.gif"} style={{ width: '250px'}} />
        </div>
        <div style={{position:"absolute", right:"1150px", bottom:"10px"}}>
          <img src={process.env.PUBLIC_URL + "/img/mainDog55.gif"} style={{width:'800px'}} />
        </div>
      </DogCircle>
      <div class="cursor">
  <div class="cursor__inner"></div>
</div>
      <WordContainer ref={wordRef}>
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
  );
};
