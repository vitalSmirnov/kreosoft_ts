import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {deleteUser, editUser, fetchUser, fetchUsers} from "../actionCreators/userActionCreator";


interface UserState{
    users: IUser[],
    user: IUser,
    isLoading: boolean,
    error: string
}


const initialState: UserState = {
    users: [],
    user: {
        name: "",
        discordId: "",
        gitlabId: "",
        id: ""
    },
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchUsers.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>)=> {
            state.users = action.payload;
            state.isLoading = false;
            state.error = '';
        },


        [fetchUser.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>)=> {
            state.user = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [editUser.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [editUser.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [editUser.fulfilled.type]: (state, action: PayloadAction<IUser>)=> {
            state.user = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [deleteUser.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [deleteUser.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [deleteUser.fulfilled.type]: (state)=> {
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default userSlice.reducer;