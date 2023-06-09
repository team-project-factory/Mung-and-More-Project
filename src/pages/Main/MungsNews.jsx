import React from 'react'
import { MungsNewsComp } from '../../components/main/community/mungsNews/MungsNewsComp'
import { Nav } from '../../layout/Nav'

export const MungsNews = () => {
  return (
    <div>
      <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <MungsNewsComp/>
    </div>
  )
}

