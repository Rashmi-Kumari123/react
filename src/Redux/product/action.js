import axios from "axios";

const api = "https://fakestoreapi.com/products";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(api);
    console.log("fetch successful", response.data);
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("fetch error", error);
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error });
  }
};
