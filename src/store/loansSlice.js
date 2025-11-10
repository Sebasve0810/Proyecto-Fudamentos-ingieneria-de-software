// src/store/loansSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// Thunks
export const fetchMyLoans = createAsyncThunk(
  "loans/fetchMyLoans",
  async (usuarioId, thunkAPI) => {
    try {
      const res = await api.get(`/prestamos/usuario/${usuarioId}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const requestLoan = createAsyncThunk(
  "loans/requestLoan",
  async ({ usuarioId, libroId }, thunkAPI) => {
    try {
      const res = await api.post(`/prestamos`, { usuarioId, libroId });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const loansSlice = createSlice({
  name: "loans",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearLoans(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyLoans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyLoans.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMyLoans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(requestLoan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestLoan.fulfilled, (state, action) => {
        state.loading = false;
        // agregar el préstamo nuevo al inicio
        state.items = [action.payload, ...state.items];
      })
      .addCase(requestLoan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearLoans } = loansSlice.actions;
export default loansSlice.reducer;
