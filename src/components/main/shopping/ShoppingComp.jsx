import React, { useEffect, useState } from 'react'
//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove, getDocs, collection, getDoc  } from "firebase/firestore";
import { db, auth } from '../../../data/firebase';

//css
import style from './shoppingcomp.module.scss';
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as redHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';





export const ShoppingComp = () => {
  const navigater = useNavigate();
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  //유저 uid 생성
  const [userUID, setUserUID] = useState('');
  //버튼 배경색 변경
  const [btnBool1, setBtnBool1] = useState(true);
  const [btnBool2, setBtnBool2] = useState(false);
  const [btnBool3, setBtnBool3] = useState(false);
  const [btnBool4, setBtnBool4] = useState(false);
  // 아이템 state
  const [items, setitems] = useState('');
  //아이템 출력할 state
  const [printItems, setPrintItems] = useState('');
  
  //좋아요 배열
  const [likeList, setLikeList] = useState('');
  const [newItemList, setNewItemList] = useState();



  //아이템 배열
  const itemList = [];
  
  
  //데이터 들고오기
  const getShoppingItems = async() =>{
    const querySnapshot = await getDocs(collection(db, "shopping_item"));
    querySnapshot.forEach((doc) => {
      itemList.push(...doc.data().itemlist);
    });
    const newItemList = itemList.sort((a,b)=> (a.name - b.name));
    setitems(newItemList);
    setPrintItems(newItemList);
  }
  
  //유저 기본 들고오기
  const getUser = () =>{
    onAuthStateChanged(auth, (user) => {
      if (user && userInfor) {
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
  //시작하자마자 shoppingItem, userUID 들고오기
  useEffect(()=>{
    getShoppingItems();
    getUser();
  },[]);
  
  //likelist 문서들고오기
  const getUserData = async() =>{
    const docRef = doc(db, "users", userUID); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const likeList = docSnap.data().likeList
      setLikeList(likeList);
    } 
    else {
      // docSnap.data() will be undefined in this case
    }
  }

  useEffect(()=>{
    if(userUID){
      getUserData();
    }
  },[userUID]);


  const handleNewItemList = () =>{
    if(items && likeList){
      const newList2 =[];
      items.forEach((i)=>{
        const newList = likeList.find((like)=>(i.name === like.name));
        if(newList){
          newList2.push(newList);
        }
        else{
          newList2.push(i);
        }
      })
      setNewItemList(newList2);
    }
  }

  useEffect(()=>{
    if(userUID && newItemList){
      setPrintItems(newItemList)
    }
  },[newItemList])




  //전체 버튼
  const active1 = () =>{
    setBtnBool1(true);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(false);
    if(newItemList){
      setPrintItems(newItemList);
    }
    else{
      setPrintItems(items);
    }
  }
  //의류 버튼
  const active2 = () =>{
    setBtnBool1(false);
    setBtnBool2(true);
    setBtnBool3(false);
    setBtnBool4(false);
    const newList = []

    if(newItemList){
      const clothList = newItemList.filter((c)=>(
        c.category === 'clothes'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
    else{
      const clothList = items.filter((c)=>(
        c.category === 'clothes'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
  }
  //식품 버튼
  const active3 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(true);
    setBtnBool4(false);
    const newList = []
    if(newItemList){
      const clothList = newItemList.filter((c)=>(
        c.category === 'foods'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
    else{
      const clothList = items.filter((c)=>(
        c.category === 'foods'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
  }
  //장난감 버튼
  const active4 = () =>{
    setBtnBool1(false);
    setBtnBool2(false);
    setBtnBool3(false);
    setBtnBool4(true);
    const newList = []
    if(newItemList){
      const clothList = newItemList.filter((c)=>(
        c.category === 'toys'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
    else{
      const clothList = items.filter((c)=>(
        c.category === 'toys'
      ));
      newList.push(...clothList);
      setPrintItems(newList);
    }
  }

  //좋아요 버튼
  const likeBtn = (item) =>{
    if(userUID){
      if(!item.like){
        const setLikeList = async() =>{
          const washingtonRef = doc(db, "users", userUID);
          item.like = !item.like ;
          await updateDoc(washingtonRef, {
            likeList: arrayUnion(item)
          });
        }
        setLikeList();
        alert('좋아요!');
      }
    }
    else{
      alert('로그인해주세요!');
      navigater('/login');
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
          <Outlet context = {items && items}/>
          <ul className={style.shoppingBox_itemList}>
            {printItems && printItems.map((item)=>(
              <li key={item.name}>
                <div className={style.card}>
                  <div className={style.imgBox}>
                      <div
                      className={style.likeBtn}
                      onClick={()=>likeBtn(item)}
                      >
                        {item.like ? <FontAwesomeIcon icon={redHeart} style={{fontSize:'1.5rem',color:'#FFAE21',cursor:'pointer'}}/>:<FontAwesomeIcon icon={faHeart} style={{fontSize:'1.5rem',cursor:'pointer'}}/>}
                      </div>
                    <div style={{backgroundImage:`url(${item.url})`
                    ,width:'200px',height:'150px', backgroundSize: '200px 150px', margin:'auto'}}>
                    </div>
                  </div>
                  <ul className={style.textBox}>
                    <li>
                      <p>{item.name}</p><br/>
                      <p>{item.price}&#8361;</p>
                    </li>
                    <li>
                    {
                      userInfor ? <Link to={`/shopping/${item.name}`}>
                        <span
                        style={{cursor:'pointer'}}
                        >장바구니</span>
                      </Link>
                      :
                      <span
                        onClick={()=>{alert('로그인 해주세요!'); navigater('/login')}}
                        style={{cursor:'pointer'}}
                        >장바구니</span>
                    }
                    </li>
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
