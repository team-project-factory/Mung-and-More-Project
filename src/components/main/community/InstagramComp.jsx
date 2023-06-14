import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './instagramComp.css'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, updateDoc, arrayRemove, collection, getDocs } from 'firebase/firestore';
import { auth, db,storage } from '../../../data/firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { ref,deleteObject} from 'firebase/storage'

export default function InstagramComp() {
  const userInfor = JSON.parse(sessionStorage.getItem("user"));
  const [imageIndex, setImageIndex] = useState(0);
  const [uid, setUid] = useState('');
  const [newList2, setNewList2] = useState('');
  const [deleteId, setDeleteId] = useState('');

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
    const querySnapshot = await getDocs(collection(db, "Post"));
    const newList = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      // data.postList 배열을 newList에 추가 ...를 통해 배열 확장하여 요소를 개별 추가
      newList.push(...data.postList);
    });
    // newList2라는 상태 변수 사용 가능
    setNewList2(newList)
  }


  useEffect(() => {
    getData();
  }, [])

  // 게시글 삭제 함수
  const deletePost = async (postId) => {
    const post = newList2.find((post) => post === postId);
    // 파일 삭제 함수 정의
    const deleteFiles = async () => {
      // 각 파일에 대해 삭제 작업 수행
      const deletePromises = post.images.map((imageUrl) => {
        const fileRef = ref(storage, imageUrl);
        return deleteObject(fileRef);
      });
  
      try {
        await Promise.all(deletePromises);
        console.log("파일 삭제 완료");
      } catch (error) {
        console.error("파일 삭제 중 오류가 발생했습니다:", error);
      }
    };
      // DB 삭제 작업 수행
    try {
      await updateDoc(doc(db, "Post", uid), {
        postList: arrayRemove(post)
      });
      await deleteFiles(); // 파일 삭제 함수 호출
      alert("게시물이 삭제되었습니다.");
    } catch (error) {
      console.error("게시물 삭제 중 오류가 발생했습니다:", error);
    }
  };
  

  // 게시글 삭제 실행 함수
  const handleDeletePost = (postId) => {
    deletePost(postId);
    getData("");
  }

  


  // 아래는 슬라이드에 이전, 다음 버튼 함수
  function btnPrev(images) {
    const index = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(index);
  }
  
  function btnNext(images) {
    const index = (imageIndex + 1) % images.length;
    setImageIndex(index);
  }

  return (
    <div className='body'>
      <div>
        {newList2 && newList2.map((post, index) => (
          <div key={index}>
            <div className='card'>
              <div className='top'>
                <div className='userDetails'>
                  <div className='profile_img'>
                    <img src="./img/logo.png" className='logo' />
                  </div>
                  <h3> {post.title} <br /><span> {post.location} </span></h3>
                </div>
                <div
                  style={{width:'50px', height:'50px', zIndex:'10'}}
                  onMouseEnter={()=>setDeleteId(post.id)}
                  onMouseLeave={()=>setDeleteId("")}>
                  <FontAwesomeIcon 
                    icon={faEllipsisVertical} size='2xl' className='dot'
                  />
                  {deleteId === post.id && (
                    <button
                      style={{padding:'10px'}}
                      className='delete-btn'
                      onClick={()=>handleDeletePost(post)}
                    >
                      삭제
                    </button>
                  )}
                </div>
              </div>
              <div className='imgBx'>
                <img
                  className='event-slide-img'
                  src={post.images[imageIndex]}
                  alt={`Image ${imageIndex + 1}`}
                  style={{ width: '340px' }}
                />

                <div className='slide-btn'>
                  <button className='prev-btn' onClick={() => btnPrev(post.images)}>{'<'}</button>
                  <button className='next-btn' onClick={() => btnNext(post.images)}>{'>'}</button>
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
              <h4 className='likes'>{post.date}</h4>
              <h4 className='message'><b>{post.sub}</b> {post.des} <span>{post.hash}</span></h4>
            </div>
          </div>
        ))}
      </div>
      {userInfor &&
        <Link to={"/createpostcomp"}>게시글 작성</Link>
      }
    </div>
  )
}
