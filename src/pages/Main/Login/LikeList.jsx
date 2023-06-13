import React from 'react'
import { LikeListComp } from '../../../components/main/login/likelist/LikeListComp'
import { Nav } from '../../../layout/Nav'

export const LikeList = () => {
  return (
    <div>
      <div style={{ width: `100%`, position: `relative`, top: '50px' }}>
        <Nav />
      </div>
      <LikeListComp />
    </div>
  )
}
