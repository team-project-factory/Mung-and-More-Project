import React, { useEffect, useState } from 'react'
import InstagramComp from './InstagramComp'
import { Link } from 'react-router-dom'
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

  
  
  // Post 컬렉션에서 문서이름을 UID로 해놓았기 때문에
  // "컬렉션이름",uid 형태로 집어넣어 사용
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const newList = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data().post;
      newList.push(data);
    });
    // newList2라는 상태 변수 사용 가능
    setNewList2(newList);
  }
  
  
  // 아래 getData에서 UID 값이 있을 때 실행하도록 하기 위해 작성
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
      }
    });
    getData();
  }, [])
  
  
  
  if(newList2){
    console.log(newList2);
  }
  
  



  return (
    <div style={{width : '100%'}}>
      <div className={style.mungsList}>
        <ul className={style.mungsList_menu}>
          {newList2 && newList2.map((l)=>(
            <li>{l.title}</li>
          ))}
        </ul>
        <InstagramComp/>
      </div>
          {userInfor &&
                <Link 
                to={"/createpostcomp"} 
                className='create-post'
                >
                  <div className='write-box'>
                  <img className='write' src="./img/pen.png" />
                  </div>
                </Link>
              }
    </div>
  )
}
