import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//css
import style from "./mungsNewsContens.module.scss";

//파이어베이스
import { db, auth } from "../../../../data/firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  getDocFromCache,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const MungsNewsContents = () => {
  const navigater = useNavigate();
  const Id = useParams();

  const [newsList, setNewsList] = useState("");

  const [commentList, setCommentList] = useState([]);
  //로그인여부
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  //유저이름
  const [userName, setUserName] = useState("");
  //uid
  const [userUid, setUserUid] = useState("");
  //photo
  const [userPhoto, setUserPhoto] = useState("");
  //댓글작성
  const [input, setinput] = useState("");

  //로그인했을때 로그인유저 정보들고오기
  useEffect(() => {
    if (userInfor) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          const photo = user.photoURL;
          const displayName = user.displayName;
          setUserUid(uid);
          setUserPhoto(photo);
          setUserName(displayName);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
  }, []);
  //뉴스 데이터, 댓글 들고오기
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "News"));
    const commentList2 = [];
    const newsList2 = [];
    querySnapshot.forEach((doc) => {
      const news = doc.data().news;
      newsList2.push({
        id: doc.id,
        ...news,
      });
      //댓글
      const comment = doc.data().comment;
      if (comment) {
        commentList2.push(...comment);
      }
    });
    const newNewsList = newsList2.filter((n) => n.id === Id.name);
    const newCommentList = commentList2.filter((c) => c.id === Id.name);
    setCommentList(newCommentList);
    setNewsList(newNewsList);
  };

  //Id가 바뀔때마다 Id에 맞는 객체(news)들고오기
  useEffect(() => {
    getData();
  }, [Id]);

  const setData = (id) => {
    const washingtonRef = doc(db, "News", id);
    const setComment = async () => {
      await updateDoc(washingtonRef, {
        comment: arrayUnion({
          id: id,
          uid: userUid,
          comment: input,
          photo: userPhoto,
          name: userName,
        }),
      });
    };
    if (userUid) {
      setComment();
      setinput("");
      getData();
    } else {
      alert("로그인해주세요");
      navigater("/login");
    }
  };

  const deleteBtn = (comment) => {
    const washingtonRef = doc(db, "News", Id.name);
    const deleteComment = async () => {
      await updateDoc(washingtonRef, {
        comment: arrayRemove(comment),
      });
    };
    if (comment.uid === userUid) {
      alert("삭제!");
      deleteComment();
      getData();
    } else {
      alert("아이디 다르다!");
    }
  };

  return (
    <div className={style.mungsList_news}>
      {newsList &&
        newsList.map((n) => (
          <div key={n.id}>
            <div className={style.title}>
              <h2>{n.title}</h2>
            </div>

            <div className={style.contentBox}>
              {n.contents &&
                n.contents.map((c, i) => (
                  <ul key={i}>
                    <li>{c.title}</li>
                  </ul>
                ))}
            </div>
          </div>
        ))}
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
              setData(Id.name);
            }}
            style={{ cursor: "pointer" }}
          >
            게시
          </button>
        </li>
      </ul>
    </div>
  );
};
