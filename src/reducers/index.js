import { combineReducers } from "redux";
import firstReducer from "reducers/firstReducer";
import secondReducer from "reducers/secondReducer";
export default combineReducers({
  first: firstReducer,
  second: secondReducer,
});
