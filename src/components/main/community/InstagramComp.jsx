import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './instagramComp.css'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {doc,getDoc} from 'firebase/firestore';
import { auth, db } from '../../../data/firebase';
import { onAuthStateChanged } from 'firebase/auth'

export default function InstagramComp() {
    const [imageIndex, setImageIndex] = useState(0);
    const [post,setPost] = useState('');
    const [uid,setUid] = useState('');
  
    // 아래 getPostList에서 UID 값이 있을 때 실행하도록 하기 위해 작성
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
      }
    });
    },[])


    // Post 컬렉션에서 문서이름을 UID로 해놓았기 때문에
    // "컬렉션이름",uid 형태로 집어넣어 사용
    useEffect(()=>{
        if(uid){
        const getPostList = async() =>{
          const querySnapshot2 = await getDoc(doc(db, "Post",uid));
          setPost(querySnapshot2.data().postList);
        }
        getPostList();
    }
    },[uid])


  const images = ["./img/login.png","./img/login2.png","./img/login3.png","./img/login4.png","./img/login5.png"];

  // 아래는 슬라이드에 이전, 다음 버튼 함수
  function btnPrev() {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  
  function btnNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

return (
    <div className='body'>
        <div>
            {post && post.map((post,index) => (
          <div key={index}>
            <div className='card'>
            <div className='top'>
                <div className='userDetails'>
                    <div className='profile_img'>
                        <img src="./img/logo.png" className='logo'/>
                    </div>
                    <h3> {post.title} <br /><span> {post.location} </span></h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEllipsisVertical} size='2xl' className='dot' />
                </div>
            </div>
            <div className='imgBx'>
            <img
                className='event-slide-img'
                src={images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
                style={{width:'340px'}}
            />

        <div className='slide-btn'>
            <button className='prev-btn' onClick={btnPrev}>{'<'}</button>
            <button className='next-btn' onClick={btnNext}>{'>'}</button>
        </div>
                
            </div>
            <div className='actionBtns'>
                <div className='left'>
                    <FontAwesomeIcon icon={faHeart} size="2xl" color='red' className='heart'/>
                    <FontAwesomeIcon icon={faComment} size="2xl" flip='horizontal' className='comment'/>
                    <FontAwesomeIcon icon={faPaperPlane} size="2xl" className='share'/>
                    
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
        <Link to={"/createpostcomp"}>게시글 작성</Link>
    </div>
  )
}
