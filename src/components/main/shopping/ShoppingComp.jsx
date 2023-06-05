import React, { useEffect, useState } from 'react'
//firebase
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../../data/firebase';
//css
import style from'./shoppingcomp.module.scss'




export const ShoppingComp = () => {
  //버튼 배경색 변경
  const [btnBool1, setBtnBool1] = useState(true);
  const [btnBool2, setBtnBool2] = useState(false);
  const [btnBool3, setBtnBool3] = useState(false);
  const [btnBool4, setBtnBool4] = useState(false);
  // 아이템 state
  const [items, setitems] = useState('');

  const [printItems, setPrintItems] = useState('');

  //아이템 배열
  const itemList = [];

  //데이터 들고오기
  const getShoppingItems = async() =>{
    const querySnapshot = await getDocs(collection(db, "shopping_item"));
    querySnapshot.forEach((doc) => {
      itemList.push(...doc.data().itemlist);
      setitems(itemList);
      setPrintItems(itemList);
    });
  }
  useEffect(()=>{
    getShoppingItems();
  },[])


  //전체 버튼
  const active1 = () =>{
    setBtnBool1(true);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(false);
    getShoppingItems();
  }
  //의류 버튼
  const active2 = () =>{
    setBtnBool1(false);
    setBtnBool2(true);
    setBtnBool3(false);
    setBtnBool4(false);
    const newList = []
    const clothList = items.filter((c)=>(
      c.category === 'clothes'
    ));
    newList.push(...clothList);
    setPrintItems(newList);
  }
  //식품 버튼
  const active3 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(true);
    setBtnBool4(false);
    const newList = []
    const foodList = items.filter((c)=>(
      c.category === 'foods'
    ));
    newList.push(...foodList);
    setPrintItems(newList);
  }
  //장난감 버튼
  const active4 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(true);
    const newList = []
    const toyList = items.filter((c)=>(
      c.category === 'toys'
    ));
    newList.push(...toyList);
    setPrintItems(newList);
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
            {printItems && printItems.map((item)=>(
              <li key={item.name}>
                <div>
                  <div className={style.imgBox}></div>
                  <div className={style.textBox}>
                    <p>{item.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
