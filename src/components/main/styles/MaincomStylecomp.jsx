import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { keyframes } from 'styled-components';


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
export const WordContainer = styled.div`
    perspective: 1000px;
    font-weight: 800;
    /* font-size: 500px; */
    color: #fff;
`;

export const balance = keyframes`
    0%, 100% {
    transform: rotate(0deg);
}

    30%, 60% {
    transform: rotate(-45deg);
}
`;

export const shrinkjump = keyframes`
    10%, 35% {
		transform: scale(2, .2) translate(0, 0);
	}
	
	45%, 50% {
		transform: scale(1) translate(0, -150px);
	}
	
	80% {
		transform: scale(1) translate(0, 0);
	}
`;
export const falling = keyframes`
    12% {
		transform: rotateX(240deg);
	}
	
	24% {
		transform: rotateX(150deg);
	}
	
	36% {
		transform: rotateX(200deg);
	}
	
	48% {
		transform: rotateX(175deg);
	}
	
	60%, 85% {
		transform: rotateX(180deg);
	}
	
	100% {
		transform: rotateX(0deg);
	}
`;
export const rotate = keyframes`
    20%, 80% {
		transform: rotateY(180deg);
	}
	
	100% {
		transform: rotateY(360deg);
	}
`;
export const toplong = keyframes`
    10%, 40% {
		transform: translateY(-48vh) scaleY(1);
	}
	
	90% {
		transform: translateY(-48vh) scaleY(4);
	}
`;

export const WordSpan = styled.span`
    cursor: pointer;
    display: inline-block;
    font-size: 260px;
    user-select: none;
    line-height: 1;

    &.active:nth-child(1) {
    animation: ${balance} 1.3s ease-out;
    transform-origin: bottom left;
    }
    &.active:nth-child(2) {
    animation: ${shrinkjump} 1s ease-in-out;
	transform-origin: bottom center;
    }
    &.active:nth-child(3) {
    animation: ${falling} 1.8s ease-out;
	transform-origin: bottom center;
    }
    &.active:nth-child(4) {
    animation: ${rotate} 1s ease-out;
    }
    &.active:nth-child(5) {
        animation: ${toplong} 1.3s linear;
    }
    &.active:nth-child(6) {
    animation: ${balance} 1.3s ease-out;
    transform-origin: bottom left;
    }
    &.active:nth-child(7) {
    animation: ${shrinkjump} 1.3s ease-in-out;
    transform-origin: bottom center;
    }
    &.active:nth-child(8) {
    animation: ${falling} 1.2s ease-out;
    transform-origin: bottom center;
    }
    &.active:nth-child(9) {
    animation: ${rotate} 1.3s ease-out;
    transform-origin: bottom left;
    }
`;
export const Container = styled.div`
    min-width: 1920px;
    height: 100vh;
    overflow: hidden;
    text-align: center;
`;

export const Cursor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    mix-blend-mode: difference;

    &__inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.5s ease-in-out;
}

    &--hover {
    .cursor__inner {
    transform: scale(3);
    }
}
`;
export const TitleHover = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;
    background-color: #263035;
`;

export const TitleHoverText = styled.h1`
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 150px;
    font-weight: 700;
    color: #d9e8ef;
`;
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
export const ProductName = styled.p`
    font-size: 22px;
    text-align: left;
    padding: 20px 10px;
`
export const SwiperBtn = styled.div`
    display: flex;
    max-width: 220px;
    margin: 0 auto;
    gap: 60px;
    margin-top: 30px;
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