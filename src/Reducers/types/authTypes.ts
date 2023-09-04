interface LoginAction{
    type: AuthActionTypes.LOGIN_USER,
    token: string,
    isRemember: boolean,
    status: number,
    error: null | string
}
interface RegisterAction{
    type: AuthActionTypes.REGISTER_USER,
    token: string,
    status: number,
    error: null | string
}
interface LogoutAction{
    type: AuthActionTypes.LOGOUT_USER,
    message: string,
    status: number,
    error: null | string
}

export interface AuthState{
    token: string;
    loading: boolean;
    error: null | number;
    message: null | string;
}

export type AuthAction = LogoutAction | LoginAction | RegisterAction;


export enum AuthActionTypes {
    LOGIN_USER = "LOGIN_USER",
    REGISTER_USER = "REGISTER_USER",
    LOGOUT_USER = "LOGOUT_USER",
}