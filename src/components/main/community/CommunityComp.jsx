import React from 'react'
import InstagramComp from './InstagramComp'
import { Link } from 'react-router-dom'
import './instagramComp.css'


export const CommunityComp = () => {
  const userInfor = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className='nnnn'>
      <InstagramComp/>
      {userInfor &&
            <Link 
            to={"/createpostcomp"} 
            className='create-post'
            style={{marginLeft:"1350px"}}
            >
              <div className='write-box'>
              <img className='write' src="./img/pen.png" />
              </div>
            </Link>
          }
    </div>
  )
}
