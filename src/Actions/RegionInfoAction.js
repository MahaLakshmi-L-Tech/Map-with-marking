import axios from "axios";
import { SetRegionInfo } from "../Reducers/RegionInfoReducer";

export const RegionInfo = (regionName) => {
  return (dispatch) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${regionName}`)
      .then((response) => {
        const regionInfo = response.data;
        dispatch(SetRegionInfo(regionInfo));
      })
      .catch((err) => {
        dispatch(SetRegionInfo({}));
      });
  };
};
