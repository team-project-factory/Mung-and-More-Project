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

  // user UID 담을 state
  const [userUID, setUserUID] = useState("");

  // cartList 담을 state
  const [cartList, setCartList] = useState("");

  const [checkList, setCheckList] = useState("");

  // 상품 수량 담을 state
  const [itemAmount, setItemAmount] = useState({});

  // 상품 수량 변경
  const changeItemAmount = (item, amount) => {
    const newAmount = item.num + amount;

    // 최소값을 1로 설정
    const finalAmount = newAmount > 1 ? newAmount : 1;

    const newCart = cartList.map((cart) =>
      cart.name === item.name ? { ...cart, num: finalAmount } : cart
    );

    dispatch(getCartData(newCart));
    setCartList(newCart);
  };

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
  const onCheck = (item) => {
    // redux에 check된 item 추가
    const newCart = cartList.map((cart) =>
      cart.name === item.name ? { ...cart, check: !cart.check } : cart
    );
    dispatch(getCartData(newCart));
    setCartList(newCart);
  };

  // 수량 변경시 금액 계산
  const calculatePrice = (item) => {
    console.log(itemAmount);
    const amount = itemAmount[item.name] || item.num;
    return item.price * amount;
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
                    {/* 체크박스 */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        onCheck(item);
                      }}
                      className={style.CheckBtn}
                    />

                    {/* 삭제 버튼 (클릭했을 때 아이템 삭제되는 부분 추가) */}
                    <button className={style.DeleteBtn}>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>

                  {/* 상품 정보 표시 */}
                  <div className={style.CartList}>
                    <img src={item.url} className={style.itemImg} />
                    <div className={style.ItemName}>{item.name}</div>
                    <div className={style.Align}>
                      <div className={style.Amount}>
                        {/* 수량 조절 버튼 */}
                        <div className={style.AmountBtn}>
                          {/* 마이너스 버튼 */}
                          <button
                            className={style.PMBtn}
                            onClick={() => changeItemAmount(item, -1)}
                          >
                            -
                          </button>

                          {/* 수량 표시 */}
                          <div className={style.AmountNum}>
                            {itemAmount[item.name] || item.num}
                          </div>

                          {/* 플러스 버튼 */}
                          <button
                            className={style.PMBtn}
                            onClick={() => changeItemAmount(item, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>PRICE: {calculatePrice(item)}₩</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
