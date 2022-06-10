import { loadData, saveData } from "../../utils/localstorage";

const user = loadData("user");

import * as types from "./actionType";

const initState = {
  isAuth: user ? true : false,
  user: user || "",
  isError: false,
  isLoding: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      saveData("user", payload);
      return {
        ...state,
        isAuth: true,
        user: payload,
        isError: false,
        isLoding: false,
      };
    case types.LOGIN_FALIURE:
      return {
        ...state,
        isAuth: false,
        user: "",
        isError: true,
        isLoding: false,
      };
    case types.CLEAR_DATA:
      saveData("user", payload);
      return {
        ...state,
        isAuth: false,
        user: "",
        isError: false,
        isLoding: true,
      };
    default:
      return state;
  }
};

export default authReducer;
