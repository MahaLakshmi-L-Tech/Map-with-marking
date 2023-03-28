import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  logOut: null,
};

const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    setFailedCall: (state, action) => {
      state.logOut = action.payload;
    },
    setShowLogout: (state, action) => {
      if (!action.payload) {
        state.user = {};
      }
      state.logOut = action.payload;
    },
  },
});

export const { SetUser, setFailedCall, setShowLogout } = UserReducer.actions;

export default UserReducer.reducer;
