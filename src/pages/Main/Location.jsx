import React from 'react'
import { LocationComp } from '../../components/main/loaction/LocationComp'
import { Nav } from '../../layout/Nav'


export const Location = () => {
  return (
    <div>
      <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <LocationComp/>
    </div>
  )
}
