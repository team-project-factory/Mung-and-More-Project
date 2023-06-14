import styled from 'styled-components';

export const TitleCircle = styled.div`
    position: relative;
    top: 110px;
    left: 130px;
    /* background-color: #fff;
    width: 600px;
    height: 500px; */
    border-radius: 50%;
    /* transform: skew(-20deg); */
    /* transform: perspective(1000px) rotateX(30deg) rotateY(-20deg); */
    transform: perspective(1000px) rotate3d(4, 2, 0, -40deg);
    transform: skew(8deg);
`
export const DogCircle = styled.div`
    /* position: absolute;
    bottom: 110px;
    right: 150px;
    background-color: #fff;
    width: 750px;
    height: 600px;
    border-radius: 40%;
    transform: skew(-20deg);
    /* transform: perspective(1000px) rotateX(30deg) rotateY(-20deg); */
    /* transform: perspective(1000px) rotate3d(1, 0, 0, 10deg) */
    /* transform: skew(10deg);  */
    position: absolute;
    right: 0;
    bottom: 20px;
`
export const Main2Title = styled.h2`
    padding: 50px 0;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
`
export const Main2Subtitld = styled.p`
    font-size: 23px;
    text-align: center;

`
export const ImageWrap = styled.div`
    width: 1630px;
    height: 700px;
    overflow: hidden;
    background-color: #f5f5f5;
    position: relative;
    top: 12%;
    margin: 0 auto;

`