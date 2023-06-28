import React, { useState } from "react";
import styled from "styled-components";

// 게시글 컴포넌트
import ListComp from "./EachListComp";

export default function NoticeListComp() {
  // styled-components로 컴포넌트 정의
  // 전체를 감싸는 div
  const Notice = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 80px;
    font-size: 1.25rem;
  `;

  // Notice 항목 전체를 감싸는 div
  const ListSet = styled.div`
    margin: auto;
  `;

  return (
    <Notice>
      <ListSet>
        <ListComp
          content="[공지] 홈페이지 이용 관련 오류 현상"
          bgColor="#fff49386"
        >
          안녕하세요, Mung & More입니다. <br /> <br />
          현재 2023년 **월 **일 (*) 서버 통신 오류로 인해 사이트 이용에 제한이
          있습니다. <br /> <br />
          점검을 진행 중이며 추후 관련 사항에 대해 공지 드릴 예정입니다. <br />{" "}
          <br />
          점검 시간은 약 2시간 정도 소요되며 완료되는 즉시 정상적인 이용이
          가능합니다. <br />
          <br />
          이용에 불편을 드려 대단히 죄송합니다.
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp content="[공지] M & M 제휴 문의" bgColor="#fff49386">
          안녕하세요, Mung & More입니다. <br /> <br />
          제휴신청 절차는 아래와 같습니다. <br />
          <br />
          1. 제휴 신청 <br />
          - 제휴를 위한 구비 서류를 준비하고 "제휴 문의" 문구가 포함된 제목의
          메일을 보내 주세요. <br />
          - koke0415@naver.mmm <br /> <br />
          2. 제휴 심사 <br />
          - 제휴 제안 후 5일 이내 제휴 심사를 진행합니다. <br />
          - 심사 결과는 전화나 E-mail을 통해 안내드립니다. <br />
          <br />
          3. 제휴 상담 <br />
          - 제휴 심사를 통과한 업체에 대해 담당 MD와 조건을 상의합니다. <br />
          - 상의 내용: 조건, 가격, 배송, 정산, 고객 CS 등 <br />
          <br />
          4. 상품 등록 <br />
          - 조건에 대한 상의를 마친 업체의 상품 등록을 진행합니다. - 업체에서
          등록하신 상품에 대한 승인 대기 및 세부 사항 확인 <br />
          <br />
          5. 상품 승인 <br />
          - 승인 대기 중인 상품을 담당자가 선별합니다. <br />- 담당자를 통해
          선별된 상품은 승인이 완료되나, 부적합하다고 판단된 상품은 승인이
          거부될 수 있습니다. <br />
          <br />
          6. 상품 판매 <br />- 승인 완료된 상품은 사이트를 통해 고객에게
          노출되고 및 판매가 가능합니다.
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp
          content="[공지] 6월 30일(금) 배송 관련 공지"
          bgColor="#fff49386"
          removeBorderTop
        >
          안녕하세요, Mung & More입니다. <br /> <br />
          일부 공급사 휴무일로 인해 배송 및 CS 업무가 잠시 중단됩니다. <br />
          <br />
          휴무 공급사는 아래와 같습니다. <br />
          <br />
          유*, 다미*, 매드***, *마펫, *돌펫, **건강, 주베*, 컴포인*, 크라운**
          <br />
          <br />
          휴무일이 끝나는 대로 신속한 배송 및 CS 업무 진행하겠습니다.
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
        <ListComp
          content="[공지] 6월 23일(금) 배송 관련 공지"
          bgColor="#fff49386"
          removeBorderTop
        >
          안녕하세요 Mung & More입니다. <br /> <br />
          일부 공급사 휴무일로 인해 배송 및 CS업무를 잠시 중단합니다. <br />
          <br />
          휴무 공급사는 아래와 같습니다. <br />
          <br />
          유*, 다미*, 매드***, *마펫, *돌펫, **건강, 주베*, 컴포인*, 크라운**
          <br />
          <br />
          휴무일이 끝나는 대로 신속한 배송 및 CS 업무 진행하겠습니다.
        </ListComp>
        <hr style={{ border: "0.7px solid #f5f5f5", margin: "5px 0" }} />
      </ListSet>
    </Notice>
  );
}
