import { actionTypes } from "../action-types";
import { FetchUserAction } from "../actions/index";
interface UserState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = (
  state: UserState = initialState,
  action: FetchUserAction
): UserState => {
  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return {
        loading: true,
        data: [],
        error: null,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
