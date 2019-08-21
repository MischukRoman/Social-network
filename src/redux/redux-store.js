import {combineReducers, createStore} from "redux";
import dislogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dislogsReducer
});

let store = createStore(reducers);

export default store;