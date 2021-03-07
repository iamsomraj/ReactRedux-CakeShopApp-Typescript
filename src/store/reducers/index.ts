import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
