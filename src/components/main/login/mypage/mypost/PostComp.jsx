import React, { useState, useEffect } from 'react'
import { Nav } from '../../../../../layout/Nav';

//파이어베이스
import { db, storage } from '../../../../../data/firebase';
import { getAuth, signOut, onAuthStateChanged, updateProfile, updatePassword, deleteUser } from "firebase/auth";
import { doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import {
    Wrap, Title, ContentWrap, PostWrap, Post, PostInner, PostInfo, Goto, Date, PostTitle
} from './styles/PostStyleComp'

export default function PostComp() {

    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 추가: 로그인 상태
    // 게시물 리스트 상태 추가
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        // 추가: 로그인 상태 변경 감지
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email || '');
                // 데이터 가져오기 함수 호출
                getData(user.uid);
            } else {
                setIsLoggedIn(false);
            }
        });
        
    }, []);

    const getData = async (uid) => {
        const querySnapshot = await getDocs(collection(db, 'post'));
        const newList = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data().post;
            if (data.uid == uid) {
                // 이미지 참조 생성
                const imageRef = ref(storage, data.imagePath);
                // 이미지 다운로드 URL

                newList.push({
                    id: doc.id,
                    imageIndex: 0,
                    ...data
                });
            }

        });
        // 게시물 리스트 상태 업데이트
        setPostList(newList);
    }

    return (
        <Wrap>
            <div style={{ position: "relative", top: "50px" }}>
                <Nav />
            </div>
            <Title>작성한 게시물</Title>
            <ContentWrap>
                <PostWrap>
                    {postList.map((post) => (
                        <Post key={post.id}>
                            <PostInner>
                                <img src={post.images&&post.images[0]} alt="" />
                                <PostInfo>
                                    <Date>00.00.23</Date>
                                    <PostTitle>{post.title}</PostTitle>
                                    <p>{email}</p>
                                    <Goto>Go To</Goto>
                                </PostInfo>
                            </PostInner>
                        </Post>
                    ))}
                </PostWrap>
            </ContentWrap>
        </Wrap>
    )
}
