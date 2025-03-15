import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    getProfileRequest: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    },
    getProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.message = action.payload.message;
    },
    getProfileFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  }
});

export const { clearError, clearMessage, loginRequest, loginSuccess, loginFail, getProfileFail, getProfileSuccess, getProfileRequest } = userSlice.actions;

export default userSlice.reducer;