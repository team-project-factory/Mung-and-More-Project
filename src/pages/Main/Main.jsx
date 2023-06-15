import React from 'react'
import { MainComp1 } from '../../components/main/MainComp1'
import { MainComp2 } from '../../components/main/MainComp2'
import { MainComp3 } from '../../components/main/MainComp3'
import { MainComp4 } from '../../components/main/MainComp4'
import { MainComp5 } from '../../components/main/MainComp5'
import { MainComp6 } from '../../components/main/MainComp6'
import { Nav } from '../../layout/Nav'

export const Main = () => {
  return (
    <div style={{backgroundColor: `#C2DCF4`}}>
      <div>
        <div style={{width : `100%`,position :'sticky', top:'50px', zIndex:"100", paddingBottom: "100px"}}>
          <Nav/>
        </div>
        <MainComp1/>
      </div>
      <MainComp2/>
      <MainComp3/>
      <MainComp4/>
      <MainComp5/>
      <MainComp6/>
    </div>
  )
}
