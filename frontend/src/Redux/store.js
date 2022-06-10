import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";

import productReducer from "./Products/reducer";
import authReducer from "./Auth/reducer";
import singleProduct from "./SingleProduct/reducer";
import cartData from "./Cart/reducer";
import checkoutData from "./Checkout/reducer";

const rootReducer = combineReducers({
  ecommerceData: productReducer,
  isAuth: authReducer,
  singleProduct,
  checkoutData,
  cartData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
