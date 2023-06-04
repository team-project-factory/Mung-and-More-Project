import React from 'react'
import { ShoppingComp } from '../../../components/main/shopping/ShoppingComp'
import { Nav } from '../../../layout/Nav'


export const Shopping = () => {
  return (
    <div>
      <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <ShoppingComp/>
    </div>
  )
}
