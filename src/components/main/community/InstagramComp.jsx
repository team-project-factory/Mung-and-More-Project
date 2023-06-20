import React, { useEffect, useState } from 'react'
import './instagramComp.css'
import style from './instagramComp.module.scss'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, updateDoc, arrayRemove, collection, getDocs, deleteDoc } from 'firebase/firestore';
import {auth, db,storage } from '../../../data/firebase';
import { onAuthStateChanged,getAuth } from 'firebase/auth'
import { ref,deleteObject} from 'firebase/storage'


export default function InstagramComp() {
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  const [uid, setUid] = useState('');
  // 게시물 마다 독립적으로 관리하기 위해 객체 형태로 변경
  const [newList2, setNewList2] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  console.log(newList2);


  // 아래 getData에서 UID 값이 있을 때 실행하도록 하기 위해 작성
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
      }
    });
  }, [])

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


  useEffect(() => {
    getData();
  }, [])

  // 게시글 삭제 함수
  const deletePost = async (postUid,postId) => {
    console.log(postUid);
    console.log(postId);
    const post = newList2.find((post) => post.id === postId);
    console.log(post);
    // 파일 삭제 함수 정의
    if(uid===postUid) {
    const deleteFiles = async () => {
      // 각 파일에 대해 삭제 작업 수행
      const deletePromises = post.images.map((imageUrl) => {
        const fileRef = ref(storage, imageUrl);
        return deleteObject(fileRef);
      });
  
      try {
        await Promise.all(deletePromises);
        alert("게시글 삭제 완료");
      } catch (error) {
        alert("직접 작성한 글만 삭제 할 수 있습니다.", error);
      }
    };
      // DB 삭제 작업 수행
    try {
      // firebase에 있는 모양을 유지하기 위해 이미지 옮기는데 사용한 imageIndex를 삭제
      delete post.imageIndex
      await deleteDoc(doc(db, "post", postId));
      await deleteFiles(); // 파일 삭제 함수 호출
      console.log("사진 파일이 삭제되었습니다.");
    } catch (error) {
      console.error("사진 파일 삭제 오류가 발생했습니다:", error);
    }
  }
  else {
    alert("작성자만 삭제할 수 있습니다.")
  }
}

  // 게시글 삭제 실행 함수.
  const handleDeletePost = (postUid,postId) => {
    getData()
    deletePost(postUid,postId);
  }

  


  // 아래는 슬라이드에 이전, 다음 버튼 함수
  // 게시물 객체인 post를 인자로 받아 해당 게시물의 슬라이드 index를 변경하고 변경된 리스트를 상태로 업데이트
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
          <div className={style.mungsList_news}>
            {newList2 && newList2.map((post, index) => (
              <div key={index}>
                <div className='card'>
                  <div className='top'>
                    <div className='userDetails'>
                        
                        <div className='logo'>
                          <img src={post.photo} alt="Selected" style={{width:"100%", height:"100%"}}/>
                        </div>
                        
                      <h2 className='insta-title'> {post.title} <br /><span className='insta-sub'> {post.location} </span></h2>
                    </div>
                    <div
                      style={{width:'80px', height:'60px', zIndex:'10'}}
                      onMouseEnter={()=>setDeleteId(post.id)}
                      onMouseLeave={()=>setDeleteId("")}>
                      <FontAwesomeIcon 
                        icon={faEllipsisVertical} size='2xl' className='dot'
                      />
                      {uid === post.uid && (
                        <button
                          style={{padding:'10px'}}
                          className='delete-btn'
                          onClick={()=>handleDeletePost(post.uid, post.id)}
                        >
                          삭 제
                        </button>
                      )}
                    </div>
                  </div>
                  <div className='imgBx'>
                    <img

                      className='event-slide-img'
                      src={post.images[post.imageIndex]}
                      alt={`Image ${post.imageIndex + 1}`}
                    />

                    <div className='slide-btn'>
                      {/* 아래 버튼에 onClick시 post를 인자로 전달하여 각버튼이 독립적인 post 객체를 받게끔 설정 */}
                      <button className='prev-btn' onClick={() => btnPrev(post)}>{'<'}</button>
                      <button className='next-btn' onClick={() => btnNext(post)}>{'>'}</button>
                    </div>

                  </div>
                  <div className='actionBtns'>
                    <div className='left'>
                      <FontAwesomeIcon icon={faHeart} size="2xl" color='red' className='heart' />
                      <FontAwesomeIcon icon={faComment} size="2xl" flip='horizontal' className='comment' />
                      <FontAwesomeIcon icon={faPaperPlane} size="2xl" className='share' />

                    </div>
                    <div className='right'>
                      <FontAwesomeIcon icon={faBookmark} size="2xl" />
                    </div>
                  </div>
                  <h4 className='date'>{post.date}</h4>
                  <div className='message'>
                    <p>{post.sub}</p> 
                    <div>{post.des}</div>
                    <span>{post.hash}</span>
                    {post.id}
                  </div>

                  {/* 작성란 */}
                </div>
              </div>
            ))}
          </div>
  )
}
