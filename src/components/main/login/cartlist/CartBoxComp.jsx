// 파이어베이스
import { auth, db } from "../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// 리액트
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "./CartListSlice";
import { json, useNavigate } from "react-router-dom";

// scss
import style from "./cartBoxComp.module.scss";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const CartBoxComp = () => {
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
    <div className={style.CartComp}>
      <div className={style.Layout}>
        <div className={style.CartBox}>
          <h1>Cart</h1>
          <div className={style.ListSet}>
            {cartList &&
              cartList.map((item) => (
                <div className={style.EachList}>
                  <div className={style.Btns}>
                    <input
                      type="checkbox"
                      value={JSON.stringify(item)}
                      onChange={(e) => {
                        onCheck(e.target.checked, e.target.value);
                      }}
                      className={style.CheckBtn}
                    />
                    <button className={style.DeleteBtn}>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  <div className={style.CartList}>
                    <img src={item.url} className={style.itemImg} />
                    <div className={style.ItemName}>{item.name}</div>
                    <div className={style.Align}>
                      <div>수량 버튼 공간</div>
                      <div>PRICE: {item.price}₩</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button onClick={goPayment}>구매하기</button>
        </div>
      </div>
    </div>
  );
};
