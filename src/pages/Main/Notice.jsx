import React from "react";
import { NoticePageComp } from "../../components/main/notice/NoticePageComp";
import { Nav } from "../../layout/Nav";

export const Notice = () => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div style={{ width: `100%`, position: `relative`, top: "50px" }}>
        <Nav />
      </div>
      <NoticePageComp />
    </div>
  );
};
