import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser, UserEditModel} from "../../models/IUser";



const instance = axios.create({
    baseURL: "http://localhost:5182/api/",
});
instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export const fetchUsers = createAsyncThunk(
    'users',
    async (_, thunkAPI) => {
        try{
            const response = await instance.get<IUser[]>('/users')
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)
export const fetchUser = createAsyncThunk(
    'user',
    async (userId: string, thunkAPI) => {
        try{
            const response = await instance.get<IUser>(`/user/${userId}`)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

export const editUser = createAsyncThunk(
    'user/edit',
    async (data: UserEditModel, thunkAPI) => {
        try{
            const response = await instance.put<IUser>(`/users/${data.id}/edit`, data)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

export const deleteUser = createAsyncThunk(
    'user/delete',
    async (userId: string, thunkAPI) => {
        try{
            const response = await instance.delete<IUser>(`/users/${userId}/delete`)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)
