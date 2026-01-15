import React, { useState, useEffect, useRef } from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Link,useNavigate } from 'react-router-dom';


//파이어베이스
import { db } from '../../../../data/firebase';
import { getAuth, signOut, onAuthStateChanged, updateProfile, updatePassword, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';


import {
  Wrap, MypageProfileWrap, MyProfile, MyProfileInfo, MyName, MyEmail, MyprofileIcon, StyledFieldset
  , StyledLabel, StyledWrapper, StyledInput, StyledInputPw, PwButton, StyleForm, ErrorMsg, SaveBtn
  , LineStyle, Withdrawal, OutBtn, WithdrawalText, UlStyle, LiStyle, LogoutBtn, ContentWrap
} from './styles/MyPageStylecomp'
import { Nav } from '../../../../layout/Nav';


export default function MyPageComp() {
  const navigater = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 추가: 로그인 상태
  const [photo, setPhoto] = useState('');
  //로그인 uid state
  const [userImfor, setUserImfor] = useState('');

  useEffect(() => {
    // 추가: 로그인 상태 변경 감지
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setName(user.displayName || '');
        setEmail(user.email || '');
        setPhoto(user.photoURL || '');
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

  const storage = getStorage();

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
  

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserImfor(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])

  //회원탈퇴
  const handleDeleteUser = () =>{
    const auth = getAuth();
    const user = auth.currentUser;

    console.log(user);

    //컬렉션 안의 유저 데이터 삭제
    const DeleteUserData = async() =>{
      await deleteDoc(doc(db, "users", userImfor));
    }


    deleteUser(user).then(() => {
      // User deleted
    }).catch((error) => {
      // An error ocurred
      // ...
      console.log("회원 탈퇴 중 오류 발생:", error);
    });
    
    DeleteUserData();
    sessionStorage.removeItem('user');
    navigater('/');

  }

  const handleSave = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    // 사용자 이름 업데이트
    name && updateProfile(user, {
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
            console.log(isLoggedIn);
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

  // 이미지 업로드
  const auth = getAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // 이미지 업로드 함수
  const uploadProfileImage = async (file) => {
    const storageRef = ref(storage, 'profile_images/' + file.name);
    await uploadBytes(storageRef, file);
    console.log('프로필 이미지 업로드 완료');

    // 업로드한 이미지의 다운로드 url 가져오기
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  const handleImageUpload = async(e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const imageUrl = await uploadProfileImage(file);

    // Firebase 사용자 프로필 업데이트
    updateProfile(auth.currentUser, {
      photoURL : imageUrl
    }).then(()=>{
      console.log('프로필 이미지 업데이트')
      
    }).catch((error)=>{
      console.log('프로필 이미지 업데이트 실패', error)
    })

  }
  const handleIconClick = () => {
    fileInputRef.current.click();
};
  return (
    <Wrap>
      <div style={{ position: "relative", top: "50px" }}>
        <Nav />
      </div>
      <ContentWrap>
        <MypageProfileWrap>
          <MyProfile>
            <img src={selectedImage ? URL.createObjectURL(selectedImage) : photo} alt="Selected" style={{width:"100%", height:"100%"}}/>
          </MyProfile>
          <MyProfileInfo>
            <MyName>{name}</MyName>
            <MyEmail>{email}</MyEmail>
          </MyProfileInfo>
          <div onClick={handleIconClick}>
            <MyprofileIcon></MyprofileIcon>
            <input
            ref={fileInputRef}
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          </div>
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
              {!name && (
                <ErrorMsg>이름을 입력해주세요</ErrorMsg>
              )}
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
            <OutBtn type='button' onClick={handleDeleteUser}>
              회원탈퇴
            </OutBtn>
          </Withdrawal>
        </StyleForm>
        <MypageProfileWrap>
          <UlStyle>
            <Link to={'/orderlist'}>
              <LiStyle>주문내역</LiStyle>
            </Link>
            <LineStyle />
            <Link to={'/mypost'}>
              <LiStyle>작성한 게시물</LiStyle>
            </Link>
            <LineStyle />
            <Link to={'/edit'}>
              <LiStyle>배송지 수정</LiStyle>
            </Link>
            
          </UlStyle>
        </MypageProfileWrap>
      </ContentWrap>
    </Wrap>
  )
}
