import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


//css
import style from './mungsnewscomp.module.scss'

//파이어베이스
import { db } from '../../../../data/firebase';
import { collection, getDocs } from "firebase/firestore";


export const MungsNewsComp = () => {
  const [news, setNews] = useState('');


  useEffect(()=>{
    const getData = async() =>{
      const querySnapshot = await getDocs(collection(db, "News"));
      const newsList = [];
      querySnapshot.forEach((doc) => {
        const data =doc.data().news;
        newsList.push({
          id : doc.id,
          ...data
        });
      });
      setNews(newsList.reverse());     
    }
    getData();
  },[]);

  

  return (
    <div className={style.mungsList}>
      <ul className={style.mungsList_menu}>
          {news && news.map((n,i)=>(
            <li key={i}>
              <NavLink to={`/mungsnews/${n.id}`}
              className={({ isActive })=>(isActive ? style.active : '' )}
              >
                {n.title}
              </NavLink>
            </li>
          ))}
      </ul>
      <Outlet/>
    </div>
  )
}
