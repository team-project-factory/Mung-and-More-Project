import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  
  const navbar = {
    display: 'flex', 
    justifyContent:'space-between', 
    alignItems:'center',
    height:`60px`, 
    backgroundColor:`white`,
    borderRadius : `80px`,
    padding :`20px`,
    width: `1280px`,
    margin: `auto`,
  }

  return (
    <div style={navbar}>
      <ul style={{padding:`30px`}}>
        <li>
          <img src="/img/LOGO.svg" alt="" width={"110px"} />
        </li>
      </ul>
      <ul style={{display:'flex', justifyContent: 'left', textAlign:`center`, flexDirection:'row',marginLeft:'-33%'}}>
        <li
        style={{padding:`20px`}}
        ><Link to={`/shopping`}>Shopping</Link></li>
        <li
        style={{padding:`20px`}}
        ><Link to={`/location`}>Loaction</Link></li>
        <li
        style={{padding:`20px`}}
        ><Link to={`/community`}>Community</Link></li>
        <li
        style={{padding:`20px`}}
        ><Link to={`/notice`}>Notice</Link></li>
      </ul>
      <ul style={{backgroundColor: `black`, padding:`20px 50px`, borderRadius:`50px`}}>
        <li><Link to={`/login`}
        style={{color : `white`, fontSize:`1.2rem`}}
        >Login</Link></li>
      </ul>
    </div>
  )
}
