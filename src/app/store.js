import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../components/main/login/LoginSlice";
import shoppingSlice from "../components/main/shopping/shoppingSlice";
import CartListSlice from "../components/main/login/cartlist/CartListSlice";

//store
export default configureStore({
  reducer : {
    user : LoginSlice,
    shopping : shoppingSlice,
    cartList : CartListSlice,
  }
})

