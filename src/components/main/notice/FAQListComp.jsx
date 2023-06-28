import React from "react";
import styled, { keyframes } from "styled-components";

// 게시글 컴포넌트
import ListComp from "./EachListComp";

export default function FAQListComp() {
  // styled-components로 컴포넌트 정의
  // 전체를 감싸는 div
  const FAQ = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 80px;
    font-size: 1.25rem;
  `;

  // FAQ 항목 전체를 감싸는 div
  const ListSet = styled.div`
    margin: auto;
  `;

  return (
    <FAQ>
      <ListSet>
        <ListComp content="[자주 묻는 질문] 언제 배송되나요?" removeBorderTop>
          Mung & More입니다! <br />
          <br />
          배송은 결제일로부터 영업일 기준 3일 이내에 시작되며, <br />
          <br />
          지연될 경우 문자로 연락드리고 있습니다. <br />
          <br />
          공휴일 배송의 경우 지역마다 차이가 있으니 참고 바랍니다! <br />
          <br />
          빠른 배송을 위해 항상 노력하겠습니다. 감사합니다!
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp content="[자주 묻는 질문] 유통기한과 원산지는 어떻게 되나요?">
          Mung & More입니다! <br />
          <br />
          제품의 유통기한과 원산지는 제품 제조사, 유통업체에 따라 상이합니다.{" "}
          <br />
          <br />
          구체적인 정보는 각 제품의 상세 페이지에 모두 나와 있으니 참고
          바랍니다! <br />
          <br />
          또한 의류와 장난감에 대한 유통기한은 별도로 지정되어있지 않으며,{" "}
          <br />
          <br />
          식품 유통기한은 최소 1년 이상입니다. 감사합니다!
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp content="[자주 묻는 질문] 커뮤니티 게시판에 글을 작성하는 방법이 궁금해요!">
          Mung & More입니다! <br />
          <br />
          게시물 작성을 위해서는 로그인이 필요합니다. <br />
          <br />
          회원가입 방법이 궁금하시다면 아래의 글을 참조 바랍니다. <br />
          <br />
          로그인을 하신 후, 커뮤니티 게시판으로 이동하면 보이는 연필모양의
          아이콘 클릭을 통해 글 작성이 가능하며 <br />
          <br />
          정해진 양식에 따라 작성해 주시면 됩니다. <br />
          <br />
          첨부파일의 개수 제한은 없지만, 확장자명이 .png .jpg 등인 사진 파일만
          첨부 가능합니다. <br />
          <br />
          여러 장의 사진을 첨부하고 싶으시다면 ctrl + 마우스 좌클릭을 통해 한
          번에 선택한 뒤 올려 주세요! <br />
          <br />
          작성이 끝나신 후에는 작성완료 버튼을 눌러 주시면 게시글 작성이
          완료됩니다. 감사합니다!
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp content="[자주 묻는 질문] 회원가입은 어떻게 하나요?">
          Mung & More입니다! <br />
          <br />
          회원가입을 하기 위해서는 먼저 메인 페이지로 이동하여 우측 상단의 login
          버튼을 누릅니다. <br />
          <br />
          "지금 가입하세요"라는 글자를 클릭하시면 회원가입 페이지로 이동하실 수
          있습니다. <br />
          <br />
          양식에 따라 작성하신 뒤 약관동의를 마치고 회원가입을 클릭하시면 가입이
          완료됩니다! <br />
          <br />
          가입하신 계정으로 로그인을 하셨다면 우측 상단의 동그란 아이콘을
          클릭하여 <br />
          <br />
          프로필 사진, 이름, 비밀번호, 배송지 등을 수정 가능하며 주문 내역 및
          작성한 게시글을 확인하실 수 있습니다!
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
      </ListSet>
    </FAQ>
  );
}
