// firebase
import { auth, db } from "../../../../data/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// react
import React, { useEffect, useState } from "react";

// component

// scss
import style from "./likeListComp.module.scss";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as redHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export const LikeListComp = () => {
  // user UID 담을 state
  const [userUID, setUserUID] = useState("");

  // cartList 담을 state
  const [likeList, setCartList] = useState("");

  // 유저 데이터 들고오기
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

  // 화면 출력하자마자 유저데이터 들고오기
  useEffect(() => {
    getUserData();
  }, []);

  // 유저가 가지고 있는 데이터 들고오기
  const getData = async () => {
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);
    const cart = docSnap.data().likeList;

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

  if (likeList) {
    console.log(likeList);
  }

  // 좋아요 버튼
  const likeBtn = (item) => {
    console.log(item);
    if (userUID) {
      if (!item.like) {
        const setLikeList = async () => {
          const washingtonRef = doc(db, "users", userUID);
          item.like = !item.like;
          await updateDoc(washingtonRef, {
            likeList: arrayUnion(item),
          });
        };
        setLikeList();
      } else {
        const deleteLikeList = async () => {
          const washingtonRef = doc(db, "users", userUID);
          await updateDoc(washingtonRef, {
            likeList: arrayRemove(item),
          });
        };
        deleteLikeList();
      }
      getData();
    }
  };

  return (
    <div className={style.LikeListComp}>
      <div className={style.Layout}>
        <div className={style.LikeListBox}>
          <h1 style={{ marginLeft: "45px", marginBottom: "20px" }}>My Like</h1>

          {/* 찜한 상품 정보 카드 형태로 표시 */}
          <div className={style.CardListSet}>
            {likeList &&
              likeList.map((item) => (
                <div className={style.CardList}>
                  <div className={style.ImgBox}>
                    <div
                      className={style.LikeBtn}
                      onClick={() => likeBtn(item)}
                    >
                      {item.like ? (
                        <FontAwesomeIcon
                          icon={redHeart}
                          style={{ fontSize: "1.5rem", color: "#FFAE21" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "1.5rem", color: "#FFAE21" }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${item.url})`,
                        width: "200px",
                        height: "150px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        margin: "auto",
                      }}
                    ></div>
                  </div>
                  <div className={style.InfoBox}>
                    <div className={style.TextBox}>
                      <div style={{ fontSize: "1.2rem" }}>{item.name}</div>
                      <div style={{ fontSize: "1.1rem" }}>{item.price}₩</div>
                    </div>
                    <div className={style.CartBtn}>
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#bbbbbb",
                          paddingLeft: "10.5px",
                          paddingTop: "13.5px",
                        }}
                      />
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
