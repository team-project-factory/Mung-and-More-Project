import React from 'react'
import { PaymentComp } from '../../../../components/main/login/cartlist/payment/PaymentComp'
import { Nav } from '../../../../layout/Nav'

export const Payment = () => {
  return (
    <div>
      <div style={{ width: `100%`, position: `relative`, top: '50px' }}>
        <Nav/>
      </div>
      <PaymentComp/>
    </div>
  )
}
