// react
import React, { useEffect, useRef, useState } from "react";
import style from "./informationcomp.module.scss";
import { useNavigate, useOutletContext, useParams } from "react-router";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../../../data/firebase";

// image slider
import ImgSliderComp from "./ImgSliderComp";

export default function InformationComp() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigater = useNavigate();
  const param = useParams().name;
  const outside = useRef();

  //유저 아이디
  const [userUID, setUserUID] = useState("");
  //파람값
  const [itemName, setItemName] = useState("");
  //아이템 정보들
  const [itemInfo, setItemInfo] = useState("");
  // props로 들고온 아이템 배열 들고오기
  const [itemList, setItemList] = useState("");
  // 구매수량
  const [itemNum, setItemNum] = useState(1);

  //장바구니 추가 모달 상태
  const [successBtn, setSuccessBtn] = useState(false);

  //배열 바로 들고오기
  const outletProps = useOutletContext();

  //props값이랑 param값이랑 같은 객체
  const findItem = () => {
    if (itemList) {
      const item = itemList.find((i) => i.name === itemName);
      setItemInfo(item);
    }
  };

  //유저 기본 들고오기
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUserUID(uid);
        //유저 firestore 데이터 들고오기
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    setItemName(param);
    setItemList(outletProps);
    getUser();
    findItem();
  }, []);

  useEffect(() => {
    findItem();
  }, [itemList]);

  //버튼 누를시 장바구니 추가
  const buyBtn = () => {
    if (itemNum > 0) {
      itemInfo.num = Number(itemNum);
      const setCartList = async () => {
        const washingtonRef = doc(db, "users", userUID);
        await updateDoc(washingtonRef, {
          cartList: arrayUnion(itemInfo),
        });
      };
      setCartList();
      setSuccessBtn(true);
    } else {
      alert("1개부터 구매 가능하다멍 🐶");
    }
  };

  const cartBtn = () => {
    if (user) {
      navigater("/cartlist");
    }
  };

  const keepShoppingBtn = () => {
    if (user) {
      navigater("/shopping");
    }
  };

  return (
    <div
      ref={outside}
      className={style.infor_back}
      onClick={(e) => {
        if (e.target == outside.current) {
          navigater(-1);
        }
      }}
    >
      <div className={style.infor_modal}>
        <ul className={style.infor_modal_cart}>
          <li className={style.ImgSlider}>
            {/* 상품 상세 사진 슬라이더 */}
            <ImgSliderComp item={itemInfo}/>
          </li>
          <li className={style.ItemBuyBox}>
            <p>{itemName}</p>
            <p>{itemInfo.price}</p>
            <p>
              <span>수량</span>
              <input
                type="number"
                value={itemNum}
                min="1"
                onChange={(e) => {
                  setItemNum(e.target.value);
                }}
              />
            </p>
            <button
              onClick={() => {
                navigater(-1);
              }}
            >
              취소
            </button>
            <button onClick={buyBtn}>구매하기</button>
          </li>
        </ul>
        <div
          className={style.infro_modal_setCart}
          style={successBtn ? { display: "" } : { display: "none" }}
        >
          <h3>장바구니에 담았습니다!</h3>
          <button onClick={cartBtn}>장바구니로 이동</button>
          <button onClick={keepShoppingBtn}>쇼핑 계속하기</button>
        </div>
      </div>
    </div>
  );
}
