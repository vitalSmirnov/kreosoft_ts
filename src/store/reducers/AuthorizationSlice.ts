import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout, registration} from "../actionCreators/authActionCreator";


interface IAuth{
    token: string,
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
            state.isLoading = true;
        },
        [login.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [login.pending.type]: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [registration.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [registration.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [registration.pending.type]: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [logout.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [logout.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [logout.pending.type]: (state)=> {
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default authorizationsSlice.reducer;