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
    margin-bottom: 20px;
    height: 120px;
`
export const ProductImg = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: #F2F2F2;
    flex-grow: 0;
    text-align: center;
`
export const ProductInfoAll = styled.div`
    display: flex;
    justify-content: center;
    width: 455px;
`
export const ProductInfo = styled.div`
    flex-grow: 2;
    display: grid;
    height: 120px;
    grid-template-rows: 0.6fr 1fr 2fr;
    align-content: stretch;
    align-items: end;
    /* height: 120px; */
`
export const ProductState = styled.div`
    flex-grow: 1;
    text-align: right;
    display: grid;
    height: 120px;
    align-content: space-between;
`
export const Brand = styled.p`
    color: #B2B3B4;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Medium')};
`
export const Name = styled.p`
    font-size: 18px;
`
export const NumWrap = styled.div`
    display: flex;
`
export const Num = styled.p`
    font-size: 16px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Medium')};
    font-weight: 300;
`
export const Date = styled.p`

`
export const Delev = styled.p`
    font-size: 18px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Medium')};
`