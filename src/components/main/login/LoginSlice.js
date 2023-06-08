import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
  name : 'user',
  initialState : {},
  reducers :{
    loginUser : (state, action)=>{
      console.log(action.payload);
    }
  }
})

export const {loginUser} = LoginSlice.actions

export default LoginSlice.reducer