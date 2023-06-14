import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export const PaymentComp = () => {
  
  const [payList, setPayList] = useState('');

  const cartList = useSelector((state)=>(state.cartList));

  useEffect(()=>{
    if(cartList){
      setPayList(cartList);
    }
  },[]);

  if(payList){
    console.log(payList);
  }
  
  return (
    <div>PaymentComp</div>
  )
}
