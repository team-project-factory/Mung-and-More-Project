import React from 'react'
import { MainComp } from '../../components/main/MainComp'
import { Nav } from '../../layout/Nav'

export const Main = () => {
  return (
    <div>
      <div style={{width : `100%`,position :'fixed', top:`50px`}}>
        <Nav/>
      </div>
        <MainComp/>
    </div>
  )
}
