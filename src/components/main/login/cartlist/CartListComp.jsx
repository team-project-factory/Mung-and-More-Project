//파이어베이스
import { auth, db } from "../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//리액트
import React, { useEffect, useState } from 'react'

export const CartListComp = () => {
  //user UID 담을 state
  const [userUID,setUserUID] = useState('');
  //cartList 담을 state
  const [cartList, setCartList] = useState('');

  //유저 데이터 들고오기
  const getUserData = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserUID(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
  //화면 출력하자마자 유저데이터 들고오기
  useEffect(()=>{
    getUserData();
  },[])
  //유저가지고 있는 데이터 들고오기
  const getData = async() =>{
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);
    const cart = docSnap.data().cartList;
    
    if (docSnap.exists()) {
      console.log("Document data:", cart);
      setCartList(cart);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }  
  
  useEffect(()=>{
    if(userUID){
      getData();
    }
  },[userUID]);
  
  if(cartList){
    console.log(cartList[0].name);
  }


  return (
    <div>
      <h1>CartListComp</h1>
      <ul>
        {cartList && cartList.map((item)=>(
          <li>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
