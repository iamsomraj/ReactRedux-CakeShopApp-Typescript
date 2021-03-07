import { actionTypes } from "../action-types";
import { BuyIceCreamAction } from "../actions";

interface IceCreamState {
  numOfIceCream: number;
}

const initialState: IceCreamState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (
  state: IceCreamState = initialState,
  action: BuyIceCreamAction
): IceCreamState => {
  switch (action.type) {
    case actionTypes.BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
