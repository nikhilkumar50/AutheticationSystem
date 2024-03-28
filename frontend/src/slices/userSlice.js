import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setLoginError, clearUser } = userSlice.actions;

export default userSlice.reducer;
