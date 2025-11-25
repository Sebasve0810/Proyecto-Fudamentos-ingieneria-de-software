// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: true,

  login: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token, loading: false });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null, loading: false });
  },

  loadFromStorage: () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (token && user) {
      set({ user, token, loading: false });
    } else {
      set({ loading: false });
    }
  },
}));
