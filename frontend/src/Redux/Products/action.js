import fakestoreapi from "../../../apis/fakeStoreApi";

import * as types from "./actionTypes";

export const fetchDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload,
  };
};
export const fetchDataSucces = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
export const fetchDataFaliure = (payload) => {
  return {
    type: types.FETCH_DATA_FALIURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataReq());
    fakestoreapi
      .get("/products")
      .then((res) => dispatch(fetchDataSucces(res.data)))
      .catch((err) => dispatch(fetchDataFaliure(err.data)));
  };
};
