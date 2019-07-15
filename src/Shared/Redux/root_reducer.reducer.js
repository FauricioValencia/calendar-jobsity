import { combineReducers } from "redux";
import reminders from "./Reducers/reminders.reducer";

const rootReducer = combineReducers({
  reminders
});

export default rootReducer;
