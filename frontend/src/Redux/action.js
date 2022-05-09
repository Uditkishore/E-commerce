import { ITEM } from "./constant";

export const productItem = (data) => {
  return {
    type: ITEM,
    payload: data,
  };
};
