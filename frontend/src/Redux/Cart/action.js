import fakestoreapi from "../../../apis/fakeStoreApi";

import * as types from "./actionType";

const fetchCartReq = (payload) => {
  return {
    type: types.FETCH_CART_REQ,
    payload,
  };
};
const fetchCartSucces = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  };
};
const fetchCartFaliure = (payload) => {
  return {
    type: types.FETCH_CART_FALIURE,
    payload,
  };
};
const cartPostReq = (payload) => {
  return {
    type: types.POST_CART_REQ,
  };
};
const postCartSucces = (payload) => {
  return {
    type: types.POST_CART_SUCCESS,
    payload,
  };
};
const postCartFaliure = (err) => {
  return {
    type: types.POST_CART_FALIURE,
    payload: err,
  };
};
const deleteCartReq = () => {
  return {
    type: types.DELETE_CART_REQ,
  };
};
export const deleteCartSucces = (payload) => {
  return {
    type: types.DELETE_CART_SUCCESS,
    payload,
  };
};
const deleteCartFaliure = (payload) => {
  return {
    type: types.DELETE_CART_FAILURE,
    payload,
  };
};

export const fetchCartData = () => {
  return (dispatch) => {
    dispatch(fetchCartReq());
    fakestoreapi
      .get("/cart")
      .then((res) => dispatch(fetchCartSucces(res.data)))
      .catch((err) => dispatch(fetchCartFaliure(err.data)));
  };
};

export const postCartRequest = (payload) => (dispatch) => {
  dispatch(cartPostReq());
  fakestoreapi
    .post(`/cart`, payload)
    .then((res) => {
      dispatch(postCartSucces(res.data));
    })
    .catch((err) => {
      dispatch(postCartFaliure(err.message));
    });
};

export const deleteCartData = (payload) => {
  return (dispatch) => {
    dispatch(deleteCartReq());
    fakestoreapi
      .delete(`/cart/${payload}`)
      .then((res) => {
        dispatch(deleteCartSucces(res));
      })
      .catch((err) => {
        dispatch(deleteCartFaliure(err.message));
      });
  };
};
export const deleteAllCartData = () => {
  return (dispatch) => {
    dispatch(deleteCartReq());
    fakestoreapi
      .delete(`/cart`)
      .then((res) => {
        dispatch(deleteCartSucces(res));
      })
      .catch((err) => {
        dispatch(deleteCartFaliure(err.message));
      });
  };
};
