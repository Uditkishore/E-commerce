import fakestoreapi from "../../apis/fakeStoreApi";

import {
  FETCH_PRODUCTS,
  SELECTED_PRODUCT,
  COUNTER,
  PRODUCT_LIST,
  CART,
} from "./constant";

export const productListItem = (payload) => ({ type: PRODUCT_LIST, payload });
export const selectedItem = (payload) => ({ type: SELECTED_PRODUCT, payload });
export const countAction = (payload) => ({ type: COUNTER, payload });

export const cartAction = () => async (dispatch) => {
  const cartRes = await fakestoreapi.get("/cart");
  dispatch({ type: CART, payload: cartRes.data });
};

export const fetchApi = () => async (dispatch) => {
  const response = await fakestoreapi.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};
