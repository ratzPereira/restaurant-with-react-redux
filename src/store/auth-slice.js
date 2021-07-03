import { createSlice } from "@reduxjs/toolkit";

const gettingToken = localStorage.getItem("token");
const initialToken = JSON.parse(gettingToken) ? JSON.parse(gettingToken) : null;

const initialAuthState = {
  token: initialToken,
  isLoggedIn: !!initialToken,
};

console.log(initialAuthState.token);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, token) {
      state.isLoggedIn = true;
      state.token = token;
      const realToken = token.payload;
      localStorage.setItem("token", JSON.stringify(realToken));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
