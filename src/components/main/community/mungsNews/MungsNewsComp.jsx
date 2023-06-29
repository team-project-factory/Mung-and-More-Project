import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

//css
import style from "./mungsnewscomp.module.scss";
import style2 from "./mungsNewsContens.module.scss";

//파이어베이스
import { db } from "../../../../data/firebase";
import { collection, getDocs } from "firebase/firestore";

import { faHeart, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MungsNewsComp = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState("");
  console.log(news);
  const [btn, setBtn] = useState(true);
  const [deleteId, setDeleteId] = useState("");

  const [newList2, setNewList2] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "News"));
      const newsList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data().news;
        newsList.push({
          id: doc.id,
          imageIndex: 0,
          ...data,
        });
      });
      setNews(newsList.reverse());
    };
    getData();
  }, []);

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
    <div className={style.mungsList}>
      <ul className={style.mungsList_menu}>
        {news &&
          news.map((n, i) => (
            <li key={i}>
              <NavLink
                to={`/mungsnews/${n.id}`}
                className={({ isActive }) => (isActive ? style.active : "")}
                onClick={() => {
                  setBtn(false);
                }}
              >
                {n.title}
              </NavLink>
            </li>
          ))}
      </ul>
      <Link to={"/mungsnews/FpS0NoePozU2YMFyoU1d"}>
        <div
          className={style2.mungsList_news}
          style={{
            backgroundImage: `url('${
              process.env.PUBLIC_URL + "/img/뉴스.jpg"
            }')`,
            backgroundSize: "620px 860px",
          }}
        />
      </Link>
      <Outlet />
    </div>
  );
};
