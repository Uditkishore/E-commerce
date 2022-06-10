import * as types from "./actionType";

const initState = {
  singleProduct: {},
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQ:
      return {
        ...state,
        singleProduct: payload,
      };
    default:
      return state;
  }
};

export default reducer;
