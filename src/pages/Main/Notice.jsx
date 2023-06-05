import React from "react";
import { NoticeComp } from "../../components/main/notice/NoticeComp";
import { Nav } from "../../layout/Nav";

export const Notice = () => {
  return (
    <div>
      <div style={{ width: `100%`, position: `relative`, top: "50px" }}>
        <Nav />
      </div>
      <NoticeComp />
    </div>
  );
};
