// firebase
import { auth, db } from "../../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../CartListSlice";
import { json, useNavigate } from "react-router-dom";

// scss
import style from "./paymentComp.module.scss";

export const PaymentComp = () => {
  const navigater = useNavigate();
  const dispatch = useDispatch();

  // user UID 담을 state
  const [userUID, setUserUID] = useState("");

  // cartList 담을 state
  const [cartList, setCartList] = useState("");

  const [checkList, setCheckList] = useState("");

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
  };

  // 화면 출력하자마자 유저 데이터 들고오기
  useEffect(() => {
    getUserData();
  }, []);

  // 유저가 가지고 있는 데이터 들고오기
  const getData = async () => {
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
  };

  useEffect(() => {
    if (userUID) {
      getData();
    }
  }, [userUID]);

  return (
    <div className={style.PaymentComp}>
      <div className={style.Layout}>
        <div className={style.PaymentBox}>
          <h1>Thanks for your order!</h1>
          <p className={style.Text1}>주문 완료</p>
        </div>
      </div>
    </div>
  );
};
