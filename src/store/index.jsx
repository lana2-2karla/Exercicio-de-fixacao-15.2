import { combineReducers, createStore } from "redux";
import characterReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ characters: characterReducer });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
