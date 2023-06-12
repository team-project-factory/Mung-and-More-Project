import React from 'react'
import { CartListComp } from '../../../../components/main/login/cartlist/CartListComp'
import { Nav } from '../../../../layout/Nav'

export const CartList = () => {
  return (
    <div>
      <div style={{ width: `100%`, position: `relative`, top: '50px' }}>
        <Nav />
      </div>
      <CartListComp />
    </div>
  )
}
