import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "../Reducers/authReducer";
import {userReducer} from "../Reducers/userReducer";
import {projectReducer} from "../Reducers/projectReducer";

const reducers  = combineReducers({
    authorization: authReducer,
    users: userReducer,
    projects: projectReducer
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;