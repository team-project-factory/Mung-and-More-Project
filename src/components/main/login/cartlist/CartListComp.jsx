import React from "react";

// Component import
import { CartBoxComp } from "./CartBoxComp";
import { OrderBoxComp } from "./OrderBoxComp";

export const CartListComp = () => {
  return (
    <div>
      <CartBoxComp />
      <OrderBoxComp />
    </div>
  );
};
