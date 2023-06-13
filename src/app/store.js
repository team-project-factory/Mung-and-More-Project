import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../components/main/login/LoginSlice";
import shoppingSlice from "../components/main/shopping/shoppingSlice";

//store
export default configureStore({
  reducer : {
    user : LoginSlice,
    shopping : shoppingSlice,
  }
})

