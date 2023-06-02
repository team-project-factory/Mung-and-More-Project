import React, { useEffect,useState } from 'react'

// script로 kakao map을 들고오면 window 전역 객체에 들어가기 떄문에
// 함수형 컴포넌트에서 인식하지 못함
// 따라서 아래와 같이 window에서 kakao 객체를 뽑아서 사용
const {kakao} = window;

export const LocationComp = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.498004414546934, 127.02770621963765),
      level: 3
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
    
  }, []);
  
  useEffect(() => {
    if (map) {
      createPathMarkers();
      createHospitalMarkers();
      createCafeMarkers();
      changeMarker('path', map);
    }
  }, [map]);

  // 산책로 마커가 표시될 좌표 배열
  const pathPositions = [
    new window.kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new window.kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new window.kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new window.kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new window.kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new window.kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new window.kakao.maps.LatLng(37.49754540521486, 127.02546694890695)
  ];

  // 동물병원 마커가 표시될 좌표 배열
  const hospitalPositions = [
    new window.kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
    new window.kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
    new window.kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
    new window.kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
    new window.kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
    new window.kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
    new window.kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
  ];

  // 애견카페 마커가 표시될 좌표 배열입니다
  const cafePositions = [
    new window.kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
    new window.kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
    new window.kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
    new window.kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
    new window.kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
    new window.kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
    new window.kakao.maps.LatLng(37.497680616783086, 127.02518427952202)
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

  // 산책로 마커를 생ㅅ
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

  function changeMarker(type,newMap) {
    const pathMenu = document.getElementById('pathMenu');
    const hospitalMenu = document.getElementById('hospitalMenu');
    const cafeMenu = document.getElementById('cafeMenu');

    if (type === 'path') {
      pathMenu.className = 'menu_selected';
      hospitalMenu.className = '';
      cafeMenu.className = '';
      setPathMarkers(newMap);
      setHospitalMarkers(null);
      setCafeMarkers(null);
    } else if (type === 'hospital') {
      pathMenu.className = '';
      hospitalMenu.className = 'menu_selected';
      cafeMenu.className = '';
  
      setPathMarkers(null);
      setHospitalMarkers(newMap);
      setCafeMarkers(null);
    } else if (type === 'cafe') {
      pathMenu.className = '';
      hospitalMenu.className = '';
      cafeMenu.className = 'menu_selected';
  
      setPathMarkers(null);
      setHospitalMarkers(null);
      setCafeMarkers(newMap);
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
    </div>
  );
  }
