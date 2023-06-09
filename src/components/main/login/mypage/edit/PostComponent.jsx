import React, { useRef } from 'react';
import ReactDaumPost from 'react-daumpost-hook';

export const PostComponent = function () {
    const ref = useRef(null);

    const postConfig = {
        ref: ref,
        onComplete: (data) => {
            console.log(data);
            // 검색후 해당 컴포넌트를 다시 안보이게 하는 부분
            ref.current.style.display = "none";
        }
    };
    const postCode = ReactDaumPost(postConfig);

    return (
        <main>
            test
            <button onClick={() => postCode()} >우편번호</button>
            <div ref={ref}></div>
        </main>
    );
};