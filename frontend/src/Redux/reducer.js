import {
  FETCH_PRODUCTS,
  SELECTED_PRODUCT,
  COUNTER,
  PRODUCT_LIST,
  CART,
} from "./constant";

const INIT_STATE = {
  AllProducts: [],
  selectedProduct: {},
  cart: [],
  counter: 0,
};

export const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, AllProducts: [...payload] };
    case PRODUCT_LIST:
      return { ...state, AllProducts: [...payload] };
    case SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case CART:
      return { ...state, cart: [...payload] };
    case COUNTER:
      return { ...state, counter: payload };
    default:
      return state;
  }
};
