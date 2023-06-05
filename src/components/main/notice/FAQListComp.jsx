import React, { useState } from "react";
import styled from "styled-components";

export default function FAQListComp() {
  // useState를 이용해 각 리스트를 클릭했을 때 상세 내용 표시
  const [activeMore, setActiveMore] = useState("");

  const handleMoreClick = (more) => {
    if (activeMore === more) {
      // ListMore가 이미 클릭되어 활성화 상태일 때
      // activeMore값을 초기화 → ListMore 숨김 처리
      setActiveMore("");
    } else {
      // ListMore가 활성화 상태가 아닐 때
      // 클릭한 ListMore를 보여 줌
      setActiveMore(more);
    }
  };

  // styled-components로 컴포넌트 정의
  const FAQ = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 50px;
  `;

  const ListSet = styled.div`
    margin: auto;
  `;

  const List = styled.div`
    display: flex;
    justify-content: space-between;
    width: 530px;
    padding: 20px;
    background-color: #ebebeb;
    border-radius: 7px;

    &:hover {
      cursor: pointer;
    }
  `;

  const ListMore = styled.div`
    width: 530px;
    padding: 20px;
    background-color: #fad8d8;
    border-radius: 7px;
  `;

  const Content = styled.div``;

  return (
    <FAQ>
      <ListSet>
        <List onClick={() => handleMoreClick("more")}>
          <Content>FAQ 첫 번째 내용입니다</Content>
          <Content>+</Content>
        </List>
        {activeMore === "more" && (
          <ListMore>
            있는 같이, 아름답고 열락의 뛰노는 있으랴? 사라지지 품었기 가는
            뛰노는 말이다. 열락의 이것은 이상 인생을 무한한 뼈 끝에 우리는
            기관과 쓸쓸하랴? 쓸쓸한 이상 곳으로 있는 실로 용기가 굳세게 보라.
            이상 이것이야말로 것은 예수는 품에 돋고, 교향악이다. 착목한는 있는
            청춘은 심장은 아니한 오아이스도 주는 목숨이 보라. 인도하겠다는 돋고,
            이상 사랑의 대한 무엇이 가치를 것은 봄바람을 위하여서. 속에서 것은
            얼마나 같은 이것이다. 수 노래하며 불어 위하여서, 못할 그들의 뜨고,
            위하여 부패뿐이다. 하였으며, 힘차게 못하다 어디 그들은 과실이
            이것이다. 별과 그와 찾아다녀도, 되는 붙잡아 그들에게 속에 사막이다.
            위하여서 원대하고, 튼튼하며, 풀이 밝은 것이다. 보는 석가는 가진
            그들의 위하여서.
          </ListMore>
        )}
      </ListSet>
    </FAQ>
  );
}
