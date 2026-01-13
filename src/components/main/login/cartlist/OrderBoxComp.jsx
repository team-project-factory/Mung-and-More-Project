// Firebase
import { auth, db } from "../../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// React
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";

// scss
import style from "./orderBoxComp.module.scss";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

// 우편번호 검색
import ReactDaumPost from "react-daumpost-hook";
import { getOrderData } from "./OrderListSlice";

export const OrderBoxComp = () => {
  const navigater = useNavigate();

  const [inputName, setInputName] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputDeliveryRequest, setInputDeliveryRequest] = useState("");

  const cartList = useSelector((state) => state.cartList);

  const [addressDetail, setAddressDetail] = useState("");
  const [isOpenPost, setIsOpenPost] = useState(false);
  const ref = useRef(null);

  const dispatch = useDispatch();

  //user UID 담을 state
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
      // setCartList(cart);
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

  const checkedList = cartList ? cartList.filter((cart) => cart.check) : "";

  const goPayment = () => {
    if (checkedList.length === 0) {
      alert("상품을 선택해 주세요!");
      return;
    }

    if (inputName.trim() === "") {
      alert("수령하실 분의 성함을 입력해 주세요!");
      return;
    }

    if (addressDetail.trim() === "") {
      alert("배송지 정보를 입력해 주세요!");
      return;
    }

    if (inputPhoneNumber.trim() === "") {
      alert("연락처를 입력해 주세요!");
      return;
    }

    navigater("/payment", {
      state: {
        name: inputName,
        phoneNumber: inputPhoneNumber,
        postcode: addressDetail,
        address: inputAddress,
        deliveryRequest: inputDeliveryRequest,
        date: new Date(),
      },
    });

    //오더리스트의 배열의 객체{ 장바구니 목록(배열), 주문날짜(date) }
    dispatch(getOrderData({ checkedList, date: new Date() }));
  };

  // 수량 변경시 금액 계산
  const calculatePrice = (item) => {
    const amount = checkedList[item.name] || item.num;
    return item.price * amount;
  };

  // 변경된 수량
  const itemAmount = (item) => {
    const amount = checkedList[item.name] || item.num;
    return amount;
  };

  // 총 상품금액 계산 함수
  function calculateTotalPrice(checkedList) {
    if (checkedList) {
      let totalPrice = 0;
      checkedList.forEach((item) => {
        totalPrice += calculatePrice(item);
      });
      return totalPrice;
    }
  }

  // 우편번호 검색
  const onChangeOpenPost = () => {
    setIsOpenPost((prevIsOpenPost) => !prevIsOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddressDetail(fullAddr);
    setIsOpenPost(false);

    if (ref.current) {
      ref.current.style.display = "none";
    }
  };

  const postConfig = {
    ref: ref,
    onComplete: onCompletePost,
  };
  const postCode = ReactDaumPost(postConfig);

  console.log("체크된 상품 목록", checkedList);

  return (
    <div className={style.OrderComp}>
      <div className={style.Layout}>
        <div className={style.OrderBox}>
          <h1>Order</h1>

          {/* 상품 정보 */}
          <p className={style.Text1}>상품 정보</p>
          <div className={style.ListSet}>
            {checkedList && checkedList.length > 0 ? (
              checkedList.map((item, index) => (
                <div className={style.CheckedItem} key={index}>
                  <div>{item.name}</div>
                  <div className={style.ItemInfo}>
                    <div style={{ color: "#72b6f7" }}>{itemAmount(item)}개</div>
                    <FontAwesomeIcon icon={faPaw} />
                    <div>{calculatePrice(item)}₩</div>
                  </div>
                </div>
              ))
            ) : (
              <p className={style.Text3}>선택된 상품이 없습니다!</p>
            )}
          </div>

          {/* 수령인: 로그인 정보의 이름과 연결 */}
          <p className={style.Text2}>수령인</p>
          <input
            type="text"
            placeholder="이름"
            className={style.NameInput}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />

          {/* 배송지: 로그인 정보의 배송지와 연결 */}
          <p className={style.Text2}>배송지</p>
          <div className={style.PostCode}>
            <div className={style.PostCodeElement}>
              <input
                type="text"
                placeholder="우편번호"
                className={style.PostCodeInput}
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
              />
              <button className={style.SearchBtn} onClick={postCode}>
                SEARCH
              </button>
            </div>
            {/* 우편번호 검색 박스가 나올 공간 */}
            <div ref={ref}></div>
          </div>
          <input
            type="text"
            placeholder="상세주소"
            className={style.ADDInput}
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="요청사항 (선택)"
            className={style.ADDInput}
            value={inputDeliveryRequest}
            onChange={(e) => setInputDeliveryRequest(e.target.value)}
          />

          {/* 연락처: 로그인 정보의 연락처와 연결 */}
          <p className={style.Text2}>연락처</p>
          <input
            type="text"
            placeholder="'-' 기호를 제외한 숫자만 입력해 주세요"
            className={style.PNInput}
            value={inputPhoneNumber}
            onChange={(e) => setInputPhoneNumber(e.target.value)}
          />

          {/* 총 상품금액: 선택한 상품 금액 합계 표시 */}
          <div className={style.ItemPrice}>
            <p>총 상품금액</p>
            <p>{calculateTotalPrice(checkedList)}₩</p>
          </div>

          {/* 배송비 */}
          <div className={style.ShipPrice}>
            <p>배송비</p>
            <p>{calculateTotalPrice(checkedList) >= 50000 ? "0₩" : "2500₩"}</p>
          </div>

          {/* 총 결제금액 */}
          <div className={style.TotalPrice}>
            <p>총 결제금액</p>
            <p>
              {calculateTotalPrice(checkedList) >= 50000
                ? calculateTotalPrice(checkedList)
                : calculateTotalPrice(checkedList) + 2500}
              ₩
            </p>
          </div>

          {/* 구매 버튼 */}
          <button onClick={goPayment} className={style.BuyBtn}>
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};
