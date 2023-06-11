import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
  name : 'user',
  initialState : {},
  reducers :{
    loginUser : (state, action)=>{
      sessionStorage.setItem('user',JSON.stringify(action.payload.name));
    }
  }
})

export const {loginUser} = LoginSlice.actions

export default LoginSlice.reducer