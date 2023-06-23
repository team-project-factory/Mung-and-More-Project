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
        <ListComp content="언제 배송되나요 ?" removeBorderTop>
          Mung & More입니다! <br /><br />
          배송은 결제일로부터 영업일 기준 3일내에 배송되며 <br /><br />
          지연시 개별로 연락드립니다 <br /><br />
          공휴일의 경우 배송사마다 차이가 있으니 공지사항 참고 바랍니다 !
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="유통기한과 원산지는 어떻게 되나요 ?">
          Mung & More입니다! <br /><br />
          제품의 유통기한과 원산지는 제조사나 판매업체에 따라 상이합니다 <br /><br />
          구체적인 제품에 대한 정보는 제품의 상세 페이지에 나와있으니 참고바랍니다! <br /><br />
          의류와 장난감에 대한 유통기한은 별도 지정되어있지 않으며 <br /><br />
          식품의 경우 유통기한은 최소 1년 이상입니다.
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="게시물 작성 방법이 궁금해요!">
          Mung & More입니다! <br /><br />
          게시물 작성을 위해서는 로그인이 필요합니다. <br /><br />
          회원가입 방법이 궁금하시다면 아래 글을 참조바랍니다 <br /><br />
          로그인을 하신 후에 연필모양의 아이콘 클릭을 통해 작성이 가능하며 <br /><br />
          정해진 양식에 따라 작성해 주시면 됩니다. <br /><br />
          첨부파일의 갯수 제한은 없으며 .png .jpg 등과 같은 사진 파일만 첨부 가능합니다. <br /><br />
          여러 장의 사진을 첨부하고 싶으시다면 ctrl + 마우스 좌클릭을 통해 여러장을 한번에 올려주세요! <br /><br />
          작성이 끝나신 후에는 작성완료 버튼을 눌러주시면 게시글 작성이 됩니다

        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="회원가입은 어떻게 하나요 ?">
          Mung & More입니다! <br /><br />
          회원가입은 먼저 메인 페이지에서 우측 상단의 login 버튼을 눌러주세요 <br /><br />
          "지금 가입하세요"를 클릭하시면 회원가입 창으로 이동할실 수 있습니다. <br /><br />
          양식에 따라 작성 후 약관동의 후 회원가입을 클릭하시면 가입 가능합니다! <br /><br />
          가입하신 계정으로 로그인을 하셨다면 우측 상단에 아이콘을 클릭하여 <br /><br />
          프로필 사진, 이름, 비밀번호, 배송지 등이 수정 가능하며 <br /><br />
          주문 내역 및 작성한 게시글을 확인 하실 수 있습니다!
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        
      </ListSet>
    </FAQ>
  );
}
