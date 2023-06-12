import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ListComp({ children, content, bgColor, ...rest }) {
  // useState를 이용해 각 리스트를 클릭했을 때 상세 내용 표시
  // activeMore: 각 리스트 아이템의 표시/숨김 상태를 저장
  const [activeMore, setActiveMore] = useState(false);
  const { removeBorderTop, ...otherProps } = rest;

  // 클릭된 항목의 activeMore값을 반전시키는 역할 수행
  const handleMoreClick = (index) => {
    setActiveMore((prevActiveMore) => !prevActiveMore);
  };

  // styled-components로 컴포넌트 정의
  // FAQ 항목 전체를 감싸는 div(없애면 정렬이 이상해져서 있어야 함)
  const ListSet = styled.div`
    margin: auto;
  `;

  // FAQ 각각의 항목
  const List = styled.div`
    display: flex;
    justify-content: space-between;
    width: 815px;
    padding: 20px;
    border-top: ${(props) =>
      removeBorderTop ? "none" : "0.7px solid #c9c9c9"};
    margin-bottom: 5px;
    padding-top: 25px;

    &:hover {
      cursor: pointer;
    }
  `;

  // FAQ 각각의 항목 상세설명
  const ListMore = styled.div`
    width: 815px;
    padding: 20px;
    border-radius: 7px;
    margin-bottom: 30px;
    display: ${(props) => (props.active ? "block" : "none")};
    font-size: 1.1rem;
    background-color: ${(props) => props.bgColor || "#c2dcf475"};
  `;

  // FAQ 각각의 항목 제목
  const Content = styled.div``;

  // FAQ 각각의 항목 펼치기(상세보기) 버튼
  const Button = styled.div``;

  // Button에 적용될 애니메이션
  const BtnAnimation = keyframes`from {transform: rotate(0deg);} to {transform: rotate(180deg);}
  `;

  const ActiveAni = styled(Button)`
    animation: ${BtnAnimation} 0.3s linear;
    animation-fill-mode: forwards; /* 애니메이션이 종료된 후의 상태를 유지 */
    animation-iteration-count: 1; /* 애니메이션을 한 번만 실행 */
  `;

  const DeactiveAni = styled(Button)`
    animation: ${BtnAnimation} 0.3s linear reverse;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `;

  // List의 active, deactive 상태에 따라 적용될 스타일
  const ActiveList = styled(List)`
    font-family: "SUITE-Bold";
    font-weight: bold;
  `;

  const DeactiveList = styled(List)`
    &:hover {
      font-family: "SUITE-Bold";
      font-weight: bold;
    }
  `;

  return (
    <ListSet>
      <List
        onClick={() => handleMoreClick(0)}
        className={activeMore ? "active" : ""}
        as={activeMore === true ? ActiveList : DeactiveList}
      >
        <Content>{content}</Content>
        <Button
          active={activeMore}
          as={activeMore === true ? ActiveAni : DeactiveAni}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      </List>

      <ListMore active={activeMore} bgColor={bgColor}>
        {children}
      </ListMore>
    </ListSet>
  );
}
