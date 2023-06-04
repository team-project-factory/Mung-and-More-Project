import React from 'react'
import { CommunityComp } from '../../components/main/community/CommunityComp'
import { Nav } from '../../layout/Nav'

export const Community = () => {
  return (
    <div>
      <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <CommunityComp/>
    </div>
  )
}
