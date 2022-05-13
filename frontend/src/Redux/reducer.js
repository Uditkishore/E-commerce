import { ITEM, SELECTED_PRODUCT, SELECTED_PRODUCT_CART } from "./constant";

export const productItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ITEM:
      return [...payload];
    default:
      return state;
  }
};

export const selectedItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...payload };
    default:
      return state;
  }
};
export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT_CART:
      return { ...payload };
    default:
      return state;
  }
};
