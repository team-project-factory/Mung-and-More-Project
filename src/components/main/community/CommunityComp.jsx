import React from 'react'
import InstagramComp from './InstagramComp'
import { Link } from 'react-router-dom'


export const CommunityComp = () => {
  const userInfor = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <InstagramComp/>
      {userInfor &&
            <Link 
            to={"/createpostcomp"} 
            className='create-post'
            style={{marginLeft:"1420px"}}
            >게시글 작성
            </Link>
          }
    </div>
  )
}
