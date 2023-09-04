import {UserAction, UserActionTypes, UserState} from "./types/UserTypes";


const initialState : UserState = {
    users: [],
    user:{
        name: "",
        gitlabId : "",
        discordId: "",
        id: ""
    },
    loading: false,
    message: "",
    error: null,

}


export function userReducer(state=initialState, action: UserAction) : UserState{
    const newState= {...state};
    switch (action.type){
        case UserActionTypes.GET_USERS:
            newState.users = [...action.users];
            return newState;
        case UserActionTypes.GET_USER:
            newState.user.id = action.user.id;
            newState.user.name = action.user.name;
            newState.user.discordId = action.user.discordId;
            newState.user.gitlabId = action.user.gitlabId;
            return newState;
        case UserActionTypes.EDIT_USER:
            newState.user.id = action.user.id;
            newState.user.name = action.user.name;
            newState.user.discordId = action.user.discordId;
            newState.user.gitlabId = action.user.gitlabId;
            return newState;
        case UserActionTypes.DELETE_USER:
            return newState;
        default:
            return newState;

    }
}