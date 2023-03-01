import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: [],
};

const RegionInfoReducer = createSlice({
  name: "region",
  initialState,
  reducers: {
    SetRegionInfo: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { SetRegionInfo } = RegionInfoReducer.actions;

export default RegionInfoReducer.reducer;
