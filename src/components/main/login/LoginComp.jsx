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
  //로그인 실패시
  const [fail, setFail] = useState(true);

  //로그인 버튼 이벤트
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
        setFail(false)
      });
  }


  return (
    <div className={style.loginList}>
      <div className={style.loginList_imgBox}>
        <img src='./img/login.png'></img>
      </div>
      <div className={style.loginList_LoginBox}>
        <div className={style.loginList_LoginBox_div}>
          <ul>
            <Link to={`/`}><img src="/img/LOGO.svg" alt="" width={`35%`}/></Link>
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
              <div className={style.failBox}
              style={fail ? {display:'none'}:{display:''}}
              >이메일 주소 또는 비밀번호를 확인해주세요</div>
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
