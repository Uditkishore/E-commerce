import { ITEM } from "./constant";

export const productItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ITEM:
      return [...payload];
    default:
      return state;
  }
};
