import { actionTypes } from "../action-types";

export const buyCake = () => {
  return {
    type: actionTypes.BUY_CAKE,
  };
};

export const buyIceCream = () => {
  return {
    type: actionTypes.BUY_ICECREAM,
  };
};
