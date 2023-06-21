import { createSlice } from "@reduxjs/toolkit";

const OrderListSlice = createSlice({
    name: "orderList",
    initialState: {orderlist: []},
    reducers: {
        getOrderData: (state, action) => {
            state.orderlist.push(action.payload)
        },
    },
});

export const { getOrderData } = OrderListSlice.actions;
export default OrderListSlice.reducer;
