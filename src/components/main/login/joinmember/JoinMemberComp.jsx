import React, { useState } from 'react'
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createTheme  } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../../../data/firebase';

import basicProfile from '../../../../img/basicprofile.png'

import {
    Wrap, JoinWrap, Jointext, LogoImage, TextWrap, StyledText, Aglog, Text, TextSpan, StyleForm
    , StyledInput, StyledFieldset, StyledLabel, StyledWrapper, StyledIconButton, StyledInputPw, PwButton,
    CheckStyle, FormControlStyle, SubmitBtn, ErrorMsg
} from './styles/JoinStylecomp'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { loginUser } from '../LoginSlice';

const theme = createTheme ();

export default function JoinMemberComp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isEnglish = false;

    // 회원가입 정보
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [name, setName] = useState('');
    const [checked, setChecked] = React.useState([false, false, false]);
    const [allChecked, setAllChecked] = React.useState(false);
    const isAllChecked = checked[0] && checked[1] && checked[2];


    // email
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/; // 이메일 유효성을 검사하는 정규식

        setEmail(inputValue);

        // 입력된 값이 이메일 형식에 맞지 않을 경우
        if (!emailRegex.test(inputValue)) {
            setEmailError(true);
        }
        // 입력된 값이 이메일 형식에 맞을 경우 이메일 에러 상태를 false로 설정
        else {
            setEmailError(false);
        }
    };

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

    // confirm password
    const handleConfirmPasswordChange = (event) => {
        const inputValue = event.target.value;

        setConfirmPassword(inputValue);

        if (inputValue !== password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const confirmPasswordErrorMessage = passwordError ? '비밀번호가 일치하지 않습니다.' : '';

    // name
    const handleInputChangeName = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
    }


    // 약관동의
    const handleChange1 = (event) => {
        const isChecked = event.target.checked;
        setChecked([isChecked, isChecked, isChecked]);
        setAllChecked(isChecked && isChecked && isChecked);
    };

    // 회원가입 버튼
    // 모든 입력값이 채워졌을 때 버튼을 활성화하는 상태
    const isButtonEnabled = email && password && confirmPassword && name && !emailError && !passwordError && (checked[0] || checked[1]);


    const handleChange2 = (event) => {
        const isChecked = event.target.checked;
        setChecked([isChecked, checked[1], checked[2]]);
        setAllChecked(isChecked && checked[1] && checked[2]);
    };

    const handleChange3 = (event) => {
        const isChecked = event.target.checked;
        setChecked([checked[0], isChecked, checked[2]]);
        setAllChecked(checked[0] && isChecked && checked[2]);
    };

    const handleChange4 = (event) => {
        const isChecked = event.target.checked;
        setChecked([checked[0], checked[1], isChecked]);
        setAllChecked(checked[0] && checked[1] && isChecked);
    };

    // 회원가입 버튼 클릭 시
    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();

        if (password !== confirmPassword) {
            // 비밀번호가 일치하지 않을 경우 에러 처리
            console.log('비밀번호가 일치하지 않습니다.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                // 회원가입에 성공한 경우
                const user = userCredential.user;
                console.log('회원가입에 성공했습니다.');
                // 여기에서 원하는 추가 동작 수행 가능
                
                //회원가입 성공시 displayName에 이름 넣기
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL : basicProfile
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                //회원가입 성공시 firestore에 유저 데이터 생성
                const setData = async() =>{
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                    } else {
                    // docSnap.data() will be undefined in this case
                    await setDoc(doc(db, "users", user.uid), {
                        email : user.email,
                        likeList : [],
                        cartList : []
                        });
                    }
                }
                setData();

                // 회원가입 후 자동으로 로그인 처리
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // 로그인에 성공한 경우
                        const user = userCredential.user;
                        console.log('로그인에 성공했습니다.');
                        // 여기에서 원하는 추가 동작 수행 가능
                        const uid = user.uid;
                        const username = user.displayName;
                        const photo = user.photoURL;
                        const imfor = {
                            uid : uid,
                            name : username,
                            photo : photo
                            }
                        dispatch(loginUser(imfor))
                        // 로그인 후 페이지 이동
                        navigate('/');

                    })
                    .catch((error) => {
                        // 로그인에 실패한 경우
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('로그인에 실패했습니다.', errorMessage);
                        // 여기에서 원하는 실패 처리 수행 가능
                    });
            })
            .catch((error) => {
                // 회원가입에 실패한 경우
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('회원가입에 실패했습니다.', errorMessage);
                // 여기에서 원하는 실패 처리 수행 가능
            });
    };


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>
            <FormControlLabel
                label="[필수] 19세 이상이며, 서비스 이용약관에 동의합니다."
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="[필수] 개인정보 수집 및 이용에 동의합니다."
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="[선택] 00에 관한 최근 소식, 혜택 및 서비스 관련 정보를
                Email로 받아보겠습니다."
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
        </Box>
    );
    return (
        <ThemeProvider theme={theme}>
            <Wrap>
                <JoinWrap src="../img/login.png" />
                <Jointext>
                    <TextWrap>
                        <LogoImage src="../img/logo.svg" alt="" />
                        <Aglog>
                            <StyledText isEnglish={isEnglish}>회원가입</StyledText>
                            <Text>
                                이미 계정이 있으신가요?
                                <TextSpan onClick={()=>{navigate('/login')}}>로그인</TextSpan>
                            </Text>
                        </Aglog>
                    </TextWrap>
                    <StyleForm onSubmit={signUp}>
                        {/* 이메일 */}
                        <StyledFieldset>
                            <StyledLabel>이메일</StyledLabel>
                            <StyledWrapper>
                                <StyledInput
                                    id='email'
                                    aria-invalid='false'
                                    autoComplete='username'
                                    placeholder='이메일을 입력해주세요'
                                    inputProps={{
                                        maxLength: 60,
                                        autoComplete: 'off',
                                    }}
                                    error={emailError}
                                    variant="outlined"
                                    helperText={emailError ? '유효한 이메일 주소를 입력해주세요' : ''}
                                    value={email}
                                    onChange={handleInputChange}
                                >
                                </StyledInput>
                            </StyledWrapper>
                        </StyledFieldset>

                        {/* 비밀번호 */}
                        <StyledFieldset>
                            <StyledLabel>비밀번호</StyledLabel>
                            <StyledWrapper>
                                <FormControl>
                                    <StyledInputPw
                                        id="filled-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='비밀번호를 입력해주세요'
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
                                        helpertext={confirmPasswordErrorMessage}
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

                        {/* 이름 */}
                        <StyledFieldset>
                            <StyledLabel>이름</StyledLabel>
                            <StyledWrapper>
                                <StyledInput
                                    id='name'
                                    aria-invalid='false'
                                    autoComplete='username'
                                    placeholder='이름을 입력해주세요'
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

                        {/* 약관동의 */}
                        <StyledFieldset>
                            <StyledLabel>약관동의</StyledLabel>
                            <StyledWrapper>
                                <CheckStyle>
                                    <FormControlStyle
                                        label="전체동의"
                                        control={
                                            <Checkbox
                                                checked={isAllChecked}
                                                onChange={handleChange1}
                                            />
                                        }
                                    />
                                    {children}
                                </CheckStyle>
                            </StyledWrapper>
                        </StyledFieldset>

                        <SubmitBtn
                            enabled={isButtonEnabled}>
                            회원가입
                        </SubmitBtn>
                    </StyleForm>
                </Jointext>
            </Wrap>
        </ThemeProvider>
    )
}
