import React, { useState, useEffect } from 'react';
import { Nav } from '../../../../../layout/Nav';
import { db, storage } from '../../../../../data/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

import {
    Wrap, Title, ContentWrap, PostWrap, Post, PostInner, PostInfo, Goto, Date, PostTitle
} from './styles/PostStyleComp';

export default function PostComp() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [postList, setPostList] = useState([]);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email || '');
                getData(user.uid);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

    const getData = (userId) => {
        const querySnapshotPromise = getDocs(query(collection(db, 'post'), where('uid', '==', userId)));

        querySnapshotPromise.then((querySnapshot) => {
            const newList = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();

                newList.push({
                    id: doc.id,
                    imageIndex: 0,
                    ...data
                });
            });

            setPostList(newList);
        }).catch((error) => {
            console.log(error);
        });
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
                                <img src={post.photo} alt="" />
                                <PostInfo>
                                    <Date>{post.date}</Date>
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
    );
}
