
export interface UserObjectType {
    name: string,
    discordId: string,
    gitlabId: string,
    id: string
}

export interface UserRegisterType{
    login?: string,
    email?: string,
    password: string
}


export interface UserEditModelTypes{
    firstName: string,
    secondName: string,
    thirdName: string,
    gitlabId: string,
    discordId: string
}

export interface SelectProps {
    selectCallback(id: string): void;
    createCallback(): void;
    objects: any[]
}

interface GetUsersAction{
    type: UserActionTypes.GET_USERS,
    users: UserObjectType[],
    status: number,
    error: null | string
}
interface GetUserAction{
    type: UserActionTypes.GET_USER,
    user: UserObjectType,
    status: number,
    error: null | string
}
interface EditAction{
    type: UserActionTypes.EDIT_USER,
    user: UserObjectType,
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
    users: UserObjectType[];
    user: UserObjectType,
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