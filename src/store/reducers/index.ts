import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
  users: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
