import React, { useEffect, useState } from 'react'
import { MainComp1 } from '../../components/main/MainComp1'
import { MainComp2 } from '../../components/main/MainComp2'
import { MainComp3 } from '../../components/main/MainComp3'
import { MainComp4 } from '../../components/main/MainComp4'
import { MainComp5 } from '../../components/main/MainComp5'
import { MainComp6 } from '../../components/main/MainComp6'
import { Nav } from '../../layout/Nav'
import './Main.css'

export const Main = () => {

  // 아래는 스크롤 Y축 1300 이상일 때만 TOP버튼이 나오게 하는 설정
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    const showTopButton = scrollY >= 1300;


  return (
    <div style={{backgroundColor: `#C2DCF4`}}>
      <div>
        <div style={{width : `100%`,position :'sticky', top:'50px', paddingBottom: "100px", zIndex:"100"}}>
          <Nav/>
        </div>
        <MainComp1/>
      </div>
      <MainComp2/> 
      <MainComp3/>
      <MainComp4/>
      <MainComp5/>
      <MainComp6/>
      {showTopButton && 
      <a href="#" className='page-top'>TOP</a>
      }
    </div>
  )
}
