import * as types from "./actionType";

const initState = {
  cart: [],
  isError: false,
  isLoading: true,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_CART_REQ:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: payload,
        isError: false,
        isLoading: false,
      };
    case types.FETCH_CART_FALIURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.POST_CART_REQ:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case types.POST_CART_SUCCESS:
      return {
        ...state,
        cart: payload,
        isError: false,
        isLoading: false,
      };
    case types.POST_CART_FALIURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case types.DELETE_CART_REQ:
      return {
        ...state,
        isError: false,
      };
    case types.DELETE_CART_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case types.DELETE_CART_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
