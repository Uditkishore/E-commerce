import { combineReducers, createStore } from "redux";
import {
  productItemReducer,
  selectedItemReducer,
  cartReducer,
} from "./reducer";

const allState = combineReducers({
  productItemReducer,
  selectedItemReducer,
  cartReducer,
});

export const store = createStore(allState);
