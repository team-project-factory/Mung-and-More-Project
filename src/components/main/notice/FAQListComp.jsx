import React from "react";
import styled, { keyframes } from "styled-components";

import FAQComp from "./FAQComp";

export default function FAQListComp() {
  // styled-components로 컴포넌트 정의
  // 전체를 감싸는 div
  const FAQ = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 50px;
    font-size: 1.25rem;
  `;

  // FAQ 항목 전체를 감싸는 div(없애면 정렬이 이상해져서 있어야 함)
  const ListSet = styled.div`
    margin: auto;
  `;

  return (
    <FAQ>
      <ListSet>
        <FAQComp removeBorderTop>123222222</FAQComp>
        <FAQComp>123</FAQComp>
      </ListSet>
    </FAQ>
  );
}
