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
  
  // 주문날짜
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // 주문번호
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000); // 0부터 999999 사이의 랜덤한 숫자 생성
    return String(randomNumber).padStart(7, '0'); // 7자리 숫자로 변환
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
                <OderNum>주문번호:  ORD11285698-{generateRandomNumber()}</OderNum>
                {
                  order.checkedList.map((item) => (
                    <OderInfo>
                      <ProductImg>
                        <img src={item.url} alt={item.name} 
                        style={{ width: '100%', lineHeight: '120px', 
                                marginTop:item.url === "https://firebasestorage.googleapis.com/v0/b/mungmore-80ab2.appspot.com/o/shoppingItem_images%2F%EC%9B%B0%EB%B9%99%EC%82%AC%EB%A3%8C_%EC%8D%B8%EB%84%A4%EC%9D%BC2-removebg-preview.png?alt=media&token=1e4e9c5b-f3f1-48b3-8310-a5e73be570a6" ? "2px" : "-15px",
                                // 위에 웰빙사료만 사진 크기 조절하려고 삼항연산자 걸어 별도 관리
                                }} />
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
                          <Date>주문일자: {formatDate(order.date)}</Date>
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
