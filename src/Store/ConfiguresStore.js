import { configureStore } from "@reduxjs/toolkit";
import RegionInfoReducer from "../Reducers/RegionInfoReducer";
import UserReducer from "../Reducers/UserReducer";

export const store = configureStore({
  reducer: {
    userInfo: UserReducer,
    regionInfo: RegionInfoReducer,
  },
});
