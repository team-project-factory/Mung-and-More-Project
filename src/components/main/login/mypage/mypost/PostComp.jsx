import React,{ useState, useEffect } from 'react'
import { Nav } from '../../../../../layout/Nav';

//파이어베이스
import { db } from '../../../../../data/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
    Wrap, Title, ContentWrap, PostWrap, Post, PostInner, PostInfo, Goto, Date, PostTitle

} from './styles/PostStyleComp'

export default function PostComp() {

    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 추가: 로그인 상태

    useEffect(() => {
        // 추가: 로그인 상태 변경 감지
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email || '');
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

    return (
        <Wrap>
            <div style={{ position: "relative", top: "50px" }}>
                <Nav />
            </div>
            <Title>작성한 게시물</Title>
            <ContentWrap>
                <PostWrap>
                    <Post>
                        <PostInner>
                            <img src="./img/board1.png" alt="" />
                            <PostInfo>
                                <Date>00.00.23</Date>
                                <PostTitle>Post Title</PostTitle>
                                <p>{email}</p>
                                <Goto>Go To</Goto>
                            </PostInfo>
                        </PostInner>
                    </Post>
                    <Post>
                        <PostInner>
                            <img src="./img/board1.png" alt="" />
                            <PostInfo>
                                <Date>00.00.23</Date>
                                <PostTitle>Post Title</PostTitle>
                                <p>{email}</p>
                                <Goto>Go To</Goto>
                            </PostInfo>
                        </PostInner>
                    </Post>
                </PostWrap>
            </ContentWrap>
        </Wrap>
    )
}
