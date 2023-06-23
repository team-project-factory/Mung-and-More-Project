import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


//css
import style from './mungsnewscomp.module.scss'
import style2 from './mungsNewsContens.module.scss'

//파이어베이스
import { db } from '../../../../data/firebase';
import { collection, getDocs } from "firebase/firestore";

import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const MungsNewsComp = () => {
  const [news, setNews] = useState('');
  console.log(news);
  const [btn, setBtn] = useState(true);
  const [deleteId, setDeleteId] = useState('');

  const [newList2, setNewList2] = useState([]);

  useEffect(()=>{
    const getData = async() =>{
      const querySnapshot = await getDocs(collection(db, "News"));
      const newsList = [];
      querySnapshot.forEach((doc) => {
        const data =doc.data().news;
        newsList.push({
          id : doc.id,
          imageIndex : 0,
          ...data
        });
      });
      setNews(newsList.reverse());     
    }
    getData();
  },[]);


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
    <div className={style.mungsList}>
      <ul className={style.mungsList_menu}>
          {news && news.map((n,i)=>(
            <li key={i}>
              <NavLink to={`/mungsnews/${n.id}`}
              className={({ isActive })=>(isActive ? style.active : '' )}
              onClick={()=>{setBtn(false)}}
              >
                {n.title}
              </NavLink>
            </li>
          ))}
      </ul>
      {
        btn && news ? 
        <div className={style2.mungsList_news}>
          <div className='card'>
                  <div className='title'>
                    <div className='userDetails'> 
                        <div className='logo'>
                          {news[0].photo ? <img src={news[0].photo} alt="Selected" style={{width:"100%", height:"100%"}}/>: ''}
                        </div>
                        
                      <h2 className='insta-title'> {news[0].title} <br /><span className='insta-sub'> {news[0].location} </span></h2>
                    </div>
                    <div
                      style={{width:'80px', height:'60px', zIndex:'10'}}
                      onMouseEnter={()=>setDeleteId(news[0].id)}
                      onMouseLeave={()=>setDeleteId("")}>
                      <FontAwesomeIcon 
                        icon={faEllipsisVertical} size='2xl' className='dot'
                      />
                    </div>
                  </div>
                  <div className='imgBx'>
                    { news[0].images.length ? 
                    <img
                      className='event-slide-img'
                      src={news[0].images[news[0].imageIndex]}
                      alt={`Image ${news[0].imageIndex + 1}`}
                    /> : <div></div>
                    
                  }
                    { news[0].images.length > 1 ? 
                    <div className='slide-btn'>
                      {/* 아래 버튼에 onClick시 post를 인자로 전달하여 각버튼이 독립적인 post 객체를 받게끔 설정 */}
                      <button className='prev-btn' onClick={() => btnPrev(news[0])}>{'<'}</button>
                      <button className='next-btn' onClick={() => btnNext(news[0])}>{'>'}</button>
                    </div> : <div></div>}

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
                  <h4 className='date'>{news[0].date}</h4>
                  <div className='message'>
                    <p>{news[0].sub}</p> 
                    <div>{news[0].des}</div>
                    <span>{news[0].hash}</span>
                  </div>

                  {/* 작성란 */}
                </div>
        </div>:
        <Outlet/>
      }
    </div>
  )
}
