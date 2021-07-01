import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, token) {
      state.isLoggedIn = true;
      state.token = token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
