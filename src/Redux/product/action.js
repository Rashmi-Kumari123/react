import axios from "axios";

const api = "https://fakestoreapi.com/products";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCESS = "FETCH_PRODUCTS_SUCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(api);
    console.log("fetch successful", response.data);
    dispatch({ type: FETCH_PRODUCTS_SUCESS, products: response.data });
  } catch (error) {
    console.log("fetch error", error);
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
