import { actionTypes } from "../action-types";

export interface BuyCakeAction {
  type: actionTypes.BUY_CAKE;
  payload: number;
}

export interface BuyIceCreamAction {
  type: actionTypes.BUY_ICECREAM;
}

interface FetchUserRequestAction {
  type: actionTypes.FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
  type: actionTypes.FETCH_USER_SUCCESS;
  payload: string[];
}

interface FetchUserErrorAction {
  type: actionTypes.FETCH_USER_FAILURE;
  payload: string;
}

export type FetchUserAction =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
