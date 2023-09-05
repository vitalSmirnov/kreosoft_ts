export interface IUser{
    name: string,
    discordId: string,
    gitlabId: string,
    id: string
}

export interface UserRegisterModel{
    login?: string,
    email?: string,
    password: string
}

export interface IToken{
    token: string,
}

export interface UserEditModel{
    firstName: string,
    secondName: string,
    thirdName: string,
    gitlabId: string,
    discordId: string,
    id: string
}

export interface SelectProps {
    selectCallback(id: string): void;
    createCallback(): void;
    objects: any[]
}

interface GetUsersAction{
    type: UserActionTypes.GET_USERS,
    users: IUser[],
    status: number,
    error: null | string
}
interface GetUserAction{
    type: UserActionTypes.GET_USER,
    user: IUser,
    status: number,
    error: null | string
}
interface EditAction{
    type: UserActionTypes.EDIT_USER,
    user: IUser,
    status: number,
    error: null | string
}
interface DeleteAction{
    type: UserActionTypes.DELETE_USER,
    message: string,
    status: number,
    error: null | string
}

export interface UserState{
    users: IUser[];
    user: IUser,
    loading: boolean;
    error: null | number;
    message: null | string;
}


export type UserAction = GetUsersAction | GetUserAction | EditAction | DeleteAction;


export enum UserActionTypes {
    GET_USERS = "GET_USERS",
    GET_USER = "GET_USER",
    EDIT_USER = "EDIT_USER",
    DELETE_USER = "DELETE_USER",
}


export enum BtnState{
    active= "primary",
    default = "default"
}