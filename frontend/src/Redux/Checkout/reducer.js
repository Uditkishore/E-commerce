import * as types from "./actionType";

const initState = {
  checkoutData: [],
  error: "",
  isLoading: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHECKOUT_REQ:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case types.CHECKOUT_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
        isLoading: false,
      };
    case types.CHECKOUT_FAILURE:
      return {
        ...state,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
