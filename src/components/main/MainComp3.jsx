import React, { useState, useEffect } from 'react';
import { MainTitle, Image, SwiperBtn, ImageImg, GoBtn,
  ProductSlide, ProductName} from './styles/MaincomStylecomp';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove, getDocs, collection, getDoc  } from "firebase/firestore";
import { db, auth } from '../../data/firebase';
import { Margin } from '@mui/icons-material';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination]);

export const MainComp3 = () => {
  
  const [product ,setProduct] = useState();
  const itemList = [];
  //데이터 들고오기
  const getShoppingItems = async() =>{
    const querySnapshot = await getDocs(collection(db, "shopping_item"));
    querySnapshot.forEach((doc) => {
      itemList.push(...doc.data().itemlist);
    });
    const newItemList = itemList.sort((a,b)=> (a.name - b.name));
    setProduct(newItemList);
  }

    //시작하자마자 shoppingItem, userUID 들고오기
    useEffect(()=>{
      getShoppingItems();
    },[]);

  return (
    <div style={{ backgroundColor: '#CBECB5', height: '100vh', padding: '70px', textAlign: 'center' }}>
      <MainTitle style={{marginBottom:'20px'}}>Let’s go shopping together!</MainTitle>
      <Swiper
        style={{cursor:"pointer"}}
        spaceBetween={20}
        slidesPerView={3}
        // loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        observer = {true}
      >
        {product &&
        product.map((item) => (
          <SwiperSlide key={item.id} style={{ display: 'block', backgroundColor: 'transparent'}}>
            <div style={{ width: '100%',height: '350px', backgroundColor: '#fff', borderRadius: '30px', padding: '50px 0' }}>
              <img src={item.url} alt={item.name} style={{ Width:'150px',height: '330px',objectFit:"contain" }} />
            </div>
            <ProductName>{item.name}</ProductName>
          </SwiperSlide>
        ))}
        <SwiperBtn>
          {/* <div className="swiper-prev">
            <img src={'/img/prevbtn.png'} width={"80px"} style={{opacity:'90%'}} />
          </div>
          <div className="swiper-next">
            <img src={'/img/nextbtn.png'} width={"80px"} style={{opacity:'90%'}}/>
          </div> */}
        </SwiperBtn>
      </Swiper>

        <a href = './shopping'>
        <GoBtn 
          style={{marginTop:'90px'}}>
          Go shopping
        </GoBtn>
        </a>
    </div>
  );
};
