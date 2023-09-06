import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout, registration} from "../actionCreators/authActionCreator";


interface IAuth{
    token: string | null,
    isLoading: boolean,
    error: string
}


const initialState: IAuth = {
    token: '',
    isLoading: false,
    error: ''
}

export const authorizationsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [login.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [login.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [login.fulfilled.type]: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            sessionStorage.setItem("token", action.payload);
            state.isLoading = false;
            state.error = 'success';

        },

        [registration.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [registration.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [registration.fulfilled.type]: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [logout.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [logout.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [logout.fulfilled.type]: (state)=> {
            state.token = null;
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default authorizationsSlice.reducer;