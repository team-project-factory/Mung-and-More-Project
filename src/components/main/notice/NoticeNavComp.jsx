import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoticeNavComp = () => {
  // styled-components로 컴포넌트 정의
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
    width: 550px;
    margin: auto;
    margin-top: 250px;
    margin-bottom: 10px;
  `;

  const Categories = styled.ul`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
  `;

  const Category = styled.li`
    padding: 20px;
    margin-left: 103px;

    &:first-child {
      margin-left: 45px;
    }
  `;

  return (
    <NoticeNav>
      <Categories>
        <Category>FAQ</Category>
        <Category>Notice</Category>
        <Category>Event</Category>
      </Categories>
    </NoticeNav>
  );
};
