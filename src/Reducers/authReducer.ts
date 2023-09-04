import {AuthActionTypes, AuthState, AuthAction} from "./types/authTypes";



const initialState: AuthState = {
    token: "",
    loading: false,
    message: "",
    error: null,
}




export function authReducer(state= initialState, action : AuthAction) : AuthState {
    const newState = {...state}
    switch(action.type){
        case AuthActionTypes.LOGIN_USER:
            if (action.status === 200) {
                if(action.isRemember){
                    localStorage.setItem("token", action.token);
                }
                sessionStorage.setItem("token", action.token);
                newState.token = action.token;
                newState.message = "success";
            }
            else{
                newState.message = action.error
                newState.error = action.status;
            }
            console.log(action);
            return newState;
        case AuthActionTypes.REGISTER_USER:
            console.log(action);
            return newState;
        case AuthActionTypes.LOGOUT_USER:
            console.log(action);
            return newState;
        default:
            return newState;
    }
}
