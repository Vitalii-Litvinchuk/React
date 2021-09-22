import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import AddContactReducer from "./AddContactReducer"

export default combineReducers({
    ListReducer,
    AddContactReducer
})