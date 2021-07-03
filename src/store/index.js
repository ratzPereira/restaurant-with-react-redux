import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import orderReducer from "./order-slice";

const store = configureStore({
  reducer: { auth: authReducer, order: orderReducer },
});
export default store;
