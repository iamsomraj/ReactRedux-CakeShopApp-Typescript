import { actionTypes } from "../action-types";
import { BuyCakeAction, BuyIceCreamAction, FetchUserAction } from "../actions";
import axios from "axios";
import { Dispatch } from "redux";

export const buyCake = (order: number = 1): BuyCakeAction => {
  return {
    type: actionTypes.BUY_CAKE,
    payload: order,
  };
};

export const buyIceCream = (): BuyIceCreamAction => {
  return {
    type: actionTypes.BUY_ICECREAM,
  };
};

export const fetchUser = () => async (dispatch: Dispatch<FetchUserAction>) => {
  dispatch({
    type: actionTypes.FETCH_USER_REQUEST,
  });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const names = data.map((user: { name: string }) => user.name);
    dispatch({
      type: actionTypes.FETCH_USER_SUCCESS,
      payload: names,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_USER_FAILURE,
      payload: error.message,
    });
  }
};
