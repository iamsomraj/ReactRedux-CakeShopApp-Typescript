import { actionTypes } from "../action-types";

export interface BuyCakeAction {
  type: actionTypes.BUY_CAKE;
  payload: number;
}

export interface BuyIceCreamAction {
  type: actionTypes.BUY_ICECREAM;
}
