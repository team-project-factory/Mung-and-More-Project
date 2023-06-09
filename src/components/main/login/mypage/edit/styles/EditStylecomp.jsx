import styled from 'styled-components';
import { TextField } from '@mui/material';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import DaumPostCode from 'react-daum-postcode'
import Modal from '@mui/material/Modal';


export const Wrap = styled.div`
    background-color: #F3F5F6;
    height: 115vh;
    text-align: center;
`
export const Title = styled.h2`
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    top: 130px;
    text-align: initial;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-SemiBold')};
`
export const ContentWrap = styled.div`
    max-width: 500px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 150px;
    border-radius: 12px;
    padding: 25px 50px;
    display: flex;
    align-items: center;
    text-align: initial;
    justify-content: space-between;
    margin-bottom: 17px;
`
export const StyledFieldset = styled.div`
    max-width: 560px;
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
    width: 400px;
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
export const AddWrap = styled.div`
    display: flex;
`
export const AddressBtn = styled.button`
    height: 45px;
    width: 100px;
    border: none;
    background-color: #B4CCE3;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`
export const PostCodeStyle = styled(DaumPostCode)`
display: "block";
    position: "absolute";
    top: "50%";
    width: "400px";
    height: "500px";
    padding: "7px";
`
export const ModalStyle = styled(Modal)`
    position: absolute;
    top: "50%";
    left: "50%";
    transform: "translate(-50%, -50%)";
    width: "400px";
    background-color: "background.paper";
    border: 2px solid #000;
    box-shadow: "24";
`