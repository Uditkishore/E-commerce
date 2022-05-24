import {
  FETCH_PRODUCTS,
  SELECTED_PRODUCT,
  SELECTED_PRODUCT_CART,
} from "./constant";

const INIT_STATE = {
  AllProducts: [],
  selectedProduct: {},
  cart: [],
};

export const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, AllProducts: [...payload] };
    case SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case SELECTED_PRODUCT_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
