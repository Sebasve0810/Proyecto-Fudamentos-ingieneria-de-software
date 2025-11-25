import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");
const user = sessionStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!token,
    token: token || null,
    user: user ? JSON.parse(user) : null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      sessionStorage.clear();
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
