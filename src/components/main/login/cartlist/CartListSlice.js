import { createSlice } from "@reduxjs/toolkit";

const CartListSlice = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    getCartData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCartData } = CartListSlice.actions;
export default CartListSlice.reducer;
