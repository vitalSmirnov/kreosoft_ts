import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../types/authTypes";
import {authApi, ILogin} from "../../shared/api/AuthApi";


export const loginUserActionCreator = (data : ILogin) => {
    return async (dispatch : Dispatch<AuthAction>) => {
        await authApi.logIn(data)
            .then((response) => {
                // @ts-ignore
                dispatch({type: AuthActionTypes.LOGIN_USER, token: response.data.token, isRemember: data.remember, status: response.status, error: null})
            })
            .catch((e) => {
                dispatch({type: AuthActionTypes.LOGIN_USER, token: "", isRemember: false, status: e.status, error: e.error})
            })
    }
}