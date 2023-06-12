import React from 'react'
import CreatePostComp from '../../components/main/community/mungstagram/CreatePostComp'
import { Nav } from '../../layout/Nav'

export default function CreatePost() {
  return (
    <div>
        <div style={{width : `100%`, position :`relative`, top:'50px'}}>
        <Nav/>
      </div>
      <CreatePostComp/>
    </div>
  )
}
