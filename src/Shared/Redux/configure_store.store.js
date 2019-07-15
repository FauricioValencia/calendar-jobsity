import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import roootReducer from "./root_reducer.reducer";

export default function configureStore(initialState) {
  return createStore(
    roootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
