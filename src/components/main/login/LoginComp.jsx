import React from 'react'
import style from './logincomp.module.scss'
import { auth } from '../../../data/firebase'
import { Link } from 'react-router-dom'

export const LoginComp = () => {

  return (
    <div className={style.loginList}>
      <div className={style.loginList_imgBox}>img 나올곳</div>
      <div className={style.loginList_LoginBox}>
        <div>
          <ul>
            <h1>LOGO</h1>
            <h2>한줄 소개가 들어갈 공간</h2>
            <form>
              <li><input type="email" id="" placeholder='이메일(example@email.com)' required /></li>
              <li><input type="password" id="" placeholder='비밀번호' required/></li>
              <li><input type="submit" value={'Login'}/></li>
            </form>
            <p>회원이 아니신가요? <Link to={'/joinmember'}>지금 가입하세요</Link> </p>
          </ul>
        </div>
      </div>
    </div>
  )
}
