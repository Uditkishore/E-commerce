import { ITEM, SELECTED_PRODUCT, SELECTED_PRODUCT_CART } from "./constant";

export const productItem = (data) => {
  return {
    type: ITEM,
    payload: data,
  };
};

export const selectedItem = (data) => {
  return {
    type: SELECTED_PRODUCT,
    payload: data,
  };
};
export const cart = (data) => {
  return {
    type: SELECTED_PRODUCT_CART,
    payload: data,
  };
};
