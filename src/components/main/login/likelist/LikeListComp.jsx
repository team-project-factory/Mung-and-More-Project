// firebase
import { auth, db } from "../../../../data/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// react
import { useEffect, useState } from "react";

// component

// scss
import style from "./likeListComp.module.scss";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as redHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

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

  // 좋아요 버튼
  const likeBtn = (item) => {
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
      <Outlet context={likeList && likeList} />
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
                          style={{ fontSize: "1.4rem", color: "#FFAE21" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "1.4rem", color: "#FFAE21" }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${item.url})`,
                        width: "220px",
                        height: "210px",
                        // 아래 이미지 웰빙사료만 사이즈가 칸에 조절하기 위해 삼항연산자 걸어서 별도 관리
                        height:
                          item.url ===
                          "https://firebasestorage.googleapis.com/v0/b/mungmore-80ab2.appspot.com/o/shoppingItem_images%2F%EC%9B%B0%EB%B9%99%EC%82%AC%EB%A3%8C_%EC%8D%B8%EB%84%A4%EC%9D%BC2-removebg-preview.png?alt=media&token=1e4e9c5b-f3f1-48b3-8310-a5e73be570a6"
                            ? "185px"
                            : "210px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        margin: "0 -10px",
                        marginTop: "-42px",
                      }}
                    ></div>
                  </div>
                  <div className={style.InfoBox}>
                    <div className={style.TextBox}>
                      <div style={{ fontSize: "1.2rem" }}>{item.name}</div>
                      <div style={{ fontSize: "1.1rem" }}>{item.price}₩</div>
                    </div>
                    <Link to={`/mylike/${item.name}`}>
                      <div className={style.CartBtn}>
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          style={{
                            width: "21px",
                            height: "21px",
                            color: "#c2c2c2",
                            paddingLeft: "11.5px",
                            paddingTop: "12.5px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
