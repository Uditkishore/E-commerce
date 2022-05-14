import {
  ITEM,
  SELECTED_PRODUCT,
  SELECTED_PRODUCT_CART,
  NEW_CART,
} from "./constant";

export const productItem = (payload) => ({ type: ITEM, payload });
export const selectedItem = (payload) => ({ type: SELECTED_PRODUCT, payload });
export const cart = (payload) => ({ type: SELECTED_PRODUCT_CART, payload });
export const newCart = (payload) => ({ type: NEW_CART, payload });
