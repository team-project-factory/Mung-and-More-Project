import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../components/main/login/LoginSlice";
import shoppingSlice from "../components/main/shopping/shoppingSlice";
import CartListSlice from "../components/main/login/cartlist/CartListSlice";
import OrderListSlice from "../components/main/login/cartlist/OrderListSlice";

//store
export default configureStore({
  reducer : {
    user : LoginSlice,
    shopping : shoppingSlice,
    cartList : CartListSlice,
    orderlist : OrderListSlice
  }
})

