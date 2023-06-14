import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #F3F5F6;
    height: 115vh;
`
export const Title = styled.h2`
    max-width: 750px;
    margin: 0 auto;
    position: relative;
    top: 130px;
    text-align: initial;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-SemiBold')};
`
export const ContentWrap = styled.div`
    max-width: 750px;
    margin: 0 auto;
`
export const PostWrap = styled.div`
    max-width: 750px;
    margin: 0 auto;
    position: relative;
    top: 140px;
    padding: 25px 0px;
    text-align: initial;
    margin-bottom: 17px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
`
export const Post = styled.div`
    background-color: #fff;
    width: 365px;
    height: 377px;
    border-radius: 15px;
    overflow: hidden;
`
export const PostInner = styled.div`
    
`
export const PostInfo = styled.div`
    padding: 15px 30px;
    display:grid;
    grid-template-rows: 1fr 1.5fr 1.2fr 1fr;
    height: 150px;
`
export const Date = styled.p`
    color: #C1C1C1;
    font-size: 18px;
    font-weight: 300;
`
export const PostTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const Goto = styled.button`
    width: 304px;
    height: 40px;
    background-color: #C2DCF4;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: #A9C8E4;
    }
`