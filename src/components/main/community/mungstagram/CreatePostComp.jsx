import React, { useEffect, useState } from 'react'
import { db,auth } from '../../../../data/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


export default function CreatePostComp() {
  const navigator = useNavigate();
  const [inputTitle, setInputTitle] = useState('');
  const [inputHash, setInputHash] = useState('');
  const [inputDes, setInputDes] = useState('');
  const [inputSub, setInputSub] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [uid,setUid] = useState('');
  
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
  if(uid){
    console.log(uid)
  }
  

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

  // firebase에 input에 작성한 내용 배열로 등록하기
  function addPost(){
    
    const docRef = doc(db, "Post", uid);
    
    const setData = async() =>{
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
      } else {
      // docSnap.data() will be undefined in this case
      await setDoc(doc(db, "Post", uid), {
          postList : []
          });
      }
      navigator("/community");
  }
  
  // firebase 등록 양식 설정
  const upadteDoc = async() =>{
    // Atomically add a new region to the "regions" array field.
    await updateDoc(docRef, {
      postList: arrayUnion({
        title : inputTitle,
        sub : inputSub,
        hash : inputHash,
        des : inputDes,
        location : inputLocation,
        date: `${year}-${month}-${day}`,
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

      <button onClick={addPost}>작성 완료</button>
    </div>
  );
}

