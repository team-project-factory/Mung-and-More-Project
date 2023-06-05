import React from 'react'
import { Link } from 'react-router-dom'

//css
import style from './Nav.module.scss'

export const Nav = () => {

  return (
    <div className={style.navbar}>
      {/** 로고 */}
      <ul className={style.navbar_logo}>
        <Link to={`/`}>
          <img src="/img/LOGO.svg" alt="" />
        </Link>
      </ul>
      {/** 메뉴 */}
      <ul className={style.navbar_menu}>
        <li><Link to={`/shopping`}>Shopping</Link></li>
        <li><Link to={`/location`}>Loaction</Link></li>
        <li><Link to={`/community`}>Community</Link></li>
        <li><Link to={`/notice`}>Notice</Link></li>
      </ul>
      {/** 로그인  */}
      <ul className={style.navbar_login}>
        <li><Link to={`/login`}>Login</Link></li>
      </ul>
    </div>
  )
}
