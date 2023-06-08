import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//css
import style from './Nav.module.scss'
import { useSelector } from 'react-redux';

export const Nav = () => {
  // 로그인
  const [Login, setLogin] = useState(false);
  //버튼 토글
  const [btn, setBtn] = useState(false);
  
  const user = useSelector((state)=>(state));
  console.log(user);


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
        <li>
          <Link to={`/community`}>Community</Link> 
          <span onClick={()=>{setBtn(!btn)}}>
            {btn ? '🔽':'🔼'}
          </span>
          <div>
            <div className={style.navbar_menu_comu} style={btn ? {visibility:''}: {visibility:'hidden'}}>
              <ul className={style.navbar_menu_comu_list}>
                <li><Link to={`/community`}>Mungstagram</Link></li>
                <li><Link to={`/community`}>Mung's News</Link></li>
              </ul>
            </div>
          </div>
        </li>
        <li><Link to={`/notice`}>Notice</Link></li>
      </ul>
      {/** 로그인  */}
        {Login ? 
        <li>로그인했다</li> 
        : 
        <ul className={style.navbar_login}>
        <li><Link to={`/login`}>Login</Link></li>
        </ul>
        }
    </div>
  )
}
