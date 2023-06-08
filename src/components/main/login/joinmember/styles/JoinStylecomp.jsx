import { CheckBox } from '@mui/icons-material';
import { TextField, IconButton, FilledInput, FormControlLabel, Box } from '@mui/material';
import styled from 'styled-components';

export const StyledText = styled.div`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-size: 1.7rem;
    font-weight: 500;
`;
export const Text = styled.div`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-size: 1rem;
    color: #4D555C;
`;
export const TextSpan = styled.span`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-size: 1rem;
    color: #509DE0;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
`;

export const Wrap = styled.div`
    display: flex;
    height: 100vh;
    text-align: center;
`
export const JoinWrap = styled.img`
    /* flex: 1.3 1 auto; */
    /* background-image: url('../assets/img/login.jpg');
    background-size: cover; */
    height: 100%;
`
export const Jointext = styled.div`
    flex: 1;
    padding: 82px 0;
`
export const LogoImage = styled.img`
    width: 110px;
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    text-align: initial;
`

export const StyleForm = styled.form`
    width: 360px;
`
export const Aglog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
`
export const StyledFieldset = styled.div`
    max-width: 360px;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 35px;
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
    width: 360px;
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
    width: 360px;
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
        background-color: #f7f8fa;
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
export const CheckStyle = styled.div`
    background-color: #F9FAFB;
    text-align: left;
    padding: 16px 14px;
    color: #777D82;
    & .MuiCheckbox-root{
        color: #C7CED6;
    }
    & .css-ahj2mt-MuiTypography-root{
        font-size: 13px !important;
        font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    }
    & .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate{
        color: #000;
    }
`

export const FormControlStyle = styled(FormControlLabel)`
    & .MuiTypography-root{
    font-size: 13px !important;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    font-weight: 300;
    color: #777D82;
    }
    & .MuiCheckbox-root{
        color: #C7CED6;
    }
    & .MuiCheckbox-root.Mui-checked, .MuiCheckbox-indeterminate{
        color: #000;
    }
    & .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate{
        color: #000
    }
`
export const SubmitBtn = styled.button`
    width: 360px;
    height: 50px;
    background-color: #C2C4C7;
    border: none;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;

   /* 활성화된 버튼 스타일 */
    ${({ enabled }) => enabled && `
    /* 활성화된 버튼에 대한 스타일 */
    background-color: #000;
    cursor : pointer;
    `}

  /* 비활성화된 버튼 스타일 */
    ${({ enabled }) => !enabled && `
    /* 비활성화된 버튼에 대한 스타일 */
    background-color: #C2C4C7;
    `}
`