import styled from 'styled-components';

export const HeaderStyle = styled.header`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-SemiBold')};
    position: sticky;
    display: flex;
    justify-content: center;
    padding: 0px 30px;
    z-index: 5;
`
export const InnerStyle = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    border-radius: 5.2023121387vw;
    background-color: #fff;
    padding: 18px 30px;
    margin: 0 auto;
    
`
export const LogoImage = styled.img`
    width: 110px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const MenuStyle = styled.div`
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-left: 70px;
    font-size: 18px;
`
export const SubItems = styled.div`
    display: none;
    position: absolute;
    top: 107%;
    left: 0;
    width: 164px;
    padding: 24px;
    background-color: #fff;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 8px;
    font-size: 18px;
    line-height: 26px;
    box-shadow: 0 4px 60px rgba(0,0,0,.1);
    
`
export const SubLink = styled.a`
    display: flex;
    padding: 10px 20px;
    border-radius: 8px;
    color: #000;
`
export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-SemiBold')};
    & :hover{
        color: #3067ec;
        cursor: pointer;
    }

`
export const MenuUtil = styled.div`
    display: flex;
    align-items: center;
`
export const LoginBtn = styled.button`
    background-color: #000;
    color: #fff;
    width: 130px;
    height: 50px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Bold')};
    font-size: 18px;
    border-radius: 100px;
    line-height: 16px;
    cursor: pointer;
`
export const MenuItems_item = styled.div`
    margin-left: 23px;
    padding: 0 8px;
`
export const MenuItems_item_slide = styled.div`
    margin-left: 23px;
    padding: 0 8px;
    display: inline-flex;
    align-items: center;
    position: relative;
    &:hover ${SubItems} {
        display: block;
    }
`
export const ProfileImg = styled.img`
    width: 56px;
    height: 56px;
    background-color: #f2f2f2;
    border: 1px solid;
    border-radius: 50%;
    margin-left: 23px;
`
