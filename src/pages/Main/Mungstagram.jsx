import React from 'react'
import { MungstagramComp } from '../../components/main/community/mungstagram/MungstagramComp'
import { Nav } from '../../layout/Nav'

export const Mungstagram = () => {
  return (
    <div>
      <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <MungstagramComp/>
    </div>
  )
}
