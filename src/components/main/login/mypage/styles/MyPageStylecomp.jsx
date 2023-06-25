import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { TextField, FilledInput, IconButton } from '@mui/material';


export const Wrap = styled.div`
    background-color: #F3F5F6;
    min-height: 130vh;
`
export const ContentWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`
export const LogoutBtn = styled.button`
    position: absolute;
    top: 240px;
    right: 400px;
    color: #fff;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-size: 16px;
    background-color: #B4CCE3;
    cursor: pointer;
`
export const MypageProfileWrap = styled.div`
    max-width: 500px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 130px;
    border-radius: 12px;
    padding: 25px 50px;
    display: flex;
    align-items: center;
    text-align: initial;
    justify-content: space-between;
    margin-bottom: 17px;
    & :nth-child(0){
        display: block;
    }
`
export const MyProfile = styled.div`
    width: 106px;
    height: 106px;
    background-color: #f5f5f5;
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    margin: 0 auto;
`
export const MyProfileInfo = styled.div`
    flex-grow: 2.6;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    margin-left: 30px;
`
export const MyprofileIcon = styled(CreateOutlinedIcon)`
    border: 1px solid #4D555C;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;

`
export const StyleForm = styled.form`
    max-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    top: 132px;
    border-radius: 12px;
    padding: 25px 50px;
    text-align: end;
    margin-bottom: 20px;
`

export const MyName = styled.p`
    font-size: 22px;
    margin: 0;
    margin-bottom: 12px;
`
export const MyEmail = styled.p`
    font-size: 18px;
    margin: 0;
    margin-top: 12px;
`

export const StyledFieldset = styled.div`
    max-width: 500px;
    margin-top: 10px;
    margin-bottom: 22px;
`
export const StyledLabel = styled.label`
    color: rgb(103,109,114);
    display: block;
    margin-bottom: 8px;
    text-align: initial;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
`
export const StyledWrapper = styled.div`
    width: 100%;
`
export const StyledInput = styled(TextField)`
    width: 500px;
    height: 45px;
    background-color: #F9FAFB;
    border-radius: 5px;
    position: relative;
    
    & .MuiOutlinedInput-root {
    border: none;
    font-size: 14px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-weight: 400;
    height: 45px;
    }
    & .MuiOutlinedInput-notchedOutline {
    border: none;
    }
    &:hover{
        background-color: #f7f8fa;
    }
    &:focus-within {
        border: 1px solid #000000;
    }
`
export const StyledInputPw = styled(FilledInput)`
    width: 500px;
    height: 45px;
    background-color: #F9FAFB !important;
    border-radius: 5px;
    position: relative;
    & .MuiFilledInput-input{
        font-size: 14px !important;
        font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
        font-weight: 400;
        padding: 0;
        padding: 16.5px 14px;
    }
    &:hover{
        background-color: #f7f8fa !important;
    }
    &:focus-within {
        border: 1px solid #000000;
    }
    &:before{
        border: none !important;
    }
    &:after{
        border: none !important;
    }
`
export const PwButton = styled(IconButton)`
    color: #B2B3B4 !important;
    padding: 16.5px 14px !important;
    height: 35px;
    width: 35px;
    margin: 0 !important;
    & .MuiSvgIcon-root{
        font-size: 20px !important;
    }
    & .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root:hover{
        background-color: transparent !important;
    }
`
export const ErrorMsg = styled.div`
    color: #d32f2f;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin-top: 3px;
    margin-right: 14px;
    margin-bottom: 0;
    margin-left: 14px;
`
export const SaveBtn = styled.button`
    color: #fff;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    font-size: 15px;
    /* 활성화된 버튼 스타일 */
    ${({ enabled }) => enabled && `
    /* 활성화된 버튼에 대한 스타일 */
    background-color: #B4CCE3;
    cursor : pointer;
    `}

  /* 비활성화된 버튼 스타일 */
    ${({ enabled }) => !enabled && `
    /* 비활성화된 버튼에 대한 스타일 */
    background-color: #C2C4C7;
    `}
`
export const LineStyle = styled.hr`
    border: 1px solid #F6F6F6;
    margin: 25px 0;
`
export const Withdrawal = styled.div`
    text-align: initial;
    display: flex;
    justify-content: space-between;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
`
export const WithdrawalText = styled.p`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};

`
export const OutBtn = styled.button`
    color: #DB5353;
    background-color: transparent;
    border: none;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Bold')};
    font-size: 16px;
    cursor: pointer;
`
export const UlStyle = styled.ul`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-size: 18px;
    width: 500px;

`
export const LiStyle = styled.li`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    cursor: pointer;
    padding: 2px 0;
`