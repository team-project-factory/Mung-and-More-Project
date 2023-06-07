import React, { useEffect,useState } from 'react'

// 파이어스토어 데이터 읽기
import { collection,doc,getDoc,getDocs } from 'firebase/firestore';
import { db } from '../../../data/firebase';



// script로 kakao map을 들고오면 window 전역 객체에 들어가기 떄문에
// 함수형 컴포넌트에서 인식하지 못함
// 따라서 아래와 같이 window에서 kakao 객체를 뽑아서 사용


const {kakao} = window;

export const LocationComp = () => {

  const [cafes,setCafes] = useState("")
  const [pathes,setPathes] = useState("")
  const [hospitals,setHospitals] = useState("")
  const [type,setType] = useState("path")

  useEffect(()=>{
    const getLocationList = async() =>{
      const querySnapshot2 = await getDoc(doc(db, "location","path"));
      setPathes(querySnapshot2.data().pathList);
      const querySnapshot3 = await getDoc(doc(db, "location","hospital"));
      setHospitals(querySnapshot3.data().hospitalList);
      const querySnapshot1 = await getDoc(doc(db, "location","cafe"));
      setCafes(querySnapshot1.data().cafeList);
      getLocationList();
    }
  },[])
  
  

  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.154488, 129.059278),
      level: 9
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
    
  }, []);
  
  useEffect(() => {
    if (map) {
      createPathMarkers();
      createHospitalMarkers();
      createCafeMarkers();
      changeMarker(type, map);
    }
  }, [map]);


  // 산책로 마커가 표시될 좌표 배열
  const pathPositions = [
    new window.kakao.maps.LatLng(35.1641542, 129.0648058),
    new window.kakao.maps.LatLng(35.1681608 ,129.0573853),
    new window.kakao.maps.LatLng(35.1845903 ,129.090778),
    new window.kakao.maps.LatLng(35.1687484 ,128.9735403),
    new window.kakao.maps.LatLng(35.1531696 ,129.118666),
    new window.kakao.maps.LatLng(35.1564651 ,129.0783217),
    new window.kakao.maps.LatLng(35.1706486 ,129.1254273),
    new window.kakao.maps.LatLng(35.1269223 ,129.1008906),
    new window.kakao.maps.LatLng(35.1154525 ,129.1234207),
    new window.kakao.maps.LatLng(35.1228826 ,129.1238165)
  ];

  // 동물병원 마커가 표시될 좌표 배열
  const hospitalPositions = [
    new window.kakao.maps.LatLng(35.1688269, 129.0668249),
    new window.kakao.maps.LatLng(35.1908029, 129.0779383),
    new window.kakao.maps.LatLng(35.1579972, 129.0545914),
    new window.kakao.maps.LatLng(35.161707, 129.062766),
    new window.kakao.maps.LatLng(35.097581, 128.922045),
    new window.kakao.maps.LatLng(35.1353224, 129.0907874),
    new window.kakao.maps.LatLng(35.1236559, 129.0435712),
    new window.kakao.maps.LatLng(35.2110324, 129.0755413),
    new window.kakao.maps.LatLng(35.1778839, 129.0479764),
    new window.kakao.maps.LatLng(35.1516122, 129.0124815),
  ];

  // 애견카페 마커가 표시될 좌표 배열입니다
  const cafePositions = [
    new window.kakao.maps.LatLng(35.0480138, 128.9668879),
    new window.kakao.maps.LatLng(35.0989232, 129.0286563),
    new window.kakao.maps.LatLng(35.153639, 129.065654),
    new window.kakao.maps.LatLng(35.09934, 129.0317647),
    new window.kakao.maps.LatLng(35.1547761, 129.1201317),
    new window.kakao.maps.LatLng(35.1766136, 129.1264725),
    new window.kakao.maps.LatLng(35.1796538, 129.1986063),
    new window.kakao.maps.LatLng(35.191141, 129.2135967),
    new window.kakao.maps.LatLng(35.1989641, 129.0761268),
    new window.kakao.maps.LatLng(35.1193245, 129.1157462),
  ];

  const markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
  const pathMarkers = []; // 산책로 마커 객체를 가지고 있을 배열
  const hospitalMarkers = []; // 동물병원 마커 객체를 가지고 있을 배열
  const cafeMarkers = []; // 애견카페 마커 객체를 가지고 있을 배열

  // 마커 이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수
  function createMarkerImage(src, size, options) {
    const markerImage = new window.kakao.maps.MarkerImage(src, size, options);
    return markerImage;
  }

  // 좌표와 마커 이미지를 받아 마커를 생성하여 리턴하는 함수
  function createMarker(position, image) {
    const marker = new window.kakao.maps.Marker({
      position: position,
      image: image
    });

    return marker;
  }

  // 산책로 마커를 생성
  function createPathMarkers() {
    for (let i = 0; i < pathPositions.length; i++) {
      const imageSize = new window.kakao.maps.Size(22, 26);
      const imageOptions = {
        spriteOrigin: new window.kakao.maps.Point(10, 0),
        spriteSize: new window.kakao.maps.Size(36, 98)
      };

      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);
      const marker = createMarker(pathPositions[i], markerImage);

      pathMarkers.push(marker);
    }
  }

  function setPathMarkers(map) {
    for (let i = 0; i < pathMarkers.length; i++) {
      pathMarkers[i].setMap(map);
    }
  }

  function createHospitalMarkers() {
    for (let i = 0; i < hospitalPositions.length; i++) {
      const imageSize = new window.kakao.maps.Size(22, 26);
      const imageOptions = {
        spriteOrigin: new window.kakao.maps.Point(10, 36),
        spriteSize: new window.kakao.maps.Size(36, 98)
      };

      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);
      const marker = createMarker(hospitalPositions[i], markerImage);

      hospitalMarkers.push(marker);
    }
  }

  function setHospitalMarkers(map) {
    for (let i = 0; i < hospitalMarkers.length; i++) {
      hospitalMarkers[i].setMap(map);
    }
  }

  function createCafeMarkers() {
    for (let i = 0; i < cafePositions.length; i++) {
      const imageSize = new window.kakao.maps.Size(22, 26);
      const imageOptions = {
        spriteOrigin: new window.kakao.maps.Point(10, 72),
        spriteSize: new window.kakao.maps.Size(36, 98)
      };

      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);
      const marker = createMarker(cafePositions[i], markerImage);

      cafeMarkers.push(marker);
    }
  }

  function setCafeMarkers(map) {
    for (let i = 0; i < cafeMarkers.length; i++) {
      cafeMarkers[i].setMap(map);
    }
  }

  
  function changeMarker(type) {
    const pathMenu = document.getElementById('pathMenu');
    const hospitalMenu = document.getElementById('hospitalMenu');
    const cafeMenu = document.getElementById('cafeMenu');
    //산책로 클릭시 발생
    if (type === 'path') {
      pathMenu.className = 'menu_selected';
      hospitalMenu.className = '';
      cafeMenu.className = '';
      setPathMarkers(map);
      setHospitalMarkers(null);
      setCafeMarkers(null);
    }
    // 동물병원 클릭시 발생 
    else if (type === 'hospital') {
      pathMenu.className = '';
      hospitalMenu.className = 'menu_selected';
      cafeMenu.className = '';
  
      setPathMarkers(null);
      setHospitalMarkers(map);
      setCafeMarkers(null);
    }
    //애견카페 클릭시 발생
    else if (type === 'cafe') {
      pathMenu.className = '';
      hospitalMenu.className = '';
      cafeMenu.className = 'menu_selected';
      setPathMarkers(null);
      setHospitalMarkers(null);
      setCafeMarkers(map);
    }
  }



  return (
    <div style={{ display: 'flex', justifyContent: 'left' }}>
      <div id="map" style={{ width: '500px', height: '400px' ,margin:'10%' }}></div>
      <div style={{marginTop:'10%', marginLeft:'-5%'}}>
        <button id="pathMenu" onClick={() => changeMarker('path',map)}>
          산책로
        </button>
        <button id="hospitalMenu" onClick={() => changeMarker('hospital',map)}>
          동물병원
        </button>
        <button id="cafeMenu" onClick={() => changeMarker('cafe',map)}>
          애견카페
        </button>
      </div>
      <div style={{margin : '10%'}}>
      <ul>
        {pathes && pathes.map((path,index) => (
          <li key={index}>
            <h3>{path.name}</h3>
            <p>Content: {path.content}</p>
            <p>장소: {path.place}</p>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
  }