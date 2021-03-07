import { actionTypes } from "../action-types";
import { BuyCakeAction } from "../actions/index";

interface CakeState {
  numOfCakes: number;
}

const initialState: CakeState = {
  numOfCakes: 10,
};

const cakeReducer = (
  state: CakeState = initialState,
  action: BuyCakeAction
): CakeState => {
  switch (action.type) {
    case actionTypes.BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
