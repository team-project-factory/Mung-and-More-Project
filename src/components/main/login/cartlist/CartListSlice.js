import { createSlice } from "@reduxjs/toolkit";


const CartListSlice = createSlice({
  name : "cartList",
  initialState : [],
  reducers : {
    getCartData : (state,action) =>{
      const cartList = state.concat(...action.payload);
      return cartList
    }
  }
})

export const { getCartData } = CartListSlice.actions;
export default CartListSlice.reducer