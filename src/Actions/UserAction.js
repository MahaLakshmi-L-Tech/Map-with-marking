import axios from "axios";
import { SetUser, setShowLogout } from "../Reducers/UserReducer";

export const GetUsersInfo = (username, password) => {
  return (dispatch) => {
    axios
      .get(`https://dummyjson.com/users/search?q=${username}&${password}`)
      .then((response) => {
        const userInfo = response.data;

        if (userInfo.users.length) {
          dispatch(SetUser(userInfo.users[0]));
          dispatch(setShowLogout(true));
        } else {
          dispatch(setShowLogout(false));
        }
      })

      .catch((err) => {
        dispatch(setShowLogout(false));
      });
  };
};
