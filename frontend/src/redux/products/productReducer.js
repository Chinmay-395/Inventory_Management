import {
  PRODUCT_DATA_CREATE,
  PRODUCT_DATA_FETCHED,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_FAILED,
} from "../ActionTypes";

export const product_reducer = (
  state = {
    isLoading: true,
    error: null,
    products: [],
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_DATA_CREATE:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
      };
    case PRODUCT_DATA_FETCHED:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
      };
    case PRODUCT_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        products: [],
      };
    case PRODUCT_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        products: null,
      };
    default:
      return state;
  }
};
