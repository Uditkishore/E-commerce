import fakestoreapi from "../../../apis/fakeStoreApi";

import * as types from "./actionType";

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};
export const loginFaliure = (err) => {
  return {
    type: types.LOGIN_FALIURE,
    payload: err,
  };
};
export const clearUser = (payload) => {
  return {
    type: types.CLEAR_DATA,
    payload,
  };
};

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginRequest());
  const { email, password } = payload;
  fakestoreapi
    .post(`/login`, { email, password })
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFaliure(err.message));
    });
};
