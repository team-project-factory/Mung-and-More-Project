import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

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
export const MainTitle = styled.h2`
    padding: 50px 0;
    text-align: center;
    font-size: 60px;
    font-weight: 700;
`
export const Main2Subtitld = styled.p`
    font-size: 23px;
    text-align: center;
    line-height: 32px;
`
export const ImageWrap = styled.div`
    max-width: 1500px;
    position: relative;
    top: 8%;
    margin: 0 auto;
    border-radius: 500px;
`
export const Image = styled.div`
    width: 100%;
`
export const SwiperBtn = styled.div`
    display: flex;
    max-width: 240px;
    margin: 0 auto;
    gap: 60px;
    margin-top: 50px;
`
export const GoBtn = styled.button`
    margin-top: 80px;
    background-color: #000;
    color: #fff;
    width: 310px;
    height: 75px;
    border-radius: 150px;
    font-size: 23px;
    font-weight: 500;
    cursor: pointer;
`
export const WalkWrap = styled.div`
    display: flex;
    align-items: center;
    max-width: 1630px;
    margin: 0 auto;
    gap: 130px;
    justify-content: center;
    padding: 70px 0;
` 
export const TextInfo = styled.div`
    display: block;
`
export const MainInfoTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 25px;
    padding: 20px 0;
`
export const CommuWrap = styled.div`
    display: flex;
    align-items: center;
    max-width: 1630px;
    margin: 0 auto;
    gap: 130px;
    justify-content: center;
    padding: 70px 0;
`