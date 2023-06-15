import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


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
        console.log(`${doc.id} => ${doc.data().news}`);
        const data =doc.data().news;
        newsList.push({
          id : doc.id,
          ...data
        });
      });
      setNews(newsList);     
    }
    getData();
  },[]);

  

  return (
    <div className={style.mungsList}>
      <div className={style.mungsList_menu}>
        {news && news.map((n)=>(
          <Link to={`/mungsnews/${n.id}`}><h1>{n.title}</h1></Link>
        ))}
      </div>
      <Outlet context={news}/>
    </div>
  )
}
