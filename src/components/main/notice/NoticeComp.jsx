import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// SearchBar 컴포넌트 불러오기
import SearchComp from "./SearchComp";

// FAQ, Notice, Event 리스트 컴포넌트 불러오기
import FAQListComp from "./FAQListComp";
import NoticeListComp from "./NoticeListComp";
import EventListComp from "./EventListComp";

export const NoticeComp = () => {
  // useState를 이용해 각 카테고리를 클릭했을 때 해당되는 리스트만 표시
  const [activeCat, setActiveCat] = useState("FAQ");

  const handleCatClick = (cat) => {
    setActiveCat(cat);
  };

  // styled-components로 컴포넌트 정의
  // Notice page Navbar 전체를 감싸는 div
  const NoticeNav = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background-color: #ebebeb;
    border-radius: 80px;
    width: 880px;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 10px;
  `;

  // Navbar 각각의 카테고리를 감싸는 div
  const Categories = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    text-align: center;
  `;

  // Navbar 각각의 카테고리에 해당하는 div
  const Category = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 110px;
    margin: auto;
    width: 65px;

    &:hover {
      cursor: pointer;
    }
  `;

  // 각각의 카테고리가 활성화됐을 때 적용할 스타일
  const ActiveCategory = styled(Category)`
    margin: auto;
    background-color: white;
    height: 65px;
    border-radius: 85px;
    width: 65px;
    text-align: center;
  `;

  return (
    <>
      <NoticeNav>
        <Categories>
          <Category
            onClick={() => handleCatClick("FAQ")}
            className={activeCat === "FAQ" ? "active" : ""}
            as={activeCat === "FAQ" ? ActiveCategory : undefined}
          >
            FAQ
          </Category>

          <Category
            onClick={() => handleCatClick("Notice")}
            className={activeCat === "Notice" ? "active" : ""}
            as={activeCat === "Notice" ? ActiveCategory : undefined}
          >
            Notice
          </Category>

          <Category
            onClick={() => handleCatClick("Event")}
            className={activeCat === "Event" ? "active" : ""}
            as={activeCat === "Event" ? ActiveCategory : undefined}
          >
            Event
          </Category>
        </Categories>
      </NoticeNav>

      <SearchComp />

      {activeCat === "FAQ" && <FAQListComp />}
      {activeCat === "Notice" && <NoticeListComp />}
      {activeCat === "Event" && <EventListComp />}
    </>
  );
};
