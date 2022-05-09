import { createStore } from "redux";
import { productItemReducer } from "./reducer";

export const store = createStore(productItemReducer);
