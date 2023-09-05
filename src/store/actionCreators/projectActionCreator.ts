import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../models/IUser";



const instance = axios.create({
    baseURL: "http://localhost:5182/api/",
});
instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export const fetchProjects = createAsyncThunk(
    'projects',
    async (_, thunkAPI) => {
        try{
            const response = await instance.get<IUser[]>('/projects')
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)
export const fetchProject = createAsyncThunk(
    'project',
    async (projectId: string, thunkAPI) => {
        try{
            const response = await instance.get<IUser>(`/projects/${projectId}`)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

