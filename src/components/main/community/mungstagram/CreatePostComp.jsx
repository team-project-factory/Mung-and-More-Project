import React, { useEffect, useState } from 'react'
import { db,auth,storage } from '../../../../data/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";

export default function CreatePostComp() {
  const navigator = useNavigate();
  const [inputTitle, setInputTitle] = useState('');
  const [inputHash, setInputHash] = useState('');
  const [inputDes, setInputDes] = useState('');
  const [inputSub, setInputSub] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [uid,setUid] = useState('');
  const [file,setFile] = useState([]);
  
  // 게시글 작성 날짜 사용 변수
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const day = currentDate.getDate();
  
  // 로그인 한 ID의 UID값 가져오기
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUid(uid);
      // ...
    } else {
    }
  });
  },[])
  

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const handleHashChange = (e) => {
    setInputHash(e.target.value);
  };
  const handleDesChange = (e) => {
    setInputDes(e.target.value);
  };
  const handleSubChange = (e) => {
    setInputSub(e.target.value);
  };
  const handleLocationChange = (e) => {
    setInputLocation(e.target.value);
  };
  const handleFile = (e) => {
    // 업로드 된 파일들을 배열로 관리하기 위함
    const files = e.target.files;
    const filesArray = Array.from(files);
    setFile((prevFiles) => [...prevFiles, ...filesArray])
  }

  // 사진 파일 업로드 하는 함수
    // 사진 파일 업로드 하는 함수
    const uploadFiles = async () => {
      const storageRef = ref(storage, "slide_images");
      const uploadPromises = file.map((file) => {
        const fileRef = ref(storageRef, file.name);
        return uploadBytes(fileRef, file)
          .then(() => getDownloadURL(fileRef))
          .then((downloadURL) => downloadURL);
      });
  
      try {
        const downloadURLs = await Promise.all(uploadPromises);
        alert('게시글 작성 완료');
        return downloadURLs;
      } catch (error) {
        alert('업로드 실패', error);
        return [];
      }
    };




  // firebase에 input에 작성한 내용 배열로 등록하기
  function addPost(){
    const docRef = doc(db, "Post", uid);
    
    const setData = async() =>{
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
      } else {
      await setDoc(doc(db, "Post", uid), {
          postList : []
          });
      }
      // addPost 실행하면 게시글작성 페이지에서 원래 페이지로 돌아가게끔
      navigator("/community");
  }
  
  // firebase 등록 양식 설정
  const upadteDoc = async() =>{

    // 이미지 파일 업로드
    const imagesUrls = await uploadFiles();

    // Atomically add a new region to the "regions" array field.
    await updateDoc(docRef, {
      postList: arrayUnion({
        id : docRef.id, // 게시물 ID 추가
        title : inputTitle,
        sub : inputSub,
        hash : inputHash,
        des : inputDes,
        location : inputLocation,
        date: `${year}-${month}-${day}`,
        images : imagesUrls
      })
    });
  }
  setData();
  upadteDoc();
}

  

  return (
    <div>
      title : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="text" value={inputTitle} onChange={handleTitleChange} />
      sub title : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="text" value={inputSub} onChange={handleSubChange} />
      location : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="text" value={inputLocation} onChange={handleLocationChange} />
      hash tag : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="text" value={inputHash} onChange={handleHashChange} />
      des : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="text" value={inputDes} onChange={handleDesChange} />
      images : 
      <input 
      style={{padding:"20px", marginTop:"50px"}}
      type="file" multiple={true} onChange={handleFile} />

      <button onClick={addPost}>작성 완료</button>
    </div>
  );
}

