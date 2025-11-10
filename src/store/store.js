// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import uiReducer from "./uiSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});
