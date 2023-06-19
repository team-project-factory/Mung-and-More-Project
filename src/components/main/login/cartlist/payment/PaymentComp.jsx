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
  // cart에 담은 상품 中 check한 상품 리스트
  const checkedList = useSelector((state) => state.cartList);

  // user UID 담을 state
  const [userUID, setUserUID] = useState("");

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

  return (
    <div className={style.PaymentComp}>
      <div className={style.Layout}>
        <div className={style.PaymentBox}>
          <h1>Thanks for your order!</h1>
          <p className={style.Text1}>주문 완료</p>

          {/* 주문 상품 정보: Cart에서 체크한 뒤 주문 결정한 상품만 표시 */}
          <p className={style.Text2}>주문 상품 정보</p>
          <div className={style.ListSet}>
            {checkedList &&
              checkedList.map((item, index) => (
                <div className={style.CheckedList} key={index}>
                  <img src={item.url} className={style.ItemImg} />
                  <div className={style.Align1}>
                    <div className={style.ItemName}>{item.name}</div>
                    <div className={style.Align2}>
                      <div>주문 수량: X개</div>
                      <div>TOTAL PRICE: {item.price}₩</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* 상품 금액 계산창 */}
          <div>
            <div>총 상품 금액</div>
          </div>
        </div>
      </div>
    </div>
  );
};
