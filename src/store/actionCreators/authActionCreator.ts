import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IToken, UserRegisterModel} from "../../models/IUser";



const instance = axios.create({
    baseURL: "http://localhost:5182/api/",
});
instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export const login = createAsyncThunk(
    'login',
    async (data: UserRegisterModel, thunkAPI) => {
        try {
            const response = await instance.post<IToken>('auth/login', data)
            return response.data.token;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)
export const registration = createAsyncThunk(
    'register',
    async (data: UserRegisterModel, thunkAPI) => {
        try{
            const response = await instance.post<IToken>('auth/registration', data)
            return response.data.token;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

export const logout = createAsyncThunk(
    'logout',
    async (userId: string, thunkAPI) => {
        try{
            const response = await instance.post(`/auth/logout/${userId}`)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

