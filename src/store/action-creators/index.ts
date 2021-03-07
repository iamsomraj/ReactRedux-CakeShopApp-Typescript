import { actionTypes } from "../action-types";
import { BuyCakeAction, BuyIceCreamAction } from "../actions";

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
