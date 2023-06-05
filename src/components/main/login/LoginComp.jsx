import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//css
import style from './logincomp.module.scss'

//로그인 인증
import { auth } from '../../../data/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginComp = () => {
  const navigater = useNavigate(); 



  //로그인 정보
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e)=>{
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigater('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  return (
    <div className={style.loginList}>
      <div className={style.loginList_imgBox}>img 나올곳</div>
      <div className={style.loginList_LoginBox}>
        <div>
          <ul>
            <h1>LOGO</h1>
            <h2>한줄 소개가 들어갈 공간</h2>
            <form onSubmit={login}>
              <li>
                <input type="email" id="" placeholder='이메일(example@email.com)' required 
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </li>
              <li>
                <input type="password" id="" placeholder='비밀번호' required
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </li>
              <li>
                <input type="submit" value={'Login'}/>
              </li>
            </form>
            <p>회원이 아니신가요? <Link to={'/joinmember'}>지금 가입하세요</Link> </p>
          </ul>
        </div>
      </div>
    </div>
  )
}
