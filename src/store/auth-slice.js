import { createSlice } from "@reduxjs/toolkit";

const gettingToken = localStorage.getItem("token");
const initialToken = JSON.parse(gettingToken) ? JSON.parse(gettingToken) : null;
const user = localStorage.getItem("loggedUser");

const initialAuthState = {
  token: initialToken,
  isLoggedIn: !!initialToken,
  user: user,
};

console.log(initialAuthState.token);
console.log(initialAuthState.user);

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const convertedExpirationTime = new Date(expirationTime).getTime(); //time in future
//
//   return convertedExpirationTime - currentTime;
// };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
    },

    login(state, token, expirationTime) {
      state.isLoggedIn = true;
      state.token = token;
      const realToken = token.payload;
      localStorage.setItem("token", JSON.stringify(realToken));
    },
    setUser(state, userName) {
      state.user = userName.payload;
    },
  },
});

console.log(authSlice.actions.logout);
export const authActions = authSlice.actions;
export default authSlice.reducer;
