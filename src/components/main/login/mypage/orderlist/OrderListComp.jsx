import React, { useState, useEffect } from 'react'
import {
  Wrap, ContentWrap, OrderWrap, Title, OderNum, OderInfo, ProductImg,
  ProductInfo, ProductState, Brand, Name, NumWrap, Num, Date, Delev, ProductInfoAll

} from './styles/OrderStylecomp'
import { Nav } from '../../../../../layout/Nav'

// firebase
import { auth, db } from "../../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getCartData } from "../../cartlist/CartListSlice"
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useLocation } from "react-router-dom";

export const OrderListComp = () => {

  // cart에 담은 상품 中 check한 상품 리스트
  //const orderlist = useSelector((state) => state.orderlist.orderlist);

  // 주문서 하나확인
  const orderlist = useSelector((state) => state.orderlist.orderlist);
  console.log(orderlist)
  const location = useLocation();
  // const {  } =
  //   location.state;

  const TotalPrice = () => {
    let sum = 0;
    for (let checkedItem of orderlist) {
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
  };

  return (
    <Wrap>
      <div style={{ position: "relative", top: "50px" }}>
        <Nav />
      </div>
      <Title>주문내역</Title>
      <ContentWrap>
        <OrderWrap>
          {orderlist &&
            orderlist.map((order, index) => (
              <div key={index}>
                <OderNum>주문번호:  ORD20230429-7085698</OderNum>
                {
                  order.checkedList.map((item) => (
                    <OderInfo>
                      <ProductImg>
                        <img src={item.url} alt={item.name} style={{ width: '50%', lineHeight: '120px' }} />
                      </ProductImg>
                      <ProductInfoAll>
                        <ProductInfo>
                          <Brand>브랜드</Brand>
                          <Name>{item.name}</Name>
                          <NumWrap>
                            <Num>{item.price * item.num}₩ / </Num>
                            <Num>{item.num}개</Num>
                          </NumWrap>
                        </ProductInfo>

                        <ProductState>
                          <Date>주문일자:{order.date.getMonth()}</Date>
                          <Delev>상품준비</Delev>
                        </ProductState>
                      </ProductInfoAll>
                    </OderInfo>
                  ))
                }

              </div>
            ))}
        </OrderWrap>
      </ContentWrap>
    </Wrap>
  )
}
