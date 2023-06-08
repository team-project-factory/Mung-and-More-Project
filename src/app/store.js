import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../components/main/login/LoginSlice";

//store
export default configureStore({
  reducer : {
    user : LoginSlice
  }
})

