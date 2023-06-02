import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export default function SearchComp() {
  // styled-components로 폰트 정의
  const FontStlyes = createGlobalStyle`
        @font-face {
            font-family: 'Pretendard-Regular';
            src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'SUITE-Regular';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
        }
    `;

  // style-components로 컴포넌트 정의
  const SearchLayout = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 570px;
    background-color: white;
    margin: auto;
    height: 45px;
    border-radius: 7px;
  `;

  const SearchBar = styled.input.attrs({
    placeholder: "     검색어를 입력해 주시개 🐶",
  })`
    // placeholder용 글꼴
    @font-face {
      font-family: "SUITE-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
        format("woff2");
      font-weight: 400;
      font-style: normal;
    }

    margin: auto;
    margin-top: 10px;
    margin-bottom: 12px;
    width: 530px;
    height: 40px;
    border-radius: 7px;
    border: 0;
    font-family: "SUITE-Regular";
    text-align: center;
  `;

  const SearchBtn = styled.button`
    border: 0;
    background-color: white;
    height: 40px;
    width: 20px;
    margin-right: 15px;
  `;

  return (
    <SearchLayout>
      <SearchBar />
      <SearchBtn>🔍</SearchBtn>
    </SearchLayout>
  );
}
