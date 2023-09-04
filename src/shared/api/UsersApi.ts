import axios from "axios";
import {UserEditModelTypes} from "../../Reducers/types/UserTypes";

const instance = axios.create({
    baseURL: "http://localhost:5182/api/",
});


instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});


function getUsers() {
    return instance.get('/users')
        .then(response => {
                return {
                    status: response.status,
                    data: response.data
                };
        })
        .catch(error => {
            return {
                data: "error",
                status: error.response.status,
                error: error.response.statusText
            };
        })
}

function getUser(userId: string) {
    return instance.get(`/users/${userId}`)
        .then(response => {
                return {
                    status: response.status,
                    data: response.data
                };
        })
        .catch(error => {
            return {
                data: "error",
                status: error.response.status,
                error: error.response.statusText
            };
        })
}

function editUser(userId: string, data: UserEditModelTypes) {
    return instance.put(`/users/${userId}/edit`, data)
        .then(response => {
                return {
                    data: response.data,
                    status: response.status,
                };
        })
        .catch(error => {
            return {
                data: "error",
                status: error.response.status,
                error: error.response.statusText
            };
        })
}

function deleteUser(userId: string) {
    return instance.delete(`/users/${userId}/edit`)
        .then(response => {
                return {
                    status: response.status,
                    data: response.data
                };
        })
        .catch(error => {
            return {
                data: "error",
                status: error.response.status,
                error: error.response.statusText
            };
        })
}

export const userApi = {
    getUser: getUser,
    getUsers: getUsers,
    editUser: editUser,
    deleteUser: deleteUser
}