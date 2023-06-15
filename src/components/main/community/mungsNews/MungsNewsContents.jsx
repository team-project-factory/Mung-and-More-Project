import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'



export const MungsNewsContents = () => {
  const [newsList, setNewsList] = useState();
  
  const Id = useParams();
  
  const news = useOutletContext();



  useEffect(()=>{
    if(news){
      const NewList = news.filter((n)=>(
        n.id == Id.name
      ))
      setNewsList(NewList);
    }
  },[])


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
