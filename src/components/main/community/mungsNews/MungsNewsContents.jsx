import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

//css
import style from './mungsNewsContens.module.scss'

//파이어베이스
import { db } from '../../../../data/firebase';
import { collection, getDocs } from "firebase/firestore";


export const MungsNewsContents = () => {
  const [newsList, setNewsList] = useState('');
  
  const Id = useParams();


  useEffect(()=>{
    const getData = async() =>{
      const querySnapshot = await getDocs(collection(db, "News"));
      const newsList2 = [];
      querySnapshot.forEach((doc) => {
        const data =doc.data().news;
        newsList2.push({
          id : doc.id,
          ...data
        });
      });
      const newNewsList = newsList2.filter((n)=>(
        n.id === Id.name
      ))
      setNewsList(newNewsList);
    }
    getData();
  },[Id]);

  


  console.log(newsList)

  return (
    <div>
      {newsList && newsList.map((n)=>(
        <div>
          <h1>{n.title}</h1>
          <div>
            {n.contents && n.contents.map((c)=>(
              <ul>
                <li>
                  {c.title}
                </li>
              </ul>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
