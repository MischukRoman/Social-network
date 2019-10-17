import {combineReducers, createStore} from "redux";
import dislogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dislogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;