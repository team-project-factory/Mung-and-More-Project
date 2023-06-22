import React, { useEffect, useState } from 'react'
//firebase
import { onAuthStateChanged } from "firebase/auth";
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
  const [btn, setBtn] = useState('');

  // 아이템 state
  const [items, setitems] = useState('');
  // 유저 아이템
  const [items2, setitems2] = useState('');
  
  //유저 좋아요 배열
  const [likeList, setLikeList] = useState('');
  const [newItemList, setNewItemList] = useState();

  const printArray = userInfor ? items2 : items ;
  const printArray2 = btn ? printArray.filter((p)=>(p.category === btn)) : printArray ;


  console.log(printArray2);


  //아이템 배열
  const itemList = [];
  
  
  //데이터 들고오기
  const getShoppingItems = async() =>{
    const querySnapshot = await getDocs(collection(db, "shopping_item"));
    querySnapshot.forEach((doc) => {
      itemList.push(...doc.data().itemlist);
    });
    const newItemList2 = itemList.sort((a,b)=> (a.category - b.category));
    setitems(newItemList2);
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
  
  //likelist 문서들고오기
  const getUserData = async() =>{
    const docRef = doc(db, "users", userUID); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const likeList2 = docSnap.data().likeList
      setLikeList(likeList2);
    } 
    else {
      // docSnap.data() will be undefined in this case
    }
  }
  //user Item
  const setNewUserItem = () =>{
    if(userUID && items && likeList){
      const newUseritem =[].sort((a,b)=> (a.name > b.name))
      newUseritem.push(...likeList);
      const falseItem = items.filter((item)=>(
        !likeList.some(like => like.name === item.name)
      ))
      newUseritem.push(...falseItem);
      setitems2(newUseritem);
    }
  }

  //시작하자마자 shoppingItem, userUID 들고오기
  useEffect(()=>{
    getShoppingItems();
    getUser();
  },[]);
  
  
  //유저 아이디 바뀔때 마다 유저 likelist 불러오기
  useEffect(()=>{
    if(userUID){
      getUserData();
      setNewUserItem();
    }
  },[userUID]);

  
  //likeList가 있으면 newItemList에 넣기
  useEffect(()=>{
    setNewUserItem();
  },[likeList]);

  if(items2){
    console.log(items2);
  }

  //전체 버튼
  const active1 = () =>{
    setBtn('');
  }
  //의류 버튼
  const active2 = () =>{
    setBtn('clothes');
  }
  //식품 버튼
  const active3 = () =>{
    setBtn('foods');
  }
  //장난감 버튼
  const active4 = () =>{
    setBtn('toys');
  }

  //좋아요 버튼
  const likeBtn = (item) =>{
    if(userUID){
      if(!item.like){
        item.like = true;
        const setLikeList = async() =>{
          const washingtonRef = doc(db, "users", userUID);
          await updateDoc(washingtonRef, {
            likeList: arrayUnion({
              ...item,
              like : true
            })
          });
        }
        setLikeList();
      }
      else{
        item.like = false;
        const setLikeList = async() =>{
          const washingtonRef = doc(db, "users", userUID);
          await updateDoc(washingtonRef, {
            likeList: arrayRemove({
              ...item,
              like : true,
            })
          });
        }
        setLikeList();
      }
    }
    else{
      alert('로그인해주세요!');
      navigater('/login');
    }
    setNewUserItem();
  }

  return (
    <div className={style.shopping_backgrd}>
      <div className={style.shoppingBox}>
        <ul className={style.shoppingBox_menu}>
          <li
          className={btn ? "" : style.active} 
          onClick={active1}
          >전체</li>
          <li 
          className={btn === 'clothes' ? style.active: ''}
          onClick={active2}
          >의류</li>
          <li 
          className={btn === 'foods' ? style.active: ''}
          onClick={active3}
          >식품</li>
          <li
          className={btn === 'toys' ? style.active: ''}
          onClick={active4}
          >장난감</li>
        </ul>
        <div>
          <Outlet context = {items && items}/>
          <ul className={style.shoppingBox_itemList}>
            {printArray2 && printArray2.map((item)=>(
              <li key={item.name}>
                <div className={style.card}>
                  <div className={style.imgBox}>
                      <div
                      className={style.likeBtn}
                      onClick={()=>likeBtn(item)}
                      >
                        {item.like ? <FontAwesomeIcon icon={redHeart} style={{fontSize:'2rem',color:'#FFAE21',cursor:'pointer'}}/>:<FontAwesomeIcon icon={faHeart} style={{fontSize:'2rem',cursor:'pointer'}}/>}
                      </div>
                    <div style={{backgroundImage:`url(${item.url})`
                    ,width:'200px',height:'200px', backgroundSize: "contain",backgroundRepeat: "no-repeat",backgroundPosition: "center", margin:'auto'}}>
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
