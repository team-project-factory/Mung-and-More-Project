import React from 'react'
import { Link } from 'react-router-dom'
import InstagramComp from './InstagramComp'

export const CommunityComp = () => {
  return (
    <div>
      <InstagramComp/>
      <div>
      <Link to={"/createpostcomp"}>게시글 작성</Link>
      </div>
    </div>
  )
}
