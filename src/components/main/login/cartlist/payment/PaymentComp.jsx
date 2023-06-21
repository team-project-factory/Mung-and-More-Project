// firebase
import { auth, db } from "../../../../../data/firebase";
import { doc, getDoc ,serverTimestamp} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../CartListSlice";
import { json, useNavigate, useLocation } from "react-router-dom";

// scss
import style from "./paymentComp.module.scss";

export const PaymentComp = () => {
  // cart에 담은 상품 中 check한 상품 리스트
  const checkedList = useSelector((state) => state.cartList);

  const location = useLocation();
  const { name, phoneNumber, postcode, address, deliveryRequest } =
    location.state;

  const TotalPrice = () => {
    let sum = 0;
    for (let checkedItem of checkedList) {
      sum = sum + checkedItem.price * checkedItem.num;
    }
    return sum;
  };

  const navigater = useNavigate();

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

  const goShoppingBack = () => {
    navigater("/shopping");
    const orderData = {
      orderTime : serverTimestamp()
    }
  };

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
                      <div>주문 수량: {item.num}개</div>
                      <div>PRICE: {item.price * item.num}₩</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* 상품 금액 계산 */}
          <div className={style.Price}>
            <div>총 상품 금액 {TotalPrice()}₩</div> +
            <div>배송비 {TotalPrice() >= 50000 ? "0₩" : "2500₩"}</div> =
            <div style={{ color: "black" }}>
              총 결제 금액{" "}
              {TotalPrice() >= 50000 ? TotalPrice() : TotalPrice() + 2500}₩
            </div>
          </div>

          {/* 배송 정보 */}
          <p className={style.Text2}>배송 정보</p>
          <div className={style.Shipping}>
            <div className={style.Element}>
              수령인 <div style={{ color: "black" }}>{name}</div>
            </div>
            <div className={style.Element}>
              연락처 <div style={{ color: "black" }}>{phoneNumber}</div>
            </div>
            <div className={style.Element}>
              배송지{" "}
              <div style={{ color: "black" }}>
                {postcode} {address}
              </div>
            </div>
            <div className={style.Element}>
              배송 요청사항{" "}
              <div style={{ color: "black" }}>{deliveryRequest}</div>
            </div>

            {/* 확인 버튼 */}
            {/* 구매 버튼 */}
            <button onClick={goShoppingBack} className={style.BuyBtn}>
              Done!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
