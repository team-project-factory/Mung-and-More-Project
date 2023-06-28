// react
import React, { useEffect, useRef, useState } from "react";
import style from "./informationcomp.module.scss";
import { useNavigate, useOutletContext, useParams } from "react-router";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
} from "firebase/firestore";
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
  const [userCartList, setUserCartList] = useState();
  //파람값
  const [itemName, setItemName] = useState("");
  // props로 들고온 아이템 배열 들고오기
  const [itemList, setItemList] = useState("");
  //아이템 정보들
  const [itemInfo, setItemInfo] = useState("");

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

  const getUserData = async () => {
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);
    setUserCartList(docSnap.data().cartList);
  };

  useEffect(() => {
    setItemName(param);
    setItemList(outletProps);
    getUser();
    findItem();
  }, []);

  useEffect(() => {
    if (userUID) {
      getUserData();
    }
  }, [userUID]);

  useEffect(() => {
    findItem();
  }, [itemList]);

  //버튼 누를시 장바구니 추가
  const buyBtn = () => {
    if (itemNum > 0) {
      const filter = userCartList.find((item) => item.name === param);
      if (!filter) {
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
        alert("장바구니에 담겨있습니다!");
      }
    } else {
      alert("1개부터 구매 가능하다멍 🐶");
    }
    getUserData();
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
            <ImgSliderComp item={itemInfo} />
          </li>
          <li className={style.ItemBuyBox}>
            <div className={style.BoxContents}>
              <div className={style.ProductModal}>
                {/* 상품 이름 */}
                <h2 style={{ fontSize: "1.8rem", marginTop: "35px" }}>
                  {itemName}
                </h2>

                {/* 상품 가격 */}
                <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                  {itemInfo.price}₩
                </p>

                {/* 상품 상세설명 */}
                <p style={{ fontSize: "1.1rem" }}>
                  우리 강아지들에게 필요한 제품을 <br /> 합리적인 가격에
                  제공하고 있습니다!
                </p>

                {/* 상품 수량 */}
                <p>
                  <span style={{ fontSize: "1.1rem" }}>수량 </span>
                  <input
                    type="number"
                    value={itemNum}
                    min="1"
                    onChange={(e) => {
                      setItemNum(e.target.value);
                    }}
                    className={style.AmountInput}
                  />
                </p>

                {/* 취소, 구매 버튼 */}
                <div className={style.Buttons}>
                  <button
                    onClick={() => {
                      navigater(-1);
                    }}
                    className={style.CancelBtn}
                  >
                    취소
                  </button>
                  <button onClick={buyBtn} className={style.BuyBtn}>
                    구매하기
                  </button>
                </div>
              </div>

              {/* 구매 버튼 눌렀을 때 뜨는 장바구니 모달 */}
              {successBtn ? (
                <div
                  className={style.PutCartModal}
                  // style={successBtn ? { display: "" } : { display: "none" }}
                >
                  <h3 style={{ margin: "auto" }}>
                    장바구니에 상품을 담았습니다!
                  </h3>
                  <div className={style.Buttons2}>
                    <button onClick={cartBtn} className={style.CartBtn}>
                      장바구니로 이동
                    </button>
                    <button onClick={keepShoppingBtn} className={style.KeepBtn}>
                      쇼핑 계속하기
                    </button>
                  </div>
                </div>
              ) : (
                <div className={style.StartImg}>
                  <div className={style.Text}>
                    Mung & More <br /> for our dog!
                  </div>
                  <div className={style.ImgBox}></div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
