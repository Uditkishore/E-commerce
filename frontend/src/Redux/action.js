import fakestoreapi from "../../apis/fakeStoreApi";
import {
  SELECTED_PRODUCT,
  SELECTED_PRODUCT_CART,
  FETCH_PRODUCTS,
} from "./constant";

export const fetchApi = () => async (dispatch) => {
  const response = await fakestoreapi.get("/product");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const selectedItem = (payload) => ({ type: SELECTED_PRODUCT, payload });
export const cart = (payload) => ({ type: SELECTED_PRODUCT_CART, payload });
