import {
  // PRODUCT_DATA_CREATE,
  PRODUCT_DATA_FETCHED,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_FAILED,
} from "../ActionTypes";
import axios from "axios";

export const fetchStart = () => {
  return {
    type: PRODUCT_DATA_LOADING,
  };
};

export const fetchComplete = (data) => {
  return {
    type: PRODUCT_DATA_FETCHED,
    payload: data,
  };
};

export const fetchError = (error) => {
  return {
    type: PRODUCT_DATA_FAILED,
    payload: error,
  };
};

export const fetchProduct = () => (dispatch) => {
  dispatch(fetchStart());
  let getProducData = async () => {
    await axios
      .get(`http://localhost:4000/product`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("THE RESPONSE+++++++++++++++", response.data);
        dispatch(fetchComplete(response.data));
      })
      .catch((error) => {
        console.log("THE ERROR+++++++++++++++", error.message);
        dispatch(fetchError(error.message));
      });
  };
  getProducData();
};
