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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    background-color: white;
    border-radius: 80px;
    padding: 20px;
    width: 545px;
    margin: auto;
    margin-top: 250px;
    margin-bottom: 10px;
  `;

  // Navbar 각각의 카테고리를 감싸는 ul
  const Categories = styled.ul`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
  `;

  // Navbar 각각의 카테고리에 해당하는 li
  const Category = styled.li`
    padding: 20px;
    margin-left: 103px;

    &:first-child {
      margin-left: 45px;
    }

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      <NoticeNav>
        <Categories>
          <Category
            onClick={() => handleCatClick("FAQ")}
            className={activeCat === "FAQ" ? "active" : ""}
          >
            FAQ
          </Category>

          <Category
            onClick={() => handleCatClick("Notice")}
            className={activeCat === "Notice" ? "active" : ""}
          >
            Notice
          </Category>

          <Category
            onClick={() => handleCatClick("Event")}
            className={activeCat === "Event" ? "active" : ""}
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
