import { legacy_createStore, combineReducers } from "redux";
import contactsReducer from "./reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const Store = legacy_createStore(rootReducer);

export default Store;
