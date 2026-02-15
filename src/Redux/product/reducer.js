import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCESS,
} from "./action";

const initialState = {
  totalProducts: 0,
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  if (action.type === FETCH_PRODUCTS_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_PRODUCTS_SUCESS) {
    return {
      ...state,
      loading: false,
      products: action.products,
    };
  } else if (action.type === FETCH_PRODUCTS_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
};
