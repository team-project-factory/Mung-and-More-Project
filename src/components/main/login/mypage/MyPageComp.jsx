import React, { useState, useEffect } from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';

//파이어베이스
import { getAuth, signOut, onAuthStateChanged, updateProfile, updatePassword } from "firebase/auth";

import { useDispatch } from 'react-redux';


import {
  Wrap, MypageProfileWrap, MyProfile, MyProfileInfo, MyName, MyEmail, MyprofileIcon, StyledFieldset
  , StyledLabel, StyledWrapper, StyledInput, StyledInputPw, PwButton, StyleForm, ErrorMsg, SaveBtn
  , LineStyle, Withdrawal, OutBtn, WithdrawalText, UlStyle, LiStyle, LogoutBtn, ContentWrap
} from './styles/MyPageStylecomp'
import { Nav } from '../../../../layout/Nav';


export default function MyPageComp() {
  const navigater = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 추가: 로그인 상태


  useEffect(() => {
    // 추가: 로그인 상태 변경 감지
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setName(user.displayName || '');
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);


  // name
  const handleInputChangeName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  }

  // password
  const handleInputPw = (event) => {
    const inputValue = event.target.value;

    setPassword(inputValue);
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  // new password
  const handleInputNewPw = (event) => {
    const inputValue = event.target.value;
    setNewPassword(inputValue);
  }

  // confirm password
  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;

    setConfirmPassword(inputValue);

    if (inputValue !== newPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const confirmPasswordErrorMessage = passwordError ? '비밀번호가 일치하지 않습니다.' : '';

  const isButtonEnable = password && (name || (newPassword && confirmPassword));

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      sessionStorage.removeItem('user');
      navigater('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleSave = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    // 사용자 이름 업데이트
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        // 업데이트 성공
        console.log('이름 업데이트 성공');
      })
      .catch((error) => {
        // 업데이트 실패
        console.error('이름 업데이트 실패:', error);
      });

    // 비밀번호 변경
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        updatePassword(user, newPassword)
          .then(() => {
            // 비밀번호 업데이트 성공
            console.log('비밀번호 업데이트 성공');
            setPassword(''); // 비밀번호 필드 초기화
            setNewPassword(''); // 새 비밀번호 필드 초기화
            setConfirmPassword(''); // 비밀번호 확인 필드 초기화
          })
          .catch((error) => {
            // 비밀번호 업데이트 실패
            console.error('비밀번호 업데이트 실패:', error);
          });
      } else {
        // 비밀번호가 일치하지 않음
        console.error('비밀번호가 일치하지 않음');
      }
    }
  }




  return (
    <Wrap>
      <div style={{ position: "relative", top: "50px" }}>
        <Nav />
      </div>
      <ContentWrap>
        <MypageProfileWrap>
          <MyProfile />
          <MyProfileInfo>
            <MyName>UserName</MyName>
            <MyEmail>email@gmail.com</MyEmail>
          </MyProfileInfo>
          <MyprofileIcon />
        </MypageProfileWrap>
        <LogoutBtn onClick={handleLogOut}>로그아웃</LogoutBtn>
        <StyleForm>
          {/* name */}
          <StyledFieldset>
            <StyledLabel>이름</StyledLabel>
            <StyledWrapper>
              <StyledInput
                id='name'
                aria-invalid='false'
                autoComplete='username'
                placeholder='username'
                inputProps={{
                  maxLength: 60,
                  autoComplete: 'off',
                }}
                variant="outlined"
                value={name}
                onChange={handleInputChangeName}
              >
              </StyledInput>
            </StyledWrapper>
          </StyledFieldset>
          {/* 현재 비밀번호 */}
          <StyledFieldset>
            <StyledLabel>현재 비밀번호</StyledLabel>
            <StyledWrapper>
              <FormControl>
                <StyledInputPw
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='현재 비밀번호를 입력해주세요'
                  value={password}
                  onChange={handleInputPw}
                  endAdornment={
                    <InputAdornment position="end">
                      <PwButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </PwButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </StyledWrapper>
          </StyledFieldset>
          {/* 새 비밀번호 */}
          <StyledFieldset>
            <StyledLabel>새 비밀번호</StyledLabel>
            <StyledWrapper>
              <FormControl>
                <StyledInputPw
                  id="filled-adornment-newpassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='새 비밀번호를 입력해주세요'
                  value={newPassword}
                  onChange={handleInputNewPw}
                  endAdornment={
                    <InputAdornment position="end">
                      <PwButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </PwButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </StyledWrapper>
          </StyledFieldset>
          {/* 비밀번호 확인 */}
          <StyledFieldset>
            <StyledLabel>비밀번호 확인</StyledLabel>
            <StyledWrapper>
              <FormControl>
                <StyledInputPw
                  id="confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 한 번 더 입력해주세요"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  error={passwordError}
                  helperText={confirmPasswordErrorMessage}
                  endAdornment={
                    <InputAdornment position="end">
                      <PwButton
                        id='pwbutton2'
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </PwButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {passwordError && (
                <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
              )}
            </StyledWrapper>
          </StyledFieldset>
          <SaveBtn
            enabled={isButtonEnable}
            onClick={handleSave}
          >
            저장하기
          </SaveBtn>
          <LineStyle />
          <Withdrawal>
            <WithdrawalText>
              회원탈퇴 시 모든 데이터가 삭제됩니다.
            </WithdrawalText>
            <OutBtn>
              회원탈퇴
            </OutBtn>
          </Withdrawal>
        </StyleForm>
        <MypageProfileWrap>
          <UlStyle>
            <LiStyle>주문내역</LiStyle>
            <LineStyle />
            <LiStyle>작성한 게시물</LiStyle>
            <LineStyle />
            <LiStyle>배송지 수정</LiStyle>
          </UlStyle>
        </MypageProfileWrap>
      </ContentWrap>
    </Wrap>
  )
}
