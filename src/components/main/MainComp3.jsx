import React, { useState, useEffect } from 'react';
import { MainTitle, Image } from './styles/MaincomStylecomp';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove, getDocs, collection, getDoc  } from "firebase/firestore";
import { db, auth } from '../../data/firebase';

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
    <div style={{ backgroundColor: '#CBECB5', height: '100vh', padding: '70px' }}>
      <MainTitle>Let’s go shopping together!</MainTitle>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
      >
        {product && product.map((item) => (
          <SwiperSlide key={item.id}>
            <Image>
              <img src={item.url} alt={item.name} />
              <p>{item.name}</p>
            </Image>
          </SwiperSlide>
        ))}
        <div className="allswiperbutton">
          <div className="swiper-prev">
            <img src={'/img/prevbtn.png'} alt="" />
          </div>
          <div className="swiper-next">
            <img src={'/img/nextbtn.png'} alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
