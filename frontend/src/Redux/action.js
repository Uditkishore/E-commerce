import fakestoreapi from "../../apis/fakeStoreApi";

import {
  FETCH_PRODUCTS,
  SELECTED_PRODUCT,
  COUNTER,
  PRODUCT_LIST,
} from "./constant";

export const selectedItem = (payload) => ({ type: SELECTED_PRODUCT, payload });
export const productListItem = (payload) => ({ type: PRODUCT_LIST, payload });
export const countAction = (payload) => ({ type: COUNTER, payload });

export const fetchApi = () => async (dispatch) => {
  const response = await fakestoreapi.get("/product");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};
