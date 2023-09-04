import {userApi} from "../../shared/api/UsersApi";
import {Dispatch} from "redux";
import {UserAction, UserActionTypes, UserEditModelTypes} from "../types/UserTypes";

export const UsersActionCreators = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        await userApi.getUsers()
            .then((response) => {
                dispatch({type: UserActionTypes.GET_USERS, users: response.data, error: null, status: response.status  })
            })
            .catch((e) => {
                dispatch({type: UserActionTypes.GET_USERS, users: [], error: e.error, status: e.status  })
            })
    }
}

export const UserActionCreators = (userId: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        await userApi.getUser(userId)
            .then((response) => {
                dispatch({type: UserActionTypes.GET_USER, user: response.data, error: null, status: response.status  })
            })
            .catch((e) => {
                dispatch({type: UserActionTypes.GET_USER, user: {
                        name: "",
                        gitlabId : "",
                        discordId: "",
                        id: ""
                },  error: e.error, status: e.status  })
            })
    }
}

export const EditUserActionCreators = (userId: string, data: UserEditModelTypes) => {
    return async (dispatch: Dispatch<UserAction>) => {
        await userApi.editUser(userId, data)
            .then((response) => {
                dispatch({type: UserActionTypes.EDIT_USER, user: response.data,  error: null, status: response.status  })
            })
            .catch((e) => {
                dispatch({type: UserActionTypes.EDIT_USER, user:{
                        name: "",
                        discordId: "",
                        gitlabId: "",
                        id: ""
                    },  error: e.error, status: e.status  })
            })
    }
}

export const DeleteUserActionCreators = (userId: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        await userApi.deleteUser(userId)
            .then((response) => {
                dispatch({type: UserActionTypes.DELETE_USER, message: "success", error: null, status: response.status  })
            })
            .catch((e) => {
                dispatch({type: UserActionTypes.DELETE_USER, message: "error", error: e.error, status: e.status  })
            })
    }
}