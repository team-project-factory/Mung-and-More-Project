// 파이어베이스
import { auth, db } from "../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// 리액트
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "./CartListSlice";
import { json, useNavigate } from "react-router-dom";

// styled-components
import styled from "styled-components";

export const CartListComp = () => {
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
      console.log("체크 해제!");
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

  // styled-components로 컴포넌트 정의
  const CartComp = styled.div`
    display: flex;
    width: 100%;
  `;

  const Layout = styled.div`
    margin: auto;
    margin-top: 135px;
    display: flex;
  `;

  const CartBox = styled.div`
    padding: 50px;
    width: 450px;
    height: 630px;
    border-radius: 15px;
    background-color: white;
  `;

  const ListSet = styled.ul`
    margin: 40px 0;
  `;

  const CartList = styled.li`
    margin-top: 20px;
  `;

  return (
    <CartComp>
      <Layout>
        <CartBox>
          <h1>Cart</h1>
          <ListSet>
            {cartList &&
              cartList.map((item) => (
                <CartList>
                  <input
                    type="checkbox"
                    value={JSON.stringify(item)}
                    onChange={(e) => {
                      onCheck(e.target.checked, e.target.value);
                    }}
                  />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </CartList>
              ))}
          </ListSet>
          <button onClick={goPayment}>구매하기</button>
        </CartBox>
      </Layout>
    </CartComp>
  );
};
