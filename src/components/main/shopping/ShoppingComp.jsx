import React, { useState } from 'react'
import style from'./shoppingcomp.module.scss'

export const ShoppingComp = () => {
  //버튼 배경색 변경
  const [btnBool1, setBtnBool1] = useState(true);
  const [btnBool2, setBtnBool2] = useState(false);
  const [btnBool3, setBtnBool3] = useState(false);
  const [btnBool4, setBtnBool4] = useState(false);


  //전체 버튼
  const active1 = () =>{
    setBtnBool1(true);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(false);
  }
  //의류 버튼
  const active2 = () =>{
    setBtnBool1(false);
    setBtnBool2(true);
    setBtnBool3(false);
    setBtnBool4(false);
  }
  //식품 버튼
  const active3 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(true);
    setBtnBool4(false);
  }
  //장난감 버튼
  const active4 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(true);
  }


  return (
    <div className={style.shopping_backgrd}>
      <div className={style.shoppingBox}>
        <ul className={style.shoppingBox_menu}>
          <li className={btnBool1 ? style.active : ''}
          onClick={active1}
          >전체</li>
          <li className={btnBool2 ? style.active : ''}
          onClick={active2}
          >의류</li>
          <li className={btnBool3 ? style.active : ''}
          onClick={active3}
          >식품</li>
          <li className={btnBool4 ? style.active : ''}
          onClick={active4}
          >장난감</li>
        </ul>
        <div>
          <ul className={style.shoppingBox_itemList}>
            <li>상품1</li>
            <li>상품2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
