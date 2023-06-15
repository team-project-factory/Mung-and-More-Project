// Firebase
import { auth, db } from "../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "./CartListSlice";
import { json, useNavigate } from "react-router-dom";

// scss
import style from "./orderBoxComp.module.scss";

export const OrderBoxComp = () => {
  const navigater = useNavigate();
  const dispatch = useDispatch();

  //user UID 담을 state
  const [userUID, setUserUID] = useState("");
  //cartList 담을 state
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

  //화면 출력하자마자 유저데이터 들고오기
  useEffect(() => {
    getUserData();
  }, []);
  //유저가지고 있는 데이터 들고오기
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

  // 체크된 item들 checkList에 넣기
  const onCheck = (check, item) => {
    if (check) {
      setCheckList([...checkList, item]);
    } else {
      setCheckList(checkList.filter((c) => c !== item));
    }
  };

  if (checkList) {
    console.log(checkList);
  }

  const goPayment = () => {
    if (cartList) {
      dispatch(getCartData(checkList));
      navigater("/payment");
    }
  };

  return (
    <div className={style.OrderComp}>
      <div className={style.Layout}>
        <div className={style.OrderBox}>
          <h1>Order</h1>

          {/* 상품 정보 */}
          <p className={style.Text1}>상품 정보</p>
          <div className={style.ListSet}>
            <div>좌측에서 체크한 상품 이름</div>
            <div>좌측에서 체크한 상품 가격 / 수량</div>
          </div>

          {/* 수령인: 로그인 정보의 이름과 연결 */}
          <p className={style.Text2}>수령인</p>
          <input
            type="text"
            placeholder="    이름"
            className={style.NameInput}
          />

          {/* 배송지: 로그인 정보의 배송지와 연결 */}
          <p className={style.Text2}>배송지</p>
          <div className={style.PostCode}>
            <input
              type="text"
              placeholder="    우편번호"
              className={style.PostCodeInput}
            />
            <button className={style.SearchBtn}>SEARCH</button>
          </div>
          <input
            type="text"
            placeholder="    상세주소"
            className={style.ADDInput}
          />
          <input
            type="text"
            placeholder="    배송 요청사항"
            className={style.ADDInput}
          />

          {/* 연락처: 로그인 정보의 연락처와 연결 */}
          <p className={style.Text2}>연락처</p>
          <input
            type="text"
            placeholder="    '-' 기호를 제외한 숫자만 입력해 주세요"
            className={style.PNInput}
          />

          {/* 총 상품금액: 선택한 상품 금액 합계 표시 */}
          <div className={style.TotalItemPrice}>
            <p>총 상품금액</p>
            <p>000₩</p>
          </div>

          {/* 배송비 */}
          <div>
            <p>배송비</p>
            <p>000₩</p>
          </div>

          {/* 총 결제금액 */}
          <div>
            <p>총 결제금액</p>
            <p>000₩</p>
          </div>

          {/* 구매 버튼 */}
          <button onClick={goPayment}>Buy Now!</button>
        </div>
      </div>
    </div>
  );
};
