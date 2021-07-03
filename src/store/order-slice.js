import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: "",
  order: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialAuthState,
  reducers: {
    addOrder() {},
  },
});

export const authActions = orderSlice.actions;
export default orderSlice.reducer;
