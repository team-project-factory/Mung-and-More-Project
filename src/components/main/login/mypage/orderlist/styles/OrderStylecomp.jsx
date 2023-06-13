import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #F3F5F6;
    height: 115vh;
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
    max-width: 1000px;
    margin: 0 auto;
`
export const OrderWrap = styled.div`
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    top: 150px;
    padding: 25px 0px;
    text-align: initial;
    margin-bottom: 17px;

`
export const OderNum = styled.p`
    font-size: 20px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Medium')};
    margin-bottom: 15px;
`
export const OderInfo = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 25px;
    display: flex;
    gap: 25px;
    align-items: center;
`
export const ProductImg = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: #F2F2F2;
    flex-grow: 0;
`
export const ProductInfo = styled.div`
    flex-grow: 2;
`
export const ProductState = styled.div`
    flex-grow: 1;
    text-align: right;
`