const initialState = {
  totalProducts: 0,
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        totalProducts: action.payload.length,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
