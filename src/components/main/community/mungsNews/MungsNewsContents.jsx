import React, { useEffect, useState } from "react";
import "../instagramComp.css";
import style from "./mungsNewsContens.module.scss";
import { faHeart, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  doc,
  updateDoc,
  arrayRemove,
  collection,
  getDocs,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import { auth, db, storage } from "../../../../data/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { ref, deleteObject } from "firebase/storage";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const MungsNewsContents = () => {
  const stateOk = useLocation();
  const navigater = useNavigate();
  const param = useParams();
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  const [uid, setUid] = useState("");
  // 게시물 마다 독립적으로 관리하기 위해 객체 형태로 변경
  const [newList2, setNewList2] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  //댓글 리스트
  const [commentList, setCommentList] = useState([]);

  //유저이름
  const [userName, setUserName] = useState("");
  //photo
  const [userPhoto, setUserPhoto] = useState("");
  //댓글작성
  const [input, setinput] = useState("");

  // 아래 getData에서 UID 값이 있을 때 실행하도록 하기 위해 작성
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (userInfor) {
        const uid = user.uid;
        const photo = user.photoURL;
        const displayName = user.displayName;
        setUid(uid);
        setUserPhoto(photo);
        setUserName(displayName);
      } else {
      }
    });
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [stateOk]);

  // Post 컬렉션에서 문서이름을 UID로 해놓았기 때문에
  // "컬렉션이름",uid 형태로 집어넣어 사용
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "News"));
    const commentList2 = [];
    const newList = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data().news;
      newList.push({
        id: doc.id,
        imageIndex: 0,
        ...data,
      });
      //댓글
      const comment = doc.data().comment;
      if (comment) {
        commentList2.push(...comment);
      }
    });
    // newList2라는 상태 변수 사용 가능
    const filter = newList.filter((n) => n.id === param.id);
    setNewList2(filter.sort((a, b) => a.date < b.date));
    const newCommentList = commentList2.filter((c) => c.id === param.id);
    setCommentList(newCommentList.sort((a, b) => a.date < b.date));
  };

  useEffect(() => {
    getData();
  }, [param]);

  // 댓글 달기
  const setData = (id) => {
    const washingtonRef = doc(db, "News", id);
    const setComment = async () => {
      await updateDoc(washingtonRef, {
        comment: arrayUnion({
          id: id,
          uid: uid,
          comment: input,
          photo: userPhoto,
          name: userName,
        }),
      });
    };
    if (uid) {
      alert("댓글 등록이 완료되었다멍!");
      setComment();
      setinput("");
      getData();
    } else {
      alert("로그인해주세요");
      navigater("/login");
    }
  };

  //댓글 삭제버튼
  const deleteBtn = (comment) => {
    const washingtonRef = doc(db, "News", param.id);
    const deleteComment = async () => {
      await updateDoc(washingtonRef, {
        comment: arrayRemove(comment),
      });
    };
    if (comment.uid === uid) {
      alert("댓글 삭제가 완료되었다멍!");
      deleteComment();
      getData();
    } else {
      alert("본인의 댓글만 삭제할 수 있다멍!");
    }
  };

  // 아래는 슬라이드에 이전, 다음 버튼 함수
  // 게시물 객체인 post를 인자로 받아 해당 게시물의 슬라이드 index를 변경하고 변경된 리스트를 상태로 업데이트
  function btnPrev(post) {
    if (post.images && post.images.length > 0) {
      // (현재 슬라이드 인덱스) -1 + (게시물의 이미지 배열의 길이) % (게시물의 이미지 배열의 길이로 나눈 나머지 값)
      // % 하는 이유 : 계산된 인덱스가 음수인 경우 배열의 마지막 인덱스로 순환하도록 하기 위함.
      const index =
        (post.imageIndex - 1 + post.images.length) % post.images.length;
      post.imageIndex = index;
      // 전체 게시물 리스트(newList2)를 새 배열로 복사하여 등록한 게시물 객체를 포함하도록 설정
      setNewList2([...newList2]);
    }
  }
  // 위와 동일
  function btnNext(post) {
    if (post.images && post.images.length > 0) {
      const index = (post.imageIndex + 1) % post.images.length;
      post.imageIndex = index;
      setNewList2([...newList2]);
    }
  }

  return (
    <div className={style.mungsList_news}>
      {newList2 &&
        newList2.map((post, index) => (
          <div key={index}>
            <div className="card">
              <div className="title">
                <div className="userDetails">
                  <div className="logo">
                    {post.photo ? (
                      <img
                        src={post.photo}
                        alt="Selected"
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <h2 className="insta-title">
                    {" "}
                    {post.title} <br />
                    <span className="insta-sub"> {post.location} </span>
                  </h2>
                </div>
                <div
                  style={{ width: "80px", height: "60px", zIndex: "10" }}
                  onMouseEnter={() => setDeleteId(post.id)}
                  onMouseLeave={() => setDeleteId("")}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size="2xl"
                    className="dot"
                  />
                </div>
              </div>
              <div className="imgBx" style={{ height: "400px" }}>
                {post.images.length ? (
                  <img
                    className="event-slide-img"
                    style={{ height: "400px" }}
                    src={post.images[post.imageIndex]}
                    alt={`Image ${post.imageIndex + 1}`}
                    width={550}
                    height={400}
                  />
                ) : (
                  <div></div>
                )}
                {post.images.length > 1 ? (
                  <div className="slide-btn">
                    {/* 아래 버튼에 onClick시 post를 인자로 전달하여 각버튼이 독립적인 post 객체를 받게끔 설정 */}
                    <button className="prev-btn" onClick={() => btnPrev(post)}>
                      {"<"}
                    </button>
                    <button className="next-btn" onClick={() => btnNext(post)}>
                      {">"}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="actionBtns">
                <div className="left">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="2xl"
                    color="red"
                    className="heart"
                  />
                  <FontAwesomeIcon
                    icon={faComment}
                    size="2xl"
                    flip="horizontal"
                    className="comment"
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="2xl"
                    className="share"
                  />
                </div>
                <div className="right">
                  <FontAwesomeIcon icon={faBookmark} size="2xl" />
                </div>
              </div>
              <h4 className="date">{post.date}</h4>
              <div className="message" style={{ minHeight: "0px" }}>
                <p>{post.sub}</p>
                <div>{post.des}</div>
                <span>{post.hash}</span>
              </div>

              {/* 작성란 */}
            </div>
            <h3 style={{ textAlign: "left", margin: "6px 0 0 15px" }}>댓글</h3>
            <ul className={style.commentBox}>
              {commentList &&
                commentList.map((c) => (
                  <li>
                    <div
                      className={style.imgBox}
                      style={{ backgroundImage: `url(${c.photo})` }}
                    ></div>
                    <p className={style.userBox}>{c.name}</p>
                    <p className={style.userComment}>{c.comment}</p>
                    <span
                      onClick={() => {
                        deleteBtn(c);
                      }}
                    >
                      삭제
                    </span>
                  </li>
                ))}
            </ul>
            <ul className={style.commentInput}>
              <div
                style={
                  userPhoto
                    ? { backgroundImage: `url(${userPhoto})` }
                    : { backgroundImage: "" }
                }
              ></div>
              <li>
                <input
                  type="text"
                  placeholder={`'이름'으로 댓글달기...`}
                  value={input}
                  onChange={(e) => {
                    setinput(e.target.value);
                  }}
                  required
                />
                <button
                  onClick={() => {
                    setData(param.id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  게시
                </button>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};
