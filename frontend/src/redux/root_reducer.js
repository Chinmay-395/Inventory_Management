import { combineReducers } from "redux";
import { product_reducer } from "./products/productReducer";

const rootReducer = combineReducers({
  product_data: product_reducer,
});

export default rootReducer;
