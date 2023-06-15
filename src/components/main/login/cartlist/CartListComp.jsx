import React from "react";

// Component import
import { CartBoxComp } from "./CartBoxComp";
import { OrderBoxComp } from "./OrderBoxComp";

export const CartListComp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "62%",
        margin: "auto",
      }}
    >
      <CartBoxComp />
      <OrderBoxComp />
    </div>
  );
};
