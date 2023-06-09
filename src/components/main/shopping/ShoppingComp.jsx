import React, { useEffect, useState } from 'react'
//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove, getDocs, collection, getDoc  } from "firebase/firestore";
import { db, auth } from '../../../data/firebase';
//css
import style from'./shoppingcomp.module.scss'




export const ShoppingComp = () => {
  //유저 uid 생성
  const [userUID, setUserUID] = useState('')
  //버튼 배경색 변경
  const [btnBool1, setBtnBool1] = useState(true);
  const [btnBool2, setBtnBool2] = useState(false);
  const [btnBool3, setBtnBool3] = useState(false);
  const [btnBool4, setBtnBool4] = useState(false);
  // 아이템 state
  const [items, setitems] = useState('');
  //아이템 출력할 state
  const [printItems, setPrintItems] = useState('');

  //유저likelist state
  const [userLike, setUserLike] = useState([]);


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
  //문서들고오기
  const getUserData = async() =>{
    const docRef = doc(db, "users", userUID); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const likeList = docSnap.data().likeList
      setUserLike(likeList);
    } 
    else {
      // docSnap.data() will be undefined in this case
    }
  }
  
  //유저 기본 들고오기
  const getUser = () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUserUID(uid);
        //유저 firestore 데이터 들고오기
        
    } 
    else {
    // User is signed out
    // ...
    }
    });
  }

  useEffect(()=>{
    getShoppingItems();
    getUser();
  },[])

  useEffect(()=>{
    if(userUID){
      getUserData();
    }
  },[userUID])

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

  
  
  console.log(userLike);
  
  //좋아요 버튼
  const likeBtn = (item) =>{
    //userLike가 있으면 객체를 찾아달라
    const washingtonRef = doc(db, "users", userUID);
    //로그인 되어있으면 좋아요 누를시 likeList배열에 객체 추가
    if(userUID){
      const likeItem = item;
      likeItem.like = true;
      const arrayAddData = async() =>{
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
          likeList: arrayUnion(likeItem)
        });
      }
      arrayAddData();
    }
    else{

    }
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
                <div className={style.card}>
                  <div className={style.imgBox}>
                    <div
                    className={style.likeBtn}
                    onClick={()=>likeBtn(item)}
                    >{item.like ? `하트`:`빈하트`}
                    </div>
                  </div>
                  <ul className={style.textBox}>
                    <li>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </li>
                    <li>장바구니</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
