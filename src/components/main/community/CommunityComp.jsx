import React, { useEffect, useState } from 'react'
import InstagramComp from './InstagramComp'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import './instagramComp.css'


import style from './instagramComp.module.scss'

import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, updateDoc, arrayRemove, collection, getDocs } from 'firebase/firestore';
import {auth, db,storage } from '../../../data/firebase';
import { onAuthStateChanged,getAuth } from 'firebase/auth'
import { ref,deleteObject} from 'firebase/storage'


export const CommunityComp = () => {
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  const [uid, setUid] = useState('');
  // 게시물 마다 독립적으로 관리하기 위해 객체 형태로 변경
  const [newList2, setNewList2] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const [btn, setBtn] = useState(true);
  console.log(btn);
  const stateOk = useLocation();

  
  // Post 컬렉션에서 문서이름을 UID로 해놓았기 때문에
  // "컬렉션이름",uid 형태로 집어넣어 사용
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const newList = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data().post;
      newList.push({
        id : doc.id,
        imageIndex : 0,
        ...data
      });
    });
    // newList2라는 상태 변수 사용 가능
    setNewList2(newList);
  }
  
  // 아래 getData에서 UID 값이 있을 때 실행하도록 하기 위해 작성
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (userInfor) {
        const uid = user.uid;
        setUid(uid);
      } else {
      }
    });
    getData();
    setBtn(true);
  }, []);

  useEffect(()=>{
    getData();
  },[stateOk])

  function btnPrev(post) {
    if (post.images && post.images.length > 0) {
      // (현재 슬라이드 인덱스) -1 + (게시물의 이미지 배열의 길이) % (게시물의 이미지 배열의 길이로 나눈 나머지 값)
      // % 하는 이유 : 계산된 인덱스가 음수인 경우 배열의 마지막 인덱스로 순환하도록 하기 위함.
      const index = (post.imageIndex - 1 + post.images.length) % post.images.length;
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
    <div style={{width : '100%'}}>
      <div className={style.mungsList}>
        <ul className={style.mungsList_menu}>
          {newList2 && newList2.map((l)=>(
            <li>
              <NavLink to={`/community/${l.id}`}
              className={({ isActive })=>(isActive ? style.active : '' )}
              onClick={()=>{setBtn(false)}}
              >{l.title}</NavLink>
              </li>
          ))}
        </ul>
          <div>gd</div>
          <Outlet/>
        <div style={{position:'relative',minHeight: '700px',}}>
          {userInfor &&
                  <div className='write-box'>
                    <Link 
                      to={"/createpostcomp"} 
                        className='create-post'>
                    <img className='write' src={process.env.PUBLIC_URL + "/img/pen.png"} />
                    </Link>
                  </div>
                }
        </div>
      </div>
    </div>
  )
}
