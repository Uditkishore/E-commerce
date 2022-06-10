import fakestoreapi from "../../../apis/fakeStoreApi";

import * as types from "./actionType";

const checkoutReq = () => {
  return {
    type: types.CHECKOUT_REQ,
  };
};
const checkoutSucces = (payload) => {
  return {
    type: types.CHECKOUT_SUCCESS,
    payload,
  };
};
const checkoutFaliure = (payload) => {
  return {
    type: types.CHECKOUT_FAILURE,
    payload,
  };
};

export const fetchCheckoutData = (payload) => (dispatch) => {
  dispatch(checkoutReq());
  fakestoreapi
    .post(`/checkout`, payload)
    .then((res) => dispatch(checkoutSucces(res.data)))
    .catch((err) => dispatch(checkoutFaliure(err.data)));
};
