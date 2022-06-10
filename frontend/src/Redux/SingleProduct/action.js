import * as types from "./actionType";

export const getSingleProduct = (payload) => {
  return {
    type: types.SELECTED_PRODUCT,
    payload,
  };
};
